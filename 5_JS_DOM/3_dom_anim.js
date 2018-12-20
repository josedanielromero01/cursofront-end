//Cojemos todos lso div con clase circulo
var Array = document.getElementsByClassName("circulo");
//Los recorremos para pausarlos por JS
for (var i = 0; i < Array.length; i++){
Array[i].style.webkitAnimationPlayState="paused";
}
//Cogemos el DIV padre, con la clase "marco"
var divMarco = document.getElementsByClassName("marco") [0];
//Le añadimos un <INPUT type="button" value"¡Pero anímate!
var bottom = divMarco.appendChild(document.createElement("input"));
bottom.setAttribute("type", "button");
bottom.setAttribute("value", "¡Pero anímate y parate");

//Creamos una función para animar de nuevo los círculos
/*function cuandoSePulsaElBoton(){
    for(var i = 0; i < Array.length; i++){
        Array[i].style.webkitAnimationPlayState="running"; //initial
    }   
}
//cuandoSePulsaElBoton();
bottom.setAttribute("onclick", "cuandoSePulsaElBoton()");
*/



function cuandoSePulsaElBoton(){
    for(var i = 0; i < Array.length; i++){
        if(Array[i].style.webkitAnimationPlayState =="paused"){
        Array[i].style.webkitAnimationPlayState="running"; //initial
        }   else if(Array[i].style.webkitAnimationPlayState =="running"){
            Array[i].style.webkitAnimationPlayState="paused";
            }
    }
}
bottom.setAttribute("onclick", "cuandoSePulsaElBoton()");




/*
var divMarco2 = document.getElementsByClassName("marco") [0];
//Le añadimos un <INPUT type="button" value"¡Pero anímate!
var botton = divMarco2.appendChild(document.createElement("input"));
botton.setAttribute("type", "button");
botton.setAttribute("value", "¡Pero parate!");

//Creamos una función para animar de nuevo los círculos
function cuandoSePulsaElBoton2(){
    for(var i = 0; i < Array.length; i++){
        Array[i].style.webkitAnimationPlayState="paused"; //initial
    }
}
//cuandoSePulsaElBoton();
botton.setAttribute("onclick", "cuandoSePulsaElBoton2()");
*/