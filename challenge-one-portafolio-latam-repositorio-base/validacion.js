//Haz tú validación en javascript acá

/* empiezo colocando las variables*/
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");

/*aqui escuchamos un evento cuando se envie, y coloco una funcion flecha*/

form.addEventListener("submit", e => {
    /*para que no se envie por defecto*/
    e.preventDefault();

    let alerta = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    mensaje.innerHTML = "";

    /*creo la condicion si el nombre ingresado tiene menos de 6 digitos no es valido*/
    if (nombre.value.length < 6) {
        alerta += `el nombre no es valido, `;
        entrar = true;
    }

    if (!regexEmail.test(email.value)) {
        alerta += `el email no es valido, `;
        entrar = true;
    }

    if (asunto.value.length < 5) {
        alerta += `el asunto no es valido, `;
        entrar = true;
    }

    if (entrar) {
        revisar.innerHTML = alerta;
    }

    else {
        revisar.innerHTML = "enviado";
    }
})