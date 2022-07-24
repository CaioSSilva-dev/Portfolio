const info = document.querySelector('.me-info');

info.addEventListener('mouseover', ()=>{
    document.querySelector('.bottom-rainbow').classList.add('rainbow-active')
})
info.addEventListener('mouseout', ()=>{
    document.querySelector('.bottom-rainbow').classList.remove('rainbow-active')
})