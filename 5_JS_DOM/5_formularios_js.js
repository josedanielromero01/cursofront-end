/* Ejercicio:
1. Validar que el usuario introduzca un email y contraseña
1.1 Marcar en rojo los campos que no estén rellenados
2. Comprobar que sean iguales entre si
2.1 Marcar en verde cuando sean iguales
2.2 En naranja cunado no
3. Cuando esté correcto, indicar "Registrado con éxito" y el fondo de table, en verde
4. Id pensando que cerveza tomar ^^
*/


function validarInputById(){
    var input = document.getElementById(id);
    var textoInput = input.value
    if (textoInput == ""){
        input.style.borderColor = "red";
    }   else {
            input.style.borderColor = "";
    }
}
function validarFormulario(){
    LO VA A SUBIR LUEGO LO MIRO
}    