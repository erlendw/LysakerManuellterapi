/**
 * Created by Erlend on 21/10/14.
 */

var current = 1;


function setNewContent(content){

    var string;
    var element;






    for(i = 1; i < 5; i++){

        string = 'dynamic_content_' + i;

        element = document.getElementById(string);

        console.log(string)

        if(i == content) {

            element.style.visibility = 'visible';

        }

        else if(i != content){

            element.style.visibility = 'hidden';

        }


    }

}