const button_unete_equipo_ene = document.querySelector('.button_unete_equipo_ene')
const modal_aplicar_equipo = document.querySelector('.cont_modal')
const icon_cerrar_modal = document.querySelector('.icon_cerrar_modal')
const button_contactar_liderazgo_ne = document.querySelector('.button_contactar_liderazgo_ne')

button_unete_equipo_ene.addEventListener('click', () => {
    modal_aplicar_equipo.classList.remove('cont_modal_ocultar2')
})

button_contactar_liderazgo_ne.addEventListener('click', () => {
    modal_aplicar_equipo.classList.remove('cont_modal_ocultar2')
})

icon_cerrar_modal.addEventListener('click', ()=>{
    modal_aplicar_equipo.classList.add('cont_modal_ocultar2')
})