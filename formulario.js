let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let apellidoInput = document.getElementById("apellidoInput");
let direccionInput = document.getElementById("direccionInput");
let cedulaInput = document.getElementById("cedulaInput");
let contactoInput = document.getElementById("contactoInput");
let title = document.getElementById("title");
let forgotPassword = document.getElementById("forgotPassword");
let btnField = document.querySelector(".btn-field");
let ESTADO;

$("#signIn").click(Inicio);
function Inicio() {
    $("#nameInput, #apellidoInput, #direccionInput, #cedulaInput, #contactoInput").hide();
    $(".contenido-formulario").css({"height": "420px", "margin-top": "0px"});
    title.innerHTML = "Iniciar sesión en Agapet";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
    forgotPassword.style.display = "block";
    btnField.classList.add("signInActive");
    ESTADO = "Uno";
}

$("#signUp").click(Regis);
function Regis() {
    $("#nameInput, #apellidoInput, #direccionInput, #cedulaInput, #contactoInput").show();
    $(".contenido-formulario").css({"height": "600px", "margin-top": "20px"});
    title.innerHTML = "¡Bienvenido a Agapet!";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    forgotPassword.style.display = "none";
    btnField.classList.remove("signInActive");
    ESTADO = "Dos";
}

// Expresiones regulares para validación
const NUMEROS = /^[^\d]+$/;
const CORREO = /^[^\s@]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
const regexDireccion = /^(Calle |Carrera |Avenida |Diagonal |Transversal )\d{1,3}(|[a-zA-Z])( Sur| Este| Oeste| Norte| Sureste| Noreste| Suroeste| Suroeste)? (#) [0-9]{1,3}(|[a-zA-Z])(-)[0-9]{1,3}/;
// Variables globales
let NombreG, ApellidoG, DireccionG, CedulaG, NumeroG, CorreoG, ContraseñaG, registrado;

// Registro de usuario
$("#signUp").click(function () {
    let nombre = $("#NombreImput").val().trim();
    let apellido = $("#ApellidoImput").val().trim();
    let direccion = $("#DireccionImput").val().trim();
    let cedula = $("#CedulaImput").val().trim();
    let numero = $("#NumeroImput").val().trim();
    let correo = $("#CorreoImput").val().trim();
    let contraseña = $("#ContraseñaImput").val().trim();

    if (!nombre || !NUMEROS.test(nombre)) return alert("El campo nombre es inválido (no puede contener números)");
    if (!apellido || !NUMEROS.test(apellido)) return alert("El campo apellido es inválido (no puede contener números)");
    if (!direccion || !regexDireccion.test(direccion)) return alert("El campo dirección no es válido");
    if (!cedula || NUMEROS.test(cedula)) return alert("El campo cédula no puede contener letras");
    if (!numero || NUMEROS.test(numero)) return alert("El campo número no puede contener letras");
    if (!correo || !CORREO.test(correo)) return alert("El campo correo no cumple el formato (Ejemplo@gmail.com)");
    if (!contraseña || contraseña.length < 8) return alert("La contraseña debe ser mayor a 8 caracteres");
    
    // Guardar en localStorage
    NombreG = nombre; ApellidoG = apellido; DireccionG = direccion;
    CedulaG = cedula; NumeroG = numero; CorreoG = correo; ContraseñaG = contraseña;
    localStorage.setItem('NombreG', NombreG);
    localStorage.setItem('ApellidoG', ApellidoG);
    localStorage.setItem('DireccionG', DireccionG);
    localStorage.setItem('CedulaG', CedulaG);
    localStorage.setItem('NumeroG', NumeroG);
    localStorage.setItem('CorreoG', CorreoG);
    localStorage.setItem('ContraseñaG', ContraseñaG);
    alert(`Su usuario fue creado con éxito, ¡Bienvenido ${NombreG} ${ApellidoG}!`);
    location.reload();
});

// Inicio de sesión
$(document).ready(function() {
    CorreoG = localStorage.getItem('CorreoG');
    ContraseñaG = localStorage.getItem('ContraseñaG');

    $("#signIn").click(function () {
        if ($("#CorreoImput").val() === CorreoG && $("#ContraseñaImput").val() === ContraseñaG) {
            alert("Iniciando sesión...");
            localStorage.setItem('Registrado', "Si");
            window.location.href = "Inicio.html";
        } else {
            alert("Usuario y/o contraseña incorrectos");
        }
    });
});
