const icon_cerrar_modal_images = document.querySelector('.icon_cerrar_modal_images');
const modal = document.querySelector('.back_modal_Images_guatemala');
const abrir_modal = document.querySelector('.nombre_link_gallery_completa');

abrir_modal.addEventListener('click', ()=>{
    modal.classList.remove('cerrar_modal_images');
});

icon_cerrar_modal_images.addEventListener('click', ()=>{
    modal.classList.add('cerrar_modal_images');
});