// OBTENGO LA CLASE MODAL CONTENEDOR Y LA ALOJO EN UNA VARIABLE

const modalContenedor = document.getElementsByClassName("modal-contenedor")[0];

// APLICO EVENTO CLICK ASIGNANDOLE UNA CLASE CON EL METODO TOOGLE PARA MOSTRAR

modalContenedor.addEventListener("click", (event) => {
  modalContenedor.classList.toggle("modal-active");
});

// CAPTURO EL ID DEL  BOTON DEL  CARRITO PARA ABRIR

const botonAbrir = document.getElementById("botonAbrirCarrito");
// LE AGREGO UN EVENTO CLICK Y LE AGREGO LA CLASE MODAL ACTIVE CON TOOGLE

botonAbrir.addEventListener("click", () => {
  modalContenedor.classList.toggle("modal-active");
});

// CAPTURO EL ID DEL BOTON DEL  CARRITO PARA CERRAR

const botonCerrarCarrito = document.getElementById("carritoCerrar");
botonCerrarCarrito.addEventListener("click", () => {
  modalContenedor.classList.toggle("modal-active");
});

// CREO UNA VARIABLE Y LE AGREGO LA CLASE MODAL-CARRITO

const modalCarrito = document.getElementsByClassName("modal-carrito")[0];

// A DICHA VARIABLE LE APLICO EVENTO CLICK Y UTILIZO STOP PROPAGATION

modalCarrito.addEventListener("click", (event) => {
  event.stopPropagation();
  //cuando clickeo sobre el modal se finaliza la propagacion del click a los elementos padre
});
