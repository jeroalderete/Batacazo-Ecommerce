/* declaro las variables  */

const nombre = document.getElementById("nombre");
const formulario = document.getElementById("formulario");
const enviar = document.getElementById("submit");
const asunto = document.getElementById("asunto");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const error = document.getElementById("error");
error.style.color = "red";
// expresion regular de mail global
let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function checkEmail() {
  var email = document.getElementById("email");
  // expresion regular de mail local
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    Toastify({
      text: "Ingrese un mail correcto",
      duration: 3000,
      destination: "#",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    email.focus;
    return false;
  }
}

/* function enviarFormulario()  */
const enviarFormulario = () => {
  // checkeo en consola si se manda el formulario
  console.log("enviando formulario...");

  // declaro un array vacio para pushear los mensajes de error
  const mensajesError = [];

  // OPTIMIZACION 3 TERNARIO

  // VALIDACION NOMBRE
  nombre.value === null || nombre.value === ""
    ? Toastify({
        text: "Nombre Incorrecto",
        duration: 3000,
        destination: "#",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast()
    : null;

  // VALIDACION EMAIL

  email.value === "" || email.value === ""
    ? Toastify({
        text: "Ingrese un mail correcto",
        duration: 3000,
        destination: "#",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast()
    : null;

  // VALIDACION ASUNTO
  asunto.value === null || asunto.value === ""
    ? Toastify({
        text: "Ingrese un asunto",
        duration: 3000,
        destination: "#",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast()
    : null;

  // VALIDACION MENSAJE
  mensaje.value === null || mensaje.value === ""
    ? Toastify({
        text: "Ingresa tu mensaje",
        duration: 3000,
        destination: "#",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast()
    : null;
  error.innerHTML = mensajesError.join(", ");
};

enviar.addEventListener("click", (e) => {
  if (
    nombre.value === null ||
    nombre.value === "" ||
    email.value === "" ||
    email.value === "" ||
    asunto.value === null ||
    asunto.value === "" ||
    mensaje.value === null ||
    mensaje.value === "" ||
    !filter.test(email.value)
  ) {
    Toastify({
      text: "Formulario Incompleto",
      duration: 3000,
      destination: "#",
      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  } else {
    console.log("enviando formulario...");
    Toastify({
      text: "Formulario enviado con exito !",
      duration: 3000,
      destination: "#",
      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
});
