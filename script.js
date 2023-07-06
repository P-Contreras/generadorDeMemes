//boton de texto e imagen - asides
const botonImagen = document.getElementById('boton-imagen');
const botonTexto = document.getElementById('boton-texto');

const asideImagen = document.getElementById('asideImagen');
const asideTexto = document.getElementById('asideTexto');

//eventlistener botones: texto - imagen

botonImagen.addEventListener('click', () => {
    showAside(asideImagen);
});
botonTexto.addEventListener('click', () => {
    showAside(asideTexto);
});

// funciones aside-botones

const showAside = (asideToShow) => {
    if (asideToShow === asideTexto) {
    asideTexto.classList.remove('hidden');
    asideImagen.classList.add('hidden');
    } else {
    asideImagen.classList.remove('hidden');
    asideTexto.classList.add('hidden');
    }
};




