/**
 * Created by Erlend on 17/10/14.
 *
 * Denne filen håndterer fade inn og ut
 *
 *
 */

var fade_in_from = 0;
var fade_out_from = 10;


function fadein(string){

    console.log(string)

    var target = document.getElementById(string);
    var newSetting = fade_in_from/10;
    target.style.display = "block";

    target.style.opacity = newSetting;

    fade_in_from++;

    if(fade_in_from == 10){

        target.style.opacity = 1;

        clearTimeout(loopTimer);
        fade_in_from = 0;

        return false;

    }

    var loopTimer = setTimeout('fadein(\''+string+'\')',50);



}

function fadeout(string){

    var target = document.getElementById(string);
    var newSetting = fade_out_from/10;

    target.style.opacity = newSetting;

    fade_out_from--;

    if(fade_in_from == 0){

        target.style.opacity = 0;
        clearTimeout(loopTimer);
        fade_out_from = 10;
        return false;


    }

    var loopTimer = setTimeout('fadein(\''+string+'\')',50);

}
