const cerrar_nav_movil = document.querySelector(".icon_cerrar_nav_movil");
const nav_movil = document.querySelector('.nav_movil');

cerrar_nav_movil.addEventListener('click', ()=>{
    nav_movil.classList.add('cerrar_nav_movil');
});

const selected_lang_movil = document.querySelector('.selected_lang_movil');
const lenguage_combo_movil = document.querySelector('.lenguage_combo_movil');

selected_lang_movil.addEventListener('click', ()=>{
    if (lenguage_combo_movil.classList.contains('cerrar_lenguage_movil')) {
        lenguage_combo_movil.classList.add('open_lenguage_movil');
        lenguage_combo_movil.classList.remove('cerrar_lenguage_movil');
    } else {
        lenguage_combo_movil.classList.add('cerrar_lenguage_movil');
        lenguage_combo_movil.classList.remove('open_lenguage_movil');
    }
})