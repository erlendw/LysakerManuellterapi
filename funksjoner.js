


function endreInnhold(a){


    if(a== 0){

        document.getElementById('endres').className = 'test';
        document.getElementById('spacer').style.height= 300;
    }

    if(a== 1){

        document.getElementById('endres').className = 'top_block';
        document.getElementById('spacer').style.height= 0;

    }





}



function onScroll(){

    var lengdefratopp = document.body.scrollTop;

    var forsvinn = (100-lengdefratopp)/100;

    var dukkopp = (lengdefratopp/33)/10;

    document.getElementById('menu_element').style.opacity = dukkopp;

    if(forsvinn>0){

    document.getElementById('overskrift').style.opacity = forsvinn;
    //document.getElementById('endres').style.opacity = forsvinn;


    }

    else{


        document.getElementById('overskrift').style.opacity = 0;

    }

    console.log((lengdefratopp/33)/10)


   /* if(lengdefratopp>150){

        endreInnhold(0)

    }

    else{
        endreInnhold(1)
    }*/


}
