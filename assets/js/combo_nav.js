const nav_movil = document.querySelector('.nav_movil')
const abrir_nav = document.querySelector('.abrir_nav_movil')
const icon_menu = document.querySelector('.icon_barra_menu')
const icon_cerrar_nav = document.querySelector('.icon_cerrar_nav')

icon_menu.addEventListener('click', ()=>{
    nav_movil.classList.add('abrir_nav_movil');
    icon_menu.classList.add('cambiar_icon');
    icon_cerrar_nav.classList.remove('cambiar_icon');
    nav_movil.classList.remove('cerrar_nav_movil');
})

icon_cerrar_nav.addEventListener('click', ()=>{
    nav_movil.classList.remove('abrir_nav_movil');
    nav_movil.classList.add('cerrar_nav_movil');
    icon_menu.classList.remove('cambiar_icon');
    icon_cerrar_nav.classList.add('cambiar_icon');
})