const panels = document.querySelectorAll('.panel');

panels.forEach(panel =>{
    panel.addEventListener('click', ()=>{
        removerClassActive () 
        panel.classList.add('active')
    })
})


function removerClassActive () {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}