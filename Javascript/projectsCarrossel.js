const carrousel = document.querySelector('.carrossel')
const project = document.querySelectorAll('.projeto')
const right = document.getElementById('right-btn')
const left = document.getElementById('left-btn')
const Container = document.getElementById('projetos')

let Index = 0;

right.addEventListener('click',()=>{
    if(Index < carrousel.scrollWidth - 580){
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
        left.style.display = "none";
        carrousel.style.margin = "0px auto"
    }
    else{
        right.style.display = "flex";
        left.style.display = "flex";
        carrousel.style.margin = "20px 20px 20px 0px";
    }
})