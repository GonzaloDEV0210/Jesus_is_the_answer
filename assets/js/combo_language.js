const elemento = document.querySelector('.cont_options_combo_language');
const animacion = document.querySelector('.abrir_combo_language');
const combo = document.querySelector('.combo_select_language');

combo.addEventListener('click', ()=> {
    elemento.classList.toggle('abrir_combo_language');
    console.log(10)
});

/* DESKTOP */

const option_nav_language_d = document.querySelector('.option_nav_language_d');
const cont_options_combo_language_d = document.querySelector('.cont_options_combo_language_d');

option_nav_language_d.addEventListener('click', ()=>{
    cont_options_combo_language_d.classList.toggle('abrir_combo_language');
});