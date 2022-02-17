'use strict'

// var elGallrey = document.querySelector('.gallery')


function onInit() {
    renderGallery()
}

function renderGallery() {
    var imgs = getImg();
    console.log('imgs', imgs);
    var strHTMLs = '';
    strHTMLs = imgs.map((img) => {
        return `<img onclick="onImgSelect(${img.id})"  src="${img.url}" />
        
        `
    })
    // onImgSelect – memeService.setImg() and then renderMeme() 
    // document.getElementById('my-canvas').innerHTML = strHTMLs.join('');
    document.querySelector('.gallery').innerHTML = strHTMLs.join('')
    console.log('imgs', imgs);
}
function onImgSelect(id) {

    var elCurImg = document.getElementById('my-canvas')
    elCurImg.style.display = 'block';
    gMeme.selectedImgId = id
    console.log('setImg()', elCurImg);
    renderMeme();
}


// document.querySelector('.gallery')
// function onText() {
//     var elTxt = document.querySelector('input').value;
//     setLineTxt(elTxt);
//     renderMeme();

// }



