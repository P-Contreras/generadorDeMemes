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
console.log(meme)
console.log(downloadButton)

downloadButton.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
});
};
console.log(downloadMeme)


//funcion url - imagen
const urlInput = document.getElementById('url-input');
const imagenMeme = document.getElementById('imagenmeme');

urlInput.addEventListener('input', function() {
  const imageUrl = urlInput.value;
  imagenMeme.style.backgroundImage = `url('${imageUrl}')`;
});





