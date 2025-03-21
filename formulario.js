let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let btnField = document.querySelector(".btn-field");


$("#signUp").click(Regis);
function Regis() {
    $("#nameInput, #apellidoInput, #direccionInput, #cedulaInput, #contactoInput").show();
    $(".contenido-formulario").css({"height": "650px", "margin-top": "20px"});
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    btnField.classList.remove("signInActive");
}

// Expresiones regulares para validación
const Nombres = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ]+(( [A-Za-zÁÉÍÓÚáéíóúÜüÑñ])$)*/;
const Cedula =  /^[0-9]{5,11}$/;
const Celular = /(^(60)[1-7][0-9]{7}|^(3)[0-9]{9})/;
const Correo = /^(?!.*\.\.)[A-Za-z0-9._-]+@[A-Za-z0-9.-]+(\.([A-Za-z]{2,}))+/;
const Contra = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,12}$/;
const Direccion = /^(Calle |Carrera |Avenida |Diagonal |Transversal )\d{1,3}(|[a-zA-Z])( Sur| Este| Oeste| Norte| Sureste| Noreste| Suroeste)? (#) [0-9]{1,3}(|[a-zA-Z])(-)[0-9]{1,3}/;
// Variables globales

// Registro de usuario
$("#signUp").click(function () {
    let nombre = $("#NombreImput").val().trim();
    let apellido = $("#ApellidoImput").val().trim();
    let usuario = $("#UsuarioUmput").val().trim();
    let direccion = $("#DireccionImput").val().trim();
    let cedula = $("#CedulaImput").val().trim();
    let numero = $("#NumeroImput").val().trim();
    let correo = $("#CorreoImput").val().trim();
    let contraseña = $("#ContraseñaImput").val().trim();

    if(!nombre ) return alert("!! El campo Nombre no puede estar vacio !!");
    else if (!Nombres.test(nombre)) return alert("El campo nombre es inválido (No puede contener números)");

    if(!apellido ) return alert("!! El campo Apellido no puede estar vacio !!");
    else if (!Nombres.test(apellido)) return alert("El campo apellido es inválido (No puede contener números)");

    if (!usuario ) return alert("!! El campo Usuario no puede estar vacio !!");
    else if (usuario.length <4) return alert("El usuario debe ser mayor de 4 digitos");
    else if (usuario.length > 12) return alert("El usuario debe ser menor de 12 digitos");

    if(!numero ) return alert("!! El campo Número no puede estar vacio !!");
    else if (!Celular.test(numero)) return alert("El campo Número es invalido debe seguir el siguiente patron:\n\n" +
        "En caso de numero fijo=       Iniciar por  60 (Numero 1-7 indicativo de la region y tras esto los 7 digitos restantes)\n\n" +
        "En caso de numero celular=    Iniciar por  3 y los 9 digistos restantes");

    if (!correo ) return alert("!! El campo Correo no puede estar vacio !!");
    else if (!Correo.test(correo)) return alert("El campo Correo es invalido, Debe contener el siguiente formato:\n" +
        "(El nombre que desee asignarle) @ (El dominio del correo) . (El dominio correspondiente 'Com','Co').");

    if(!direccion ) return alert("!! El campo Direccion no puede estar vacio !!");
    else if (!direccion || !Direccion.test(direccion)) return alert("El campo dirección no es válido");

    if (!cedula ) return alert("!! El campo Cédula no puede estar vacio !!");
    else if (!Cedula.test(cedula)) return alert("El campo cédula no puede contener letras y su longitud es entre 5-10 números");

    if (!contraseña ) return alert("!! El campo Contraseña no puede estar vacio !!");
    else if (!Contra.test(contraseña)) return alert("La contraseña debe cumplir los siguientes requisitos: \n"+"Deb contener una letra mayuscula, una minuscula, un digito especial y una longitud de 8-12 digitos");

    alert(`Su usuario fue creado con éxito, ¡Bienvenido ${nombre} ${apellido}!`);
});