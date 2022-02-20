'use strict'



function onInit() {
    renderGallery()
}

function renderGallery() {
    var imgs = getImagesForDisplay();

    var strHTMLs = '';


    strHTMLs = imgs.map((img) => {
        return `<img onclick="onImgSelect(${img.id})"  src="${img.url}" />
        
        `
    })

    document.querySelector('.gallery-pic').innerHTML = strHTMLs.join('');
}


function onImgSelect(id) {
    var elGallrey = document.querySelector('.gallery-pic')
    var elCurImg = document.getElementById('my-canvas')
    elGallrey.style.display = 'none';
    elCurImg.style.display = 'block';
    gMeme.selectedImgId = id
    openEditor();
    renderMeme();
}




function selectPage() {
    var elGallrey = document.querySelector('.gallery-pic')
    var elEditor = document.querySelector('.editor')
    elGallrey.style.display = 'block';
    elEditor.classList.remove('hide');
    // renderMeme()
    renderGallery()
}





