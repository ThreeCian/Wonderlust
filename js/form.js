//Función condicional para cancelar en envío del formulario
function cancelEvent(event) {
    event.preventDefault();
}
//llamo una variable constante para traer el elemento por su ID 
const regis = document.getElementById('regis')

//const conf = document.getElementById(conf)

//agrego el evento de de cancelacion del formulario agrego la accion submit y la función
regis.addEventListener('submit', cancelEvent);
//aqui se agregan los condicionales de validación, y no se da nombre a la función
regis.addEventListener('submit', function () {
    //crear una variable para los condicionales que no validen- será boleano


    let valido = true;
    //variable para enviar error
    let mssFail = '';

    //crear las variables de todos los campos para el LocalStorage

    let nombre = regis['Nombre'].value;
    let apellido = regis['Apellido'].value;
    let correo = regis['correo'].value;
    let psswrd = regis['contraseña'].value;
    let psswrd2 = regis['contraseña2'].value;

    let terminos = regis['Terminos'].checked

    //Condicionales

    if (nombre.lenght > 4) {
        valido = false;
        mssFail += 'Su Nombre no es valido';
        mssFail += '<br>'

    }

    if (apellido.lenght > 4) {
        valido = false;
        mssFail += 'Su Apellido no es valido';
        mssFail += '<br>'

    }
    //para las validaciones de correo con simbolos y orden debe tener tipo de registro
    //debe poner una variable con este registro
    let correoVal = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;
    if (correoVal.test(correo) == false) {
        valido = false;
        mssFail += 'Su Correo no es valido';
        mssFail += '<br>'

    }

    let psswrdVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (psswrdVal.test(psswrd) == false) {
        valido = false;
        mssFail += 'La contraseña debe tener al menos 8 carácteres, 1 letra minuscula, 1 letra mayuscula y 1 número';
        mssFail += '<br>'

    }

    if (psswrd2 != psswrd) {
        valido = false;
        mssFail += '> Las contraseñas no coinciden'
        mssFail += '<br>'
    }

    if (terminos == false) {
        valido = false;
        mensajeError += '> Debe aceptar los terminos y condiciones de uso'
        mensajeError += '<br>'
    }

    let alerta = document.getElementById('alertForm');

    if (valido == false) {
        regis.classList.add('color-val')
        alerta.innerHTML = mssFail
        alerta.hidden = false
    } else {
        window.location = 'index.html'
    }

})

//modificacion del icono para que se vea la contraseña

const passIcon = document.getElementById('pass-icon3')
passIcon.addEventListener('click', function () {
    let passwordInput = regis['contraseña'];
    if (passwordInput.type == "password") {
        passwordInput.type = "text"
        passIcon.classList.replace("fa-eye-slash", "fa-eye")
    } else {
        passwordInput.type = "password"
        passIcon.classList.replace("fa-eye", "fa-eye-slash")
    }
})
const passIcon2 = document.getElementById('pass-icon2')
passIcon2.addEventListener('click', function () {
    let passwordInput2 = regis['contraseña2']
    if (passwordInput2.type == "password") {
        passwordInput2.type = "text"
        passIcon2.classList.replace("fa-eye-slash", "fa-eye")
    } else {
        passwordInput2.type = "password"
        passIcon2.classList.replace("fa-eye", "fa-eye-slash")
    }
})