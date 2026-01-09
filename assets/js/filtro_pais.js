const paises = document.querySelectorAll('.opcion_filtro_misiones');
const cardPaises = document.querySelectorAll('.paisFiltro');

for (const pais of paises) {
    pais.addEventListener('click', ()=>{
        pais.classList.toggle('pais_selected');
    
        const paisesActivos = [...paises]
            .filter(pais => pais.classList.contains('pais_selected'))
            .map(pais => pais.dataset.pais);

        cardPaises.forEach(card => {
            if (paisesActivos.length === 0) {
                card.style.display = 'block';
            } else {
                card.style.display = paisesActivos.includes(card.dataset.pais)
                    ? 'block'
                    : 'none';
            };
        });
    });
};