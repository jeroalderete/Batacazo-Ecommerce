/* Hamburger Nav Links variables  */

const menuH = document.getElementById('menuH');
const navBarH = document.getElementById("navbarH");
const tiendaH = document.getElementById("tiendaH");

menuH.addEventListener('click', ()=> {
  navBarH.classList.toggle("change");
})

tiendaH.addEventListener('click', () => {
  navBarH.classList.toggle("change");
})

