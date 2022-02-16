'use strict'

var text_title = "Overlay text";
var gCanvas;
var gCtx;
var gCurrShape = 'text';
var gMeme;
// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    // drawText('try', 10, 25)
    renderGallery()
    renderMeme()

}



function renderMeme() {
    var meme = getMeme()
    var memeTxt = meme.lines[meme.selectedLineIdx];

    var memeImg = meme.selectedImgId;
    drawImg(memeImg, memeTxt)

    // console.log('drawImg', drawImg());
}

function drawText(memeTxt, x, y) {

    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'brown';
    gCtx.fillStyle = 'black';
    gCtx.font = '20px Arial';
    gCtx.textAlign = 'center';

    gCtx.fillText(memeTxt, x, y);
    gCtx.strokeText(memeTxt, x, y);

}

// console.log('onText', onText);

function onText() {
    var elTxt = document.querySelector('input').value;
    setLineTxt(elTxt);
    renderMeme();

}


function drawImg(imgId, currLine) {

    var currLine = gMeme.selectedImgId;

    var img = new Image()
    img.src = `./meme-imgs/${imgId}.jpg`;
    // console.log('gCtx', gCtx);
    img.onload = () => {
        console.log('onload');

        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        // drawText(currLine, 50, 50)
        drawText(currLine.txt, gCanvas.width / 2, currLine.y);

    }
}



