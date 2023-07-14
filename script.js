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

//funcion: quitar y poner top and bottom text

const checkTopText = document.getElementById('check-top-text');
const checkBottomText = document.getElementById('check-bottom-text');
const topTextMeme = document.getElementById('top-text-meme');
const bottomTextMeme = document.getElementById('bottom-text-meme');


const textoMemeTop = () => {
    if (checkTopText.checked) {
        topTextMeme.classList.add('hidden');
    } else {
        topTextMeme.classList.remove('hidden');
    }
}
const textoMemeBottom = () => {
    if (checkBottomText.checked) {
        bottomTextMeme.classList.add('hidden');
    } else {
        bottomTextMeme.classList.remove('hidden');
    }
}

//funcion fondo 
const aplicarFiltro = () => {
    const selectFondo = document.getElementById("mezcla-de-fondo");
    const imagen = document.getElementById("imagenmeme");

    const filtro = selectFondo.value;

    if (filtro === "lighten") {
        imagen.style.filter = "brightness(1.2)";
    } else if (filtro === "darken") {
        imagen.style.filter = "brightness(0.8)";
    } else {
        imagen.style.filter = filtro;
    }
};


//funcion color fondo
const colorPicker = document.getElementById('colorPicker'); //input de color
const colorName = document.getElementById('colorName'); //span

colorPicker.oninput = () => {
    imagenMeme.style.backgroundColor = (colorPicker.value);
    colorName.textContent = (colorPicker.value);
}

//funcion edición de texto

// const topTextMeme
// const bottomTextMeme
const txtTop = document.getElementById('txt-top');   //textarea top
const txtBottom = document.getElementById('txt-bottom')  //textarea bottom

txtTop.addEventListener("keyup", () => {
    topTextMeme.innerHTML = txtTop.value;
});

txtBottom.addEventListener("keyup", () => {
    bottomTextMeme.innerHTML = txtBottom.value;
})

// SELECT FUENTE
// const topTextMeme
// const bottomTextMeme
const selectFontFamily = document.getElementById('font-family');

selectFontFamily.addEventListener('change', () =>{
if (selectFontFamily.value === "arial") {
    topTextMeme.style.fontFamily = "Arial, Helvetica, sans-serif"
    bottomTextMeme.style.fontFamily = "Arial, Helvetica, sans-serif"
}
else if (selectFontFamily.value === "arial black") {
topTextMeme.style.fontFamily = "'Arial Black, Gadget, Arial, sans-serif'";
bottomTextMeme.style.fontFamily = "'Arial Black, Gadget, Arial, sans-serif'";    
}
else if (selectFontFamily.value === "georgia") {
    topTextMeme.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
    bottomTextMeme.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
}
else if (selectFontFamily.value === "monospace") {
    topTextMeme.style.fontFamily = "monospace"
    bottomTextMeme.style.fontFamily = "monospace"
}
else if (selectFontFamily.value === "comic sans ms" ) {
    topTextMeme.style.fontFamily = "Comic Sans MS"
    bottomTextMeme.style.fontFamily = "Comic Sans MS"
}
else if (selectFontFamily.value === "helvetica") {
    topTextMeme.style.fontFamily = "Arial, Helvetica, sans-serif"
    bottomTextMeme.style.fontFamily = "Arial, Helvetica, sans-serif"
}
else if (selectFontFamily.value === "impact") {
    topTextMeme.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
    bottomTextMeme.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
}
else if (selectFontFamily.value === "verdana") {
    topTextMeme.style.fontFamily = "Verdana"
    bottomTextMeme.style.fontFamily = "Verdana"
}
else if (selectFontFamily.value === "times new roman") {
    topTextMeme.style.fontFamily = "'Times New Roman', Times, serif"
    bottomTextMeme.style.fontFamily = "'Times New Roman', Times, serif"
}
})








