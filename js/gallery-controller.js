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
        return `<img onclick="onImgSelect('${img.id}')" src="${img.url}" />
        
        `

    })
    // onImgSelect – memeService.setImg() and then renderMeme() 

    document.getElementById('my-canvas').innerHTML = strHTMLs.join('')
}

console.log('onImgSelect', onImgSelect);
// 7. onImgSelect – memeService.setImg() and then renderMeme()
function onImgSelect(elCurImg) {
    var elCurImg = document.querySelector('.gallery')
    setImg(elCurImg)
    // curImg.style.display = 'block';
    renderMeme();
}



// function onText() {
//     var elTxt = document.querySelector('input').value;
//     setLineTxt(elTxt);
//     renderMeme();

// }



