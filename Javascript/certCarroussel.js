const images = document.querySelectorAll('.img-cert');
const container = document.querySelector('.c-container');
const progress = document.querySelectorAll('.progress');

let indeximg = 1;
let indexmargin = 0

window.setInterval(() => {
    if(indeximg <= (images.length - 1)) {
        indexmargin = indexmargin + (images[0].scrollWidth + 15);
        container.style.marginLeft = "-" + indexmargin + 'px';
        indeximg = indeximg + 1;
    }
    else{
        container.style.marginLeft = 0;
    }
}, 5000);
window.setInterval(() => {
    indeximg = 1
    indexmargin = 0
}, images.length * 5000);