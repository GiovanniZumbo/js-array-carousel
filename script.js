// PLANNING

/*
Recuperare gli elementi dal DOM
Creare un array con le immagini
Inserire le immagini dinamicamente
Far funzionare il carosello attraverso i bottoni
*/

// # STAGING

//* Recuperare gli elementi dal DOM
const gallery = document.getElementById('gallery')
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

//* Creare un array con la raccolta delle immagini

const folderImages = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp',]

//* Inserire le immagini dinamicamente

let imgs = '';

for (let i = 0; i < folderImages.length; i++) {
    const currentImage = folderImages[i];
    imgs += `<img src="${currentImage}" alt= "game-${i}">`
}

gallery.innerHTML = imgs;

const images = document.querySelectorAll('#gallery img');


// # EVENT HANDLING

// * Far funzionare il carosello attraverso i bottoni

let activeIndex = 0;

images[activeIndex].classList.add('active');

// * Buttone successivo

nextButton.addEventListener('click', function () {

    images[activeIndex].classList.remove('active')

    activeIndex++;

    images[activeIndex].classList.add('active');

})



// # PROCESSING


// # OUTPUT 