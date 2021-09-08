let offset = 0; // смещение
const buttonPrev = document.querySelector('.product__prev');
const buttonNext = document.querySelector('.product__next');
const slider = document.querySelector('.products__box');


buttonPrev.addEventListener('click', function () {
    offset = offset + 275;
    if (offset > 1100) {
        offset = 0;
    }
    slider.style.left = -offset + 'px';

});
buttonNext.addEventListener('click', function () {
    offset = offset - 275;
    if (offset < 0) {
        offset = 1100;
    }
    slider.style.left = -offset + 'px';

});