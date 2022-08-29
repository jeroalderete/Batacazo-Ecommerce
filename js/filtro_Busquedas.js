// Filtro de busqueda avanzado

const filtroBusqueda = () => {
  // declaro con var para no tener problemas con el scope
  var input, filtro, section, div, h3, i;

  input = document.getElementById("myInput");
  // declaro el valor del input a la variable filter
  filtro = input.value.toUpperCase();
  section = document.getElementById("mySection");
  div = document.getElementsByTagName("div");

  for (i = 0; i < div.length; i++) {
    // por cada iteracion traigo un div contenedor y cuelgo el titulo de cada producto , traigo desde el indice 0 el primer elemento
    let producto = div[i].getElementsByTagName("h3")[0];

    if (producto) {
      // defino una variable para sumarle el metodo split
      var palabrasEnFiltro = filtro.split(" ");
      // declaro la variable cuando se encuentra el producto
      var hallado = 0;

      // itero sobre el input que ingresa el usuario incluyendo el metodo split

      for (var filtro of palabrasEnFiltro) {
        if (producto.innerHTML.toUpperCase().indexOf(filtro) > -1) {
          hallado++;
        }
      }

      if (hallado === palabrasEnFiltro.length) {
        div[i].style.display = "";
      } else {
        div[i].style.display = "none";
      }
    }
  }
};
