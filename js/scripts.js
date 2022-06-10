//Para ocultar barra de navegacion automaticamente.
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.transition = ".25s";
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.transition = "1s";
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

//Preloader para seccion de productos.
var myVar;

function myFunction() {
  myVar = setTimeout(showPage,500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("categorias").style.display = "block";
}