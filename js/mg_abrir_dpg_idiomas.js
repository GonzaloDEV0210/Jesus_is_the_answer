const desplegable = document.querySelector('.mg_dpg_idiomas');
const combo = document.querySelector('.mg_select_idioma')

combo.addEventListener('click', ()=>{
    if(desplegable.classList.contains('mg_dpg_idiomas_abrir')){
        desplegable.classList.remove('mg_dpg_idiomas_abrir');
        desplegable.classList.add('mg_dpg_idiomas_cerrar')
    } else {
        desplegable.classList.add('mg_dpg_idiomas_abrir');
        desplegable.classList.remove('mg_dpg_idiomas_cerrar')
    }
})