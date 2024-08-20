// PLANNING

/*
Recuperare gli elementi dal DOM
Creare un array con le immagini
Inserire le immagini dinamicamente
Far funzionare il carosello attraverso i bottoni
*/

// # STAGING

//* Recuperare gli elementi dal DOM

const images = document.querySelectorAll('#gallery img');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

//* Creare un array con la raccolta delle immagini

const folderImages = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp',]

let activeIndex = 0;

images[activeIndex].classList.add('active');

// # EVENT HANDLING


// # PROCESSING


// # OUTPUT 