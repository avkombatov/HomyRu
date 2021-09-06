let offset = 0; // смещение от девого края
const sliderLine = document.querySelector('.promo__slider');
let buttonRight = document.querySelector('.arrow__right');
let buttonLeft = document.querySelector('.arrow__left');

buttonLeft.addEventListener('click', function () {
    offset = offset + 846;
    if (offset > 3384) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    if (offset > 0) {
        buttonRight.style.display = 'block';
    } else {
        buttonRight.style.display = 'none';
    }
});

buttonRight.addEventListener('click', function () {
    offset = offset - 846;
    if (offset <= 0) {
        buttonRight.style.display = 'none';
    }
    sliderLine.style.left = -offset + 'px';
});



