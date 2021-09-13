// let offset = 0; // смещение
// const buttonPrev = document.querySelectorAll('.product__prev');
// const buttonNext = document.querySelectorAll('.product__next');
// const slider = document.querySelectorAll('.products__box');

// const buttonPrev = document.querySelector('.product__prev');
// const buttonNext = document.querySelector('.product__next');
// const slider = document.querySelector('.products__box');
// buttonNext.addEventListener('click', function () {
//     offset = offset - 275;
//     if (offset < 0) {
//         offset = 1100;
//     }
//     slider.style.left = -offset + 'px';

// });

// buttonPrev.addEventListener('click', function () {
//     offset = offset + 275;
//     if (offset > 1100) {
//         offset = 0;
//     }
//     slider.style.left = -offset + 'px';

// });
let offset = 0; //смещение
let sliders = document.querySelectorAll('.products-block__bottom');

for (i = 0; i < sliders.length; i++) {
    init_slider(sliders[i]);
}

function init_slider(slider) {
    let slide = slider.querySelectorAll('.products__box');
    let next = slider.querySelector('.product__next');
    let prev = slider.querySelector('.product__prev');

    next.addEventListener('click', function () {
        offset = offset - 275;
        if (offset < 0) {
            offset = 1100;
        }
        i = (i + 1) % slide.length;
        slide[i].style.left = -offset + 'px';
    });

    prev.addEventListener('click', function () {
        offset = offset + 275;
        if (offset > 1100) {
            offset = 0;
        }
        i = (i + 1) % slide.length;
        slide[i].style.left = -offset + 'px';
    });
}
