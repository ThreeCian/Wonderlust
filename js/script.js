const navbar = document.getElementById("navbar")

document.addEventListener("scroll", function () {
    if (window.scrollY > 450) {
        navbar.classList.replace("nav-color", "nav-cambio")
    } else {
        navbar.classList.replace("nav-cambio", "nav-color")
    }
})