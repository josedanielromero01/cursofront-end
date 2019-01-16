var listaPersonas = new Array();

// El simbolo de $ es lo mismo que poner jQuery
// Poner el simbolo # antes del  id es lo mismo que poner document.getElementByIDd
// Poner val() es lo mismo que poner .value
// Poner .html() es lo mismo que poner innerHTML y lo que hay dentro de los parentesis de html es lo que estas añadiendo

jQuery(document).ready(function(){
    listaPersonas = new Array();
    jQuery("*").css("border-color", "red");
});

function addPersona(){
    var nuevaPersona = new Object();
    nuevaPersona.nombre = $("#inputNombre").val();
    nuevaPersona.apellidos = $("#inputApellidos").val();
    nuevaPersona.edad = $("#inputEdad").val();
    nuevaPersona.edad = parseInt(nuevaPersona.edad);
    nuevaPersona.email = $("#inputEmail").val();

    listaPersonas[listaPersonas.length] = nuevaPersona;
    /*alert("persona creada: \n"
            +nuevaPersona.nombre + "\n"
            +nuevaPersona.edad + "\n"
            +nuevaPersona.email); */
        listarPersonas();
}
function listarPersonas() {
    $("#divListado").html("<h2>Lista de personas</h2>");
    for (var i = 0; i < listaPersonas.length; i++){
        var persona = listaPersonas [ i ];
        $("#divListado").html( 
        $("#divListado").html() + "<p>Nombre: " + persona.nombre + " Apellidos: " + persona.apellidos + ", Edad: " + persona.edad + ", &lt" + persona.email +   "&gt" + "</p>");

    }
}