/**
 * Created by Erlend on 17/10/14.
 *
 * Målet med denne filen er å bygge en autoscroller som navigerer til toppen av et element
 *
 */



function scroll_down() {
    var el = document.querySelector('.container');
    smooth_scroll_to(el, el.scrollTop + 400, 600);
}

function scroll_up() {
    var el = document.querySelector('.container');
    smooth_scroll_to(el, el.scrollTop - 500, 600);
}

function sequence() {
    var el = document.querySelector('.container');
    smooth_scroll_to(el, el.scrollTop + 500, 800).then(function() {
        return smooth_scroll_to(el, el.scrollTop - 200, 500);
    }).then(function() {
        return smooth_scroll_to(el, el.scrollTop + 900, 400);
    }).catch(function(error) {
        setTimeout(function() {
            alert("Sequence cancelled: " + error);
        }, 500);
    });
}


/**
 Smoothly scroll element to the given target (element.scrollTop)
 for the given duration

 Returns a promise that's fulfilled when done, or rejected if
 interrupted
 */
var smooth_scroll_to = function(element, target, duration) {
    target = Math.round(target);
    duration = Math.round(duration);
    if (duration < 0) {
        return Promise.reject("bad duration");
    }
    if (duration === 0) {
        element.scrollTop = target;
        return Promise.resolve();
    }

    var start_time = Date.now();
    var end_time = start_time + duration;

    var start_top = element.scrollTop;
    var distance = target - start_top;

    var smooth_step = function(start, end, point) {
        if(point <= start) { return 0; }
        if(point >= end) { return 1; }
        var x = (point - start) / (end - start); // interpolation
        return x*x*(3 - 2*x);
    }

    return new Promise(function(resolve, reject) {

        var previous_top = element.scrollTop;


        var scroll_frame = function() {
            if(element.scrollTop != previous_top) {
                reject("interrupted");
                return;
            }

            // set the scrollTop for this frame
            var now = Date.now();
            var point = smooth_step(start_time, end_time, now);
            var frameTop = Math.round(start_top + (distance * point));
            element.scrollTop = frameTop;


            if(now >= end_time) {
                resolve();
                return;
            }


            if(element.scrollTop === previous_top
                && element.scrollTop !== frameTop) {
                resolve();
                return;
            }
            previous_top = element.scrollTop;

            setTimeout(scroll_frame, 0);
        }

        // boostrap the animation process
        setTimeout(scroll_frame, 0);
    });
}