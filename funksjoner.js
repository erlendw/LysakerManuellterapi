function onScroll(){

    var lengdefratopp = document.body.scrollTop;

    var forsvinn = (100-lengdefratopp)/100;

    var dukkopp = ((lengdefratopp/33)/10)-0.3;

    document.getElementById('endres').style.opacity = (1-dukkopp);

    if(lengdefratopp>100){

    document.getElementById('menu_element').style.opacity = dukkopp;


    }

    else document.getElementById('menu_element').style.opacity = 0;


    if(forsvinn>0){

    document.getElementById('overskrift').style.opacity = forsvinn;



    }

    else{


        document.getElementById('overskrift').style.opacity = 0;

    }

    console.log(1-dukkopp)
}


