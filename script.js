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
const slider = document.getElementById('slider')

//* Creare un array con la raccolta delle immagini

const folderImages = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp',]

//* Inserire le immagini dinamicamente

let imgs = '';

for (let i = 0; i < folderImages.length; i++) {
    const currentImage = folderImages[i];
    imgs += `<img src="${currentImage}" alt= "game-${i}">`
}

gallery.innerHTML = imgs;
slider.innerHTML = imgs;

const images = document.querySelectorAll('#gallery img');
const minis = document.querySelectorAll('#slider img')


let activeIndex = 0;

images[activeIndex].classList.add('active');

// # EVENT HANDLING

// * Far funzionare il carosello attraverso i bottoni

// * Bottone successivo

nextButton.addEventListener('click', function () {

    images[activeIndex].classList.remove('active')
    minis[activeIndex].classList.remove('active');

    activeIndex++;

    // @ Far ripartire il carosello una volta finite le immagini
    if (activeIndex === images.length) {
        activeIndex = 0;
    }

    images[activeIndex].classList.add('active');
    minis[activeIndex].classList.add('active');
})

// * Bottone precedente 

prevButton.addEventListener('click', function () {

    images[activeIndex].classList.remove('active')
    minis[activeIndex].classList.remove('active');

    activeIndex--;

    // @ Far ripartire il carosello una volta finite le immagini
    if (activeIndex < 0) {
        activeIndex = (images.length - 1);
    }

    images[activeIndex].classList.add('active');
    minis[activeIndex].classList.add('active');
})

// * Selezionare l'immagine dallo slider

for (let i = 0; i < minis.length; i++) {
    const mini = minis[i];

    mini.addEventListener('click', function () {

        images[activeIndex].classList.remove('active');
        minis[activeIndex].classList.remove('active');

        activeIndex = i;

        images[activeIndex].classList.add('active');
        minis[activeIndex].classList.add('active');

    })

}

// # PROCESSING


// # OUTPUT 