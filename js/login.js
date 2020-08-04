function cancelEvent(event) {
    event.preventDefault();
}


let correoDefault = 'ejemplo@e-mail.com'
let passDefault = 'aaaAAA123'

const login = document.getElementById('inicios')

login.addEventListener('submit', cancelEvent);

login.addEventListener('submit', function () {



    let email = login['e-mail'].value
    let clave = login['password'].value



    if ((email == correoDefault) && (clave == passDefault)) {
        window.location = 'home.html'
    } else {

        let alert = document.getElementById('alertsession')
        alert.textContent = 'Correo o contraseña invalidos'
        alert.hidden = false


    }

})

const passIcon3 = document.getElementById('pass-icon')
passIcon3.addEventListener('click', function () {
    let passwordInput3 = login['password'];
    if (passwordInput3.type == "password") {
        passwordInput3.type = "text"
        passIcon3.classList.replace("fa-eye-slash", "fa-eye")
    } else {
        passwordInput3.type = "password"
        passIcon3.classList.replace("fa-eye", "fa-eye-slash")
    }
})