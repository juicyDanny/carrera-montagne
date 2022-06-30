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

//Para la vitriera slideshow en home
let slideIndex = 1;
showSlides(slideIndex);

// Boton Next/previo
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// 
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow-home");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}