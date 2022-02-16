'use strict'



function renderGallery() {
    var imgs = getImg();

    var strHTMLs = '';
    strHTMLs = imgs.map((img) => {
        return `<img src="./meme-imgs/${img.id}.jpg" />
        
        <button onclick="onImgSelect()"></button>

`
    })

    document.querySelector('.gallery').innerHTML = strHTMLs.join('')
}

// 7. onImgSelect – memeService.setImg() and then renderMeme()
function onImgSelect() {


}

