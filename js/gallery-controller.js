'use strict'

// var elGallrey = document.querySelector('.gallery')


function onInit() {
    renderGallery()
    // resizeCanvas()
}

function renderGallery() {
    var imgs = getImg();

    var strHTMLs = '';

    // if (condition) {

    // }
    strHTMLs = imgs.map((img) => {
        return `<img onclick="onImgSelect(${img.id})"  src="${img.url}" />
        
        `
    })

    document.querySelector('.gallery').innerHTML = strHTMLs.join('');
}


function onImgSelect(id) {
    var elGallrey = document.querySelector('.gallery')
    var elCurImg = document.getElementById('my-canvas')
    elGallrey.style.display = 'none';
    elCurImg.style.display = 'block';
    gMeme.selectedImgId = id
    openEditor();
    renderMeme();
}




function selectPage() {
    var elGallrey = document.querySelector('.gallery')
    var elEditor = document.querySelector('.editor')
    elGallrey.style.display = 'block';
    elEditor.classList.remove('hide');
    // renderMeme()
    renderGallery()
}


// function onSortChange(sortBy) {
//     setSortBy(sortBy);
//     renderGallery()
// }



// function onSetSortBy() {
//     const prop = document.querySelector('.keyword').value
//     const isDesc = document.querySelector('.sort-desc').checked

//     const sortBy = {}
//     sortBy[prop] = (isDesc) ? -1 : 1;

//     // Shorter Syntax:
//     // const sortBy = {
//     //     [prop] : (isDesc)? -1 : 1
//     // }
//     setCarSort(sortBy)
//     renderCars();
// }