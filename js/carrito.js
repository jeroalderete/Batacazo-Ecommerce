const botonVaciar = document.getElementById("vaciar-carrito");
const contadorCarrito = document.getElementById("contadorCarrito");

// PUSHEAMS LOS PRODUCTOS A UN ARRAY VACIO PRIMERO ANTES DE RENDERIZAR LOS PRODUCTOS EN EL CARRITO

// utilizo var para que tenga un mayor alcance
export var carrito = [];

// obtengo la informacion cuando recargo la pagina

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    renderizarCarrito();
  }
});

export const agregarAlCarrito = (prodId) => {
  // 9 PASO TRABAJAMOS LA CANTIDAD DEL PRODUCTO
  const existe = carrito.some((prod) => prod.id === prodId);
  // utilizo condicional , si existe en el carrito vamos a actualizar la cantidad
  // para eso creo un nuevo arreglo e itero sobre cada elemento
  // map encuentra el elemento agregado y va a sumar la cantidad
  if (existe) {
    //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
    contadorCarrito.innerText = carrito.length;
    const prod = carrito.map((prod) => {
      //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
      // map encuentre cual es el q igual al que está agregado, le suma la cantidad
      if (prod.id === prodId) {
        prod.cantidad++;
      }
    });
  } else {
    // 2 PASO
    /*  const item = stockProductos.find((producto) => producto.id === prodId) */
    fetch("js/stock.json")
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (respuesta) {
        const item = respuesta.find((producto) => producto.id === prodId);
        carrito.push(item);
        // check en consola para ver si funciona
        console.log(carrito);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  renderizarCarrito();
};

// 4 PASO CREO UNA FUNCION PARA PINTAR LOS PRODUCTOS EN EL MODAL  CAPTURO EL CARRITO CONTENEDOR DONDE VOY A ALOJAR LOS PRODUCTOS

const carritoContenedor = document.getElementById("carrito-contenedor");

// ahora para pintar los productos necesito recorrer cada producto dentor del array carrito
// por cada producto creo un div con una clase ya creada para que se inserten bien los producto , creo una funcion dentro de una variable

// RENDERIZO PRODUCTOS EN CARRITO PARA QUE SE PUEDAN VER

export const renderizarCarrito = () => {
  // para que no se acumulen los productos dentro del carrito llamamos al nodo contenedor carrito y declaramos string vacio
  // cada vez que llame a la funcion actualizar carrito lo primero que hago es borrar el nodo despues recorro el array  y lo relleno con la informacion actualizada

  carritoContenedor.innerHTML = "";

  fetch("js/stock.json")
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (respuesta) {
      carrito.forEach((producto) => {
        const div = document.createElement("div");
        div.className = "productoEnCarrito";
        div.classList.add("modal-info");
        div.innerHTML = `
            <p class="modal-info">${producto.nombre}</p>
            <p class="modal-info">Precio:  $${producto.precio}</p>
            <p class="modal-info">Cantidad: <span id="cantidad">${producto.cantidad}</span></p>
            <button id="botoneliminar${producto.id}" onclick="eliminarDelCarrito(${producto.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
            `;

        carritoContenedor.appendChild(div);

        // delcaro set localStorage

        localStorage.setItem("carrito", JSON.stringify(carrito));

        // una vez terminado para que funcione hay que llamar a la funcion despues de que se agrega un item al carrito
        // luego de llamar a la funcion activamos el modal para que se pueda ver dentro

        const botonElim = document.getElementById(
          `botoneliminar${producto.id}`
        );

        botonElim.addEventListener("click", () => {
          eliminarDelCarrito(respuesta, producto.id);
          Swal.fire("Producto Eliminado!", "", "success");
          contadorCarrito.innerText = carrito.length;
          renderizarCarrito();
        });

        // 7 PASO MODIFICAMOS EL CONTADOR
        // EL CONTADOR VA A SER IGUAL A LA LONGITUD DEL CARRITO, APLICO INNERTEXT
        // SE REALIZA DENTRO DEL FOR EACH DEL CARRITO

        contadorCarrito.innerText = carrito.length;
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  // 8 . TRABAJAMOS EL PRECIO TOTAL y PINTAMOS CON INNERTEXT
  const precioTotal = document.getElementById("precioTotal");
  precioTotal.innerText = carrito.reduce(
    (acc, producto) => acc + producto.precio,
    0
  );
};

// 5 PASO CREO UNA FUNCION PARA ELIMINAR PRODUCTOS DEL CARRITO

// cuando llamo a la funcion eliminardelcarrito recibo el id del producto a borrar por parametro
// aplico function por un tema del hoisting , para poder usar la funcion arriba sin problemas

export function eliminarDelCarrito(productoId) {
  // como queremos eliminar los productos que ya esten en el carrito y no en el stock aplico metodo find sobre carrito
  const item = carrito.find((producto) => producto.id === productoId);
  // una vez que tenemos el producto por id , utilizamos el metodo splice sobre el carrito para eliminar
  // splice recibe dos parametros el indice ( del elemento item) y la cantidad a borrar
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  // para que funcione eliminar del carrito llamamos a la funcion actualizar carrito
  // cuando recorrimos el carrito , agregamos un boton con la funcion eliminardelcarrito
  // a cada boton que creamos dentro del carrito le pasamos como evento la funcion eliminardelcarrito con la propiedad id
  renderizarCarrito();
}

// 6 PASO LE DAMOS FUNCIONALIDAD AL BOTON VACIAR CARRITO

// Capturamos el boton vaciar carrito

botonVaciar.addEventListener("click", () => {
  carrito.length = 0;
  contadorCarrito.innerText = carrito.length;
  renderizarCarrito();
});
