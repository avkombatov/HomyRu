let offset = [0, 0, 0, 0]; //смещение слайдера
let slider = document.querySelectorAll('.products__box');
let prev = document.querySelectorAll('.product__prev');
let next = document.querySelectorAll('.product__next');

for (a of prev) {
    a.addEventListener('click', function () {
        console.log(this);
        for (i = 0; i < slider.length; i++) {
            prevName = this.getAttribute('data-arrow');
            if (prevName == i) {
                offset[i] = offset[i] + 275;
                if (offset[i] > 1100) {
                    offset[i] = 0;
                }
                slider[i].style.left = -offset[i] + 'px';
            }
        }
    })
}

for (b of next) {
    b.addEventListener('click', function () {
        console.log(this);
        for (i = 0; i < slider.length; i++) {
            prevName = this.getAttribute('data-arrow');
            if (prevName == i) {
                offset[i] = offset[i] - 275;
                if (offset[i] < 0) {
                    offset[i] = 1100;
                }
                slider[i].style.left = -offset[i] + 'px';
            }
        }
    })
}