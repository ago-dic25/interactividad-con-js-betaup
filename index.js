//====Variables=====//
var arreglo = [1, 2, 3, 4, 5];
var entero = 1;
var cadena_texto = "Hola Mundo";
var booleano = true;

//===Constantes====//
const PI = 3.1416;


//====Funciones====//
function suma(x, y){
    var resultado = x + y;
    console.log("El resultado de la suma es: " + resultado);
    return resultado;
}

function imprimirMensaje(mensaje){
    console.log("Este es mi mensaje " + mensaje);
}

imprimirMensaje("Hola");
imprimirMensaje("Vacaciones 1 semana :D");
imprimirMensaje(true);

suma(1, 2);
suma(10, 20);
suma(100, 200);


//===Elementos de la pagina como variables===///
var botonBuscar = document.getElementById("buscar");

console.log(botonBuscar);

//==== Eventos===== //
botonBuscar.addEventListener("click", function(){
    //alert("Hiciste clic al boton");
    botonBuscar.classList.add("rojo");
});

//====Modo oscuro=====//
const botonTema = document.getElementById('theme-toggle');
const body = document.body;

botonTema.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        botonTema.textContent = '☀️';
    } else {
        botonTema.textContent = '🌙';
    }
});

//====Contador de likes=====//
const likeButton = document.querySelector('.ads-plus');
const likeCount = document.getElementById('like-count');
let likes = 0;

likeButton.addEventListener('click', () => {
    likes++;
    likeCount.textContent = likes;
});

//====Buscador de articulos=====//
const searchButton = document.getElementById('buscar');
const searchInput = document.getElementById('search-input');
const articles = document.querySelectorAll('.carta');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();

    articles.forEach(article => {
        const articleText = article.textContent.toLowerCase();
        if (articleText.includes(searchTerm)) {
            article.classList.remove('ocultar');
        } else {
            article.classList.add('ocultar');
        }
    });
});

//====Galeria con hover=====//
const seeAllPicks = document.getElementById('see-all-picks');
const galleryImage = document.getElementById('gallery-image');

const images = [
    'imagenes/alpes.jpg',
    'imagenes/travel.jpg',
    'imagenes/tren.jpg',
    'imagenes/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg',
    'imagenes/rachel-coyne-mTsotT-gMrY-unsplash.jpg',
    'imagenes/soundtrap-n30_i7mx62o-unsplash.jpg'
];
const originalImage = galleryImage.src;
let intervalId;
let currentImageIndex = 0;

seeAllPicks.addEventListener('mouseover', () => {
    intervalId = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        galleryImage.src = images[currentImageIndex];
    }, 2000);
});

seeAllPicks.addEventListener('mouseout', () => {
    clearInterval(intervalId);
    galleryImage.src = originalImage;
});

