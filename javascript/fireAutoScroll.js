/**
 * Created by Erlend on 17/10/14.
 *
 *
 * dette er et dokument for å fire autoscroll til elementet vi ønker
 *
 *
 */

/* Alt som trengs for å scrolle til et element er scrolltop */


function autoScrollTo(el){

    var element = document.getElementById(el);

    var lengde = element.scrollTop;


    smooth_scroll_to(document.body, 1200, 1000);/*Midlertidig speed og avstand må sette oss inn i smoothscrollfilen*/



}
