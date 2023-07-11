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

//funcion descarga meme
const downloadButton = document.getElementById("download-btn");
const meme = document.getElementById("meme-container");

downloadButton.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
});
};


//funcion url - imagen
const urlInput = document.getElementById('url-input');
const imagenMeme = document.getElementById('imagenmeme');

urlInput.addEventListener('input', function() {
  const imageUrl = urlInput.value;
  imagenMeme.style.backgroundImage = `url('${imageUrl}')`;
});

//funcion: modo oscuro-modo claro
const btnModo = document.getElementById('btn-modo');

const header = document.querySelector('header');
const main = document.querySelector('main');
const panel = document.getElementsByClassName('panel');
console.log(panel)
const spanModo = document.getElementById('span-modo');

let modoActual = 'claro';

btnModo.addEventListener('click', function() {
    if (modoActual === 'claro') {
    asideImagen.classList.add('panel-modo-oscuro');
    asideTexto.classList.add('panel-modo-oscuro');
    header.classList.add('modo-oscuro');
    main.classList.add('modo-oscuro-main');
    spanModo.textContent = 'Modo Oscuro';
    modoActual = 'oscuro';
    } else {
    asideImagen.classList.remove('panel-modo-oscuro');
    asideTexto.classList.remove('panel-modo-oscuro');
    header.classList.remove('modo-oscuro');
    main.classList.remove('modo-oscuro-main');
    spanModo.textContent = 'Modo Claro';
    modoActual = 'claro';
    }
});








