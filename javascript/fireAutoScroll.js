/**
 * Created by Erlend on 17/10/14.
 *
 *
 * dette er et dokument for å fire autoscroll til elementet vi ønker
 *
 *
 */


function autoScrollTo(el){

    var element = document.getElementById(el);

    var lengde = element.scrollTop;

    console.log(lengde);

    smooth_scroll_to(document.body, 600, 2000);



}
