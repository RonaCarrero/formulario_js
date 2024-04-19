function encriptar() {

    var textoIngresado = document.getElementById("msgIngresado").value.toLowerCase();

    var textoEncriptado = textoIngresado.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("img-right").style.display = "none";
    document.getElementById("container-txt-right").style.display = "none";
    document.getElementById("txt-final").style.display = "show";
    document.getElementById("txt-final").style.display = "inherit";
    document.getElementById("btn-copy").style.display = "show";
    document.getElementById("btn-copy").style.display = "inherit";

    document.getElementById("txt-final").value = textoEncriptado;
}

function desencriptar() {
    var textoEncriptado = document.getElementById("msgIngresado").value.toLowerCase();

    var textoDesencriptado = textoEncriptado.replace(/enter/img, "e");
    var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    var textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u")


    document.getElementById("img-right").style.display = "none";
    document.getElementById("container-txt-right").style.display = "none";
    document.getElementById("txt-final").style.display = "show";
    document.getElementById("txt-final").style.display = "inherit";
    document.getElementById("btn-copy").style.display = "show";
    document.getElementById("btn-copy").style.display = "inherit";

    document.getElementById("txt-final").value = textoDesencriptado;

}

function copiar() {

    let txtcopiado = document.getElementById("txt-final");

    txtcopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(txtcopiado.value);
    document.getElementById("msgIngresado").focus();

}