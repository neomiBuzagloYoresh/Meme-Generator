'use strict'

var gCanvas;
var gCtx;
var gCurrShape = 'text';

// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }





function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    drawText('try', 10, 25)
    renderMeme()

}


function renderMeme() {

    getMeme()
    // onAddTextLine()
    drawImg()
    console.log('getMeme()', getMeme());
}

function drawText(text, x, y) {

    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'brown';
    gCtx.fillStyle = 'black';
    gCtx.font = '20px Arial';
    gCtx.textAlign = 'center';

    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}


function drawImg() {
    var img = new Image()
    img.src = './meme-imgs/1.jpg';

    img.onload = () => {
        console.log('onload');

        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        drawText('try', 50, 50)


    }
}


// function setShape(shape) {
//     gCurrShape = shape;
//   }

function draw(ev) {
    const offsetX = ev.offsetX;
    const offsetY = ev.offsetY;
    // console.log(offsetX,offsetY)
    // const { offsetX, offsetY } = ev
    switch (gCurrShape) {

        case 'text':
            drawText('input.valeu', offsetX, offsetY);
            break;
        case 'line':
            drawLine(offsetX, offsetY);
            break;
    }
}