/**
 * Created by Erlend on 17/10/14.
 *
 * Filen er her for å endre class navnet til elemnter for å endre cssen!
 *
 *
 *
 */

var sjekk = 0;

function endreID(el){



    if(el > 200 && sjekk == 0){

        document.getElementById('js_top_block').className = 'top_block_js';
        document.getElementById('js_mid_block').className = 'mid_block_js';

        fadein('js_top_block')

        sjekk = 1;

    }

    else if(el<200 && sjekk == 1){

        document.getElementById('js_top_block').className = 'top_block';
        document.getElementById('js_mid_block').className = 'mid_block';

        sjekk = 0;
    }

}