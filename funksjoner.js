function onScroll(){

    var lengdefratopp = document.body.scrollTop;

    var forsvinn = (100-lengdefratopp)/100;

    var dukkopp = (((lengdefratopp/333))-0.3)*2;

    document.getElementById('top_block_animation').style.opacity = (forsvinn+0.35);

    if(lengdefratopp>100){

        document.getElementById('menu_block_animation').style.opacity = dukkopp;


    }

    else document.getElementById('menu_block_animation').style.opacity = 0;


    if(forsvinn>0){

        document.getElementById('sit_title_animation').style.opacity = forsvinn;



    }

    else{


        document.getElementById('sit_title_animation').style.opacity = 0;

    }

    console.log(forsvinn+0.4)
}

