/**
 * Created by Erlend on 21/10/14.
 */

var current = 1;


function setNewContent(content){

    var element = document.getElementById('dynamic_content');

    var string = "content/c_";string += content;string+= ".html";




    if(current != content){

    element.setAttribute('data', string);

    current = content;

    }

}