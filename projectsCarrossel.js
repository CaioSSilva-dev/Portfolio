const carrousel = document.querySelector('.carrossel')
const project = document.querySelectorAll('.projeto')
const right = document.getElementById('right-btn')
const left = document.getElementById('left-btn')
const Container = document.getElementById('projetos')

let Index = 0;

right.addEventListener('click',()=>{
    if(Index < 1980){
        x = Math.round(carrousel.scrollWidth / project.length)
        Index = Index + x;
        carrousel.style.marginLeft = "-" + Index + "px";
    }
    else{
        carrousel.style.marginLeft = 0 + "px"
        Index = 0
    }
})

left.addEventListener('click',()=>{
    if(Index != 0){
        x = Math.round(carrousel.scrollWidth / project.length)
        Index = Index - x
        carrousel.style.marginLeft = "-" + Index + "px";
    }
})

window.addEventListener("resize",()=>{
    if(carrousel.scrollWidth < Container.offsetWidth){
        right.style.display = "none";
    }
    else{
        right.style.display = "flex";
    }
})