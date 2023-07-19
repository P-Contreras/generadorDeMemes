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

//funcion url - imagen

const urlInput = document.getElementById('url-input');
const imagenMeme = document.getElementById('imagenmeme');

urlInput.addEventListener('input', function() {
    const imageUrl = urlInput.value;
    imagenMeme.style.backgroundImage = `url('${imageUrl}')`;
});

//funcion descarga meme

const downloadButton = document.getElementById("download-btn");
const meme = document.getElementById("meme-container");

downloadButton.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
});
};

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

//funcion color fondo

const colorPicker = document.getElementById('colorPicker'); //input de color
const colorName = document.getElementById('colorName'); //span

colorPicker.oninput = () => {
    imagenMeme.style.backgroundColor = (colorPicker.value);
    colorName.textContent = (colorPicker.value);
}


//funcion fondo 

const selectFondo = document.getElementById("mezcla-de-fondo");

selectFondo.onchange = () => {
    if (selectFondo.value === "lighten") {
        imagenMeme.style.mixBlendMode = "lighten"
        }
        else if (selectFondo.value === "darken") {
        imagenMeme.style.mixBlendMode = "darken"
        }
        else if (selectFondo.value === "difference") {
        imagenMeme.style.mixBlendMode = "difference"
        }
        else if (selectFondo.value === "luminosity") {
        imagenMeme.style.mixBlendMode = "luminosity"
        }
        else if (selectFondo.value === "multiply") {
        imagenMeme.style.mixBlendMode = "multiply"
        }
        else {
        imagenMeme.style.mixBlendMode = ""
        }
        console.log("me estoy ejecutando")
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
    topTextMeme.style.fontFamily = "Helvetica, sans-serif"
    bottomTextMeme.style.fontFamily = "Helvetica, sans-serif"
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

//tamanio de fuente

const inputTamanioFuente = document.getElementById("tamanio-fuente")


inputTamanioFuente.oninput = () =>{
    topTextMeme.style.fontSize = `${inputTamanioFuente.value}px` 
    bottomTextMeme.style.fontSize = `${inputTamanioFuente.value}px`
}

// botones alienacion texto

const textAlignLeft = document.getElementById("textalign-izq");
const textAlignCenter = document.getElementById("textalign-centro");
const textAlignRight = document.getElementById("textalign-der");

textAlignLeft.onclick = () => {
topTextMeme.style.justifyContent = "flex-start"
bottomTextMeme.style.justifyContent = "flex-start"
}

textAlignCenter.onclick = () => {
topTextMeme.style.justifyContent = "center"
bottomTextMeme.style.justifyContent = "center"
}

textAlignRight.onclick = () => {
topTextMeme.style.justifyContent = "flex-end"
bottomTextMeme.style.justifyContent = "flex-end"
}

//Aside texto: funcion color

const colorTextoInput = document.getElementById("color-texto-input");
const spanColorTxt = document.getElementById("span-color-texto");

colorTextoInput.addEventListener('input', () => {
    topTextMeme.style.color = colorTextoInput.value
    bottomTextMeme.style.color = colorTextoInput.value
    spanColorTxt.textContent = (colorTextoInput.value);
});

//aside texto: funcion fondo

const fondoTxtInput = document.getElementById("color-fondotxt-input");
const spanColorFondo = document.getElementById("span-color-fondo");


fondoTxtInput.addEventListener('input' , () => {
    topTextMeme.style.backgroundColor = fondoTxtInput.value
    bottomTextMeme.style.backgroundColor = fondoTxtInput.value
    spanColorFondo.textContent = (fondoTxtInput.value)
})

//boton fondo transparente

const checkTransparente = document.getElementById('check-fondo-transparente');

checkTransparente.addEventListener('change', () => {
    if (checkTransparente.checked) {
    topTextMeme.style.backgroundColor = 'transparent';
    topTextMeme.style.position = 'absolute';
    bottomTextMeme.style.backgroundColor = 'transparent';
    bottomTextMeme.style.position = 'absolute';
    topTextMeme.style.top = 0;
    bottomTextMeme.style.bottom = 0;
    } else {
    topTextMeme.style.backgroundColor = `${fondoTxtInput.value}`;
    topTextMeme.style.position = 'static';
    bottomTextMeme.style.backgroundColor = `${fondoTxtInput.value}`;
    bottomTextMeme.style.position = 'static';
    }
});

//botones: contorno

const btnNinguno = document.getElementById('btn-ninguno');
const btnClaro = document.getElementById('btn-claro');
const btnOscuro = document.getElementById('btn-oscuro');

btnNinguno.onclick = () => {
    topTextMeme.style.textShadow = "none";
    bottomTextMeme.style.textShadow = "none";
}

btnClaro.onclick = () => {
    topTextMeme.style.textShadow = "2px 2px 1px #FFFFFF";
    bottomTextMeme.style.textShadow = "2px 2px 1px #FFFFFF";
}

btnOscuro.onclick = () => {
    topTextMeme.style.textShadow = "2px 2px 1px #000000";
    bottomTextMeme.style.textShadow = "2px 2px 1px #000000";
}

//espaciado

const inputEspaciado = document.getElementById("input-espaciado");

inputEspaciado.oninput = () => {
    topTextMeme.style.paddingBottom = `${inputEspaciado.value * 2}px`;
    topTextMeme.style.paddingTop =  `${inputEspaciado.value * 2}px`;
    bottomTextMeme.style.paddingBottom = `${inputEspaciado.value * 2}px`;
    bottomTextMeme.style.paddingTop =  `${inputEspaciado.value * 2}px`;
}

//interlineado

const selectInterlineado = document.getElementById("select-interlineado");

selectInterlineado.addEventListener('change', () => {
    const interlineado = selectInterlineado.value;
    topTextMeme.style.lineHeight = interlineado;
    bottomTextMeme.style.lineHeight = interlineado;
});

//filtros

const imgMeme = document.getElementById('imagenmeme');
console.log(imgMeme)
const brightInput = document.getElementById("bright-input");
const contrastInput = document.getElementById("contrast-input");
const opacityInput = document.getElementById("opacity-input");
const blurInput = document.getElementById("blur-input");
const grayscaleInput = document.getElementById("grayscale-input");
const sepiaInput = document.getElementById("sepia-input");
const hueInput = document.getElementById("hue-rotation-input");
const saturateInput = document.getElementById("saturation-input");
const invertInput = document.getElementById("invert-input");


const filtros = () => {
    imgMeme.style.filter = 
        `brightness(${brightInput.value}) contrast(${contrastInput.value}%) opacity(${opacityInput.value}) blur(${blurInput.value}px) grayscale(${grayscaleInput.value}%) sepia(${sepiaInput.value}%) hue-rotate(${hueInput.value}deg) saturate(${saturateInput.value}%) invert(${invertInput.value})`;
};

brightInput.addEventListener("input", () => filtros());
contrastInput.addEventListener("input", () => filtros());
opacityInput.addEventListener("input", () => filtros());
blurInput.addEventListener("input", () => filtros());
grayscaleInput.addEventListener("input", () => filtros());
sepiaInput.addEventListener("input", () => filtros());
hueInput.addEventListener("input", () => filtros());
saturateInput.addEventListener("input", () => filtros());
invertInput.addEventListener("input", () => filtros());

//reestablecer filtros

const resetFilters = () => {
    brightInput.value = 1;
    contrastInput.value = 100;
    opacityInput.value = 1;
    blurInput.value = 0;
    grayscaleInput.value = 0;
    sepiaInput.value = 0;
    hueInput.value = 0;
    saturateInput.value = 100;
    invertInput.value = 0;

    filtros();
};

const reestablecerButton = document.querySelector('.boton-filtros');
reestablecerButton.addEventListener('click', resetFilters);

//boton cerrar panel 

const closeButtonImage = document.getElementById("btn-cerrar-panel-img")
const closeButtonText = document.getElementById("btn-cerrar-panel-txt")

closeButtonImage.onclick = () => {
    asideImagen.classList.add('hidden');
}

closeButtonText.onclick = () => {
    asideTexto.classList.add('hidden');
}
