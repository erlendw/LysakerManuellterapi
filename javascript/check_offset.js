/**
 * Created by Erlend on 17/10/14.
 *
 * Sjekker offset for siden
 *
 */


var scrolloffset = 0;

function sjekkOffset(){

    scrolloffset = window.pageYOffset;

    console.log(scrolloffset);

    endreID(scrolloffset);

}
