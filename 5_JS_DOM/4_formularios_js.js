function ponPrimeraMayus(texto){
    var primeraLetra = texto.charAt(0).toUpperCase();
    var resto = texto.substring(1).toLowerCase();
    return primeraLetra + resto;
}
function validar(){
    var inputNombre = document.getElementById("nombre");
    var nombre = inputNombre.value;

    validarInput(inputNombre, nombre);

    var inputApell_1 = document.getElementById("primer_apellido");
    var apellido1 = inputApell_1.value;

    validarInput(inputApell_1, apellido1);

    var inputApell_2 = document.getElementById("segundo_apellido");
    var apellido2 = inputApell_2.value;

    validarInput(inputApell_2, apellido2);
    
}
function validarInput(inputTexto, texto){
    if ( texto == ""){
        inputTexto.style.borderColor = "#F04040";
    }      else {
                inputTexto.style.borderColor = "";
                inputTexto.value = ponPrimeraMayus(texto);
            }
}