//Creamos variable para capturar los valores ingresados en el text-area
const textArea = document.querySelector(".encriptar");
const mensaje = document.querySelector(".tarjeta-mensaje");
//Variable que permite reestablecer el texto del placeholder
const placeholderOriginal = textArea.placeholder;
//Variable que almacena todos los elementos de la clase "tarjeta"
const tarjetas = document.querySelectorAll('.tarjeta');

/*La letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "a" es convertida para "ai"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat" */

function btnCopiar() {
    mensaje.select();
    document.execCommand("copy");
    alert(`Mensaje: ${mensaje.value}, copiado.`);
    mensaje.value = "";
};

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
};

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
};

/*---Function Encriptar Texto---*/

function encriptar(stringEncriptado) {
    //Cada letra será reemplazada por el valor correspondiente
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //.toLowerCase genera todo el texto ingresado en minúscula
    stringEncriptado = stringEncriptado.toLowerCase();

    //Verifica si el campo de texto está vacío
    if (stringEncriptado === "") {
        //Cambia el placeholder del text-area
        textArea.placeholder = "El campo de texto, NO debe estar vacío.";
        //Reestablece el texto original del placeholder
        setTimeout(() => {
            textArea.placeholder = placeholderOriginal;
        }, 2000);
        return "";
    };
    //Verifica si el campo de texto contiene caracteres especiales o números
    const regex = /[^a-z\s]/;
    if (regex.test(stringEncriptado)) {
        textArea.placeholder = "NO debe tener caracteres especiales NI números.";
        setTimeout(() => {
            textArea.placeholder = placeholderOriginal;
        }, 2000);
        return "";
    };
    
    /*---Proceso de Encriptación---*/
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        };
        //Oculta los elementos de la clase "tarjeta"
        tarjetas.forEach(tarjeta => {
            tarjeta.style.visibility = "hidden";
        });
    };
    return stringEncriptado;
};

/*---Function Desencriptar Texto---*/

function desencriptar(stringDesencriptado) {
    //Cada valor será reemplazado por la letra correspondiente
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    //.toLowerCase genera todo el texto ingresado en minúscula
    stringDesencriptado = stringDesencriptado.toLowerCase();

    //Verifica si el campo de texto está vacío
    if (stringDesencriptado === "") {
        //Cambia el placeholder en el text-area
        textArea.placeholder = "El campo de texto, NO debe estar vacío.";
        setTimeout(() => {
            //Vuelve al texto original del placeholder
            textArea.placeholder = placeholderOriginal;
        }, 2000);
        return "";
    };
    //Verifica si el campo de texto contiene caracteres especiales o números
    const regex = /[^a-z\s]/;
    if (regex.test(stringDesencriptado)) {
        textArea.placeholder = "NO debe tener caracteres especiales Ni números.";
        setTimeout(() => {
            textArea.placeholder = placeholderOriginal;
        }, 2000);
        return "";
    };
    
    /*---Proceso de Desencriptación---*/
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][0])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        };
        //Oculta los elementos de la clase "tarjeta"
        tarjetas.forEach(tarjeta=> {
            tarjeta.style.visibility = "hidden";
        });
    };
    return stringDesencriptado;
};
