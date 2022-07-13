let cielo = document.getElementById('cielo');
let sol = document.getElementById('sol');
let mar = document.getElementById('mar');
let rocas = document.getElementById('rocas');
let titulo = document.getElementById('titulo');
let boton = document.getElementById('boton');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    cielo.style.top = value * 0.25+ 'px';
    sol.style.top = value * 0.5 + 'px';
    mar.style.bot = value * 0.6 + 'px';
    rocas.style.bot = value * 0.8 + 'px';
  //titulo.style.marginRight = margin * 4 + 'px';
    titulo.style.marginTop = margin * 2 + 'px';
    boton.style.marginTop = margin * 2.5 + 'px';
    header.style.top = value * 0.8 + 'px';
})