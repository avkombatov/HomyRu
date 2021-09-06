const buttonLeft = document.querySelector('.arrow__left');
const buttonRight = document.querySelector('.arrow__right');
const blocks = document.querySelectorAll('.promo__block');
const pags = document.querySelectorAll('.pagination__block');

let index = 0;

const activeSlide = n => {

    for (block of blocks) {
        block.classList.remove('block__active');
    }

    blocks[n].classList.add('block__active');

}

const activePag = n => {
    for (pag of pags) {
        pag.classList.remove('pagination__active');
    }
    pags[n].classList.add('pagination__active');
}

const nextSlide = () => {
    if (index == blocks.length - 1) {
        index = 0;
        activeSlide(index);
        activePag(index);
    } else {
        index++;
        activeSlide(index);
        activePag(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = blocks.length - 1;
        activeSlide(index);
        activePag(index);
    } else {
        index--;
        activeSlide(index);
        activePag(index);
    }
}

pags.forEach((item, indexPag) => {
    item.addEventListener('click', () => {
        index = indexPag;
        activeSlide(index);
        activePag(index);
    })

});

buttonRight.addEventListener('click', nextSlide);
buttonLeft.addEventListener('click', prevSlide);