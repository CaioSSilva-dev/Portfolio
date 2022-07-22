const carrousel = document.querySelector('.carrossel')
const project = document.querySelectorAll('.projeto')
const right = document.getElementById('right-btn')

let Index = 0;

right.addEventListener('click',()=>{
    if(Index < ((project.length -1) * 290)){
        x = Math.round(carrousel.scrollWidth / project.length)
        Index = Index + x;
        carrousel.style.marginLeft = "-" + Index + "px";
    }
    else{
        carrousel.style.marginLeft = 0 + "px"
        Index = 0
    }
})