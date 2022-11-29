const hamburguesa = document.querySelector('.hamburguesa')
const menu = document.querySelector('.menu-nav')

console.log(menu)
console.log(hamburguesa)

hamburguesa.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    console.log(e.target)
    if(menu.classList.contains('spread')
        && e.target !== menu && e.target != hamburguesa  ){
            menu.classList.toggle("spread")
    }
})