function onScroll(){

    var offset = window.pageYOffset;

    console.log(offset);


    if(offset>250){

        callFadein()

    }




}
var opacity = 0;
var opacityfull = 1;
var inkrement = 1/100;
var teller = 0;

var looptimer
function fade(){

    opacity+=inkrement;
    opacityfull-=inkrement;

    document.getElementById('menu_block_animation').style.opacity = opacity;
    document.getElementById('top_block_animation').style.opacity = opacityfull;

    teller++;

    if(teller==100){

        clearInterval(looptimer);


    }
}

function callFadein(){
    looptimer = setInterval(function(){fade()}, 15);
}

