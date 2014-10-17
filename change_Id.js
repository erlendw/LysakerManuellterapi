/**
 * Created by Erlend on 17/10/14.
 *
 * Filen er her for å endre class navnet til elemnter for å endre cssen!
 *
 *
 *
 */


function endreID(el){

    if(el > 140){

        document.getElementById('js_top_block').className = 'top_block_js';
        document.getElementById('js_mid_block').className = 'mid_block_js';

    }

    else if(el<140){

        document.getElementById('js_top_block').className = 'top_block';
        document.getElementById('js_mid_block').className = 'mid_block';

    }

}