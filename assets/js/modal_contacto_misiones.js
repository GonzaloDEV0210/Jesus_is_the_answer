const button_ser_parte_aplicar = document.querySelector('.button_ser_parte_aplicar')
const modal_aplicar_misiones = document.querySelector('.cont_modal')
const icon_cerrar_modal = document.querySelector('.icon_cerrar_modal')
const boton_meta_impacto_aplicar = document.querySelector('.boton_meta_impacto_aplicar')

button_ser_parte_aplicar.addEventListener('click', () => {
    modal_aplicar_misiones.classList.remove('cont_modal_ocultar3')
})

boton_meta_impacto_aplicar.addEventListener('click', () => {
    modal_aplicar_misiones.classList.remove('cont_modal_ocultar3')
})

icon_cerrar_modal.addEventListener('click', ()=>{
    modal_aplicar_misiones.classList.add('cont_modal_ocultar3')
})
