function ejecutarJavaScript()
{
    var inputJS = document.getElementById("codJS");
    var veces = document.getElementById("inputVeces").value;

    eval("for (var i = 0; i < " + veces + "; i++) {" + inputJS.value + "}");
}

function codificarASCII() {
    var inputJS = document.getElementById("codJS");
    var enc = encodeURI(inputJS.value);
    var dec = decodeURI(enc);
    alert(enc + "\n" + dec);
}