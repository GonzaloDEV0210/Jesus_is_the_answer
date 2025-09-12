const elemento = document.querySelector('.cont_options_combo_language');
const animacion = document.querySelector('.abrir_combo_language');
const combo = document.querySelector('.combo_select_language');

combo.addEventListener('click', ()=> {
    elemento.classList.toggle('abrir_combo_language');
});