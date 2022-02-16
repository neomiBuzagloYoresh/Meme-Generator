'use strict'

var gCanvas;
var gCtx;
var gCurrShape = 'text';
var gMeme;
// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    // drawText('try', 10, 25)
    renderMeme()

}

function renderMeme() {

    gMeme = getMeme()
    var memeTxt = gMeme.lines[gMeme.selectedLineIdx];
    drawImg()
}

function drawText(memeTxt, x, y) {

    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'brown';
    gCtx.fillStyle = 'black';
    gCtx.font = '20px Arial';
    gCtx.textAlign = 'center';

    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);

}


function drawImg(id) {
    var img = new Image()
    img.src = gMeme.id;
    console.log('gCtx', gCtx);
    img.onload = () => {
        console.log('onload');

        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        // drawText('try', 50, 50)


    }
}


// function setShape(shape) {
//     gCurrShape = shape;
//   }

