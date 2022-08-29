// 1 . IMPORTO PRODUCTOS
import { agregarAlCarrito, renderizarCarrito } from "./carrito.js";
import { carrito } from "./carrito.js";

// 1 CAPTURO EL CONTENEDOR MAIN DONDE VOY A INYECTAR LOS PRODUCTOS
const contenedorProductos = document.getElementById("contenedor-productos");

// Traigo el stock almacenado en un JSON con fetch y promise e inyecto el html con un foreach

function cargarJSON() {
  fetch("js/stock.json")
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (respuesta) {
      respuesta.forEach(function (producto) {
        const div = document.createElement("div");
        div.classList.add(
          "img-section",
          "portfolio-img",
          "img-render",
          "card",
          "card-filter"
        );
        div.innerHTML += `
            <section class="img-section1 img-section2 img-section3 img-section4 img-section5 img-section6 img-section7">
              <div class="portfolio-img" id="div">
                <img class="img-render" src=${producto.img} alt= "">
                <h3 class="productoNombre">${producto.nombre}</h3>
                <p>${producto.desc}</p>
                <p>Talle: ${producto.talle}</p>
                <p class="precioProducto">Precio: $ ${producto.precio}</p>
                <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button> 
              </div>
            </section>`;
            
        contenedorProductos.appendChild(div);

        const boton = document.getElementById(`agregar${producto.id}`);

        boton.addEventListener("click", () => {
          //esta funcion ejecuta el agregar el carrito con la id del producto
          agregarAlCarrito(producto.id);
          // sweeet alert luego de agregar productos al carrito
          const Toast = Swal.mixin({
            toast: true,
            position: "top-start",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: "Agregado al carrito",
          });
        });
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

/* llamo a la funcion para cargar los productos */

cargarJSON();
