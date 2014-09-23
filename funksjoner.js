


function endreInnhold(a){







}



function onScroll(){

    var lengdefratopp = document.body.scrollTop

    if(lengdefratopp>150){

        endreInnhold(0)

    }

    else{
        endreInnhold(1)
    }


}
