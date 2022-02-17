'use strict'

// var elGallrey = document.querySelector('.gallery')


function onInit() {
    renderGallery()
}

function renderGallery() {
    var imgs = getImg();
    var strHTMLs = '';
    strHTMLs = imgs.map((img) => {
        return `<img onclick="onImgSelect(${img.id})"  src="${img.url}" />
        
        `
    })

    document.querySelector('.gallery').innerHTML = strHTMLs.join('')
}
function onImgSelect(id) {

    var elCurImg = document.getElementById('my-canvas')
    elCurImg.style.display = 'block';
    gMeme.selectedImgId = id
    renderMeme();
}


// document.querySelector('.gallery')
// function onText() {
//     var elTxt = document.querySelector('input').value;
//     setLineTxt(elTxt);
//     renderMeme();

// }



