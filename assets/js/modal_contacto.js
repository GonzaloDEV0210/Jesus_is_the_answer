const boton_aplicar_mision = document.querySelector('.boton_meta_impacto_aplicar');
const modal_aplicar_mision = document.querySelector('.cont_modal')
const icon_cerrar_modal = document.querySelector('.icon_cerrar_modal');

boton_aplicar_mision.addEventListener('click', ()=>{
    modal_aplicar_mision.classList.remove('cont_modal_ocultar')
})

icon_cerrar_modal.addEventListener('click', () => {
    modal_aplicar_mision.classList.add('cont_modal_ocultar')
})