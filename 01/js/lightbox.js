const imagenes = document.querySelectorAll('.img-galery')
const imagenesList = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguesa1 = document.querySelector('.hamburguesa')
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () =>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click',(e) =>{
    if(e.target != imagenesList){
        contenedorLight.classList.toggle('show')
        imagenesList.classList.toggle('showImage')
        hamburguesa1.style.opacity ='1'
    }
})

const aparecerImagen = (imagen) => {
    imagenesList.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesList.classList.toggle('showImage')
    hamburguesa1.style.opacity ='0'
}
