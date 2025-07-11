const cerrar_nav_movil = document.querySelector(".icon_cerrar_nav_movil");
const nav_movil = document.querySelector('.nav_movil');

cerrar_nav_movil.addEventListener('click', ()=>{
    nav_movil.classList.add('cerrar_nav_movil');
});