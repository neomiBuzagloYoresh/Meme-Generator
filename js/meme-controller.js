'use strict'

var gCanvas;
var gCtx;
var gCurrShape = 'text';
var gMeme;
// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
init();

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    // drawTextFirstLineFirstLine('try', 10, 25)

    renderMeme()

}



function renderMeme() {
    var meme = getMeme()
    var memeTxt = meme.lines[meme.selectedLineIdx];

    var memeImg = meme.selectedImgId;
    drawImg(memeImg, memeTxt)

    // console.log('drawImg', drawImg());
}

function drawTextFirstLine(memeTxt, x, y) {
    var memes = getMeme()
    memes.lines.forEach((lines, indx) => {
        var newColor = getColor();
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = 'black';
        gCtx.fillStyle = newColor;
        gCtx.font = '40px Arial';
        gCtx.textAlign = 'center';

        gCtx.fillText(lines.txt, x, y + indx * 100);
        gCtx.strokeText(lines.txt, x, y + indx * 100);

    });
}

// function drawTextSecLine(memeTxt, x, y) {
//     var newColor = getColor();
//     gCtx.lineWidth = 2;
//     gCtx.strokeStyle = 'black';
//     gCtx.fillStyle = newColor;
//     gCtx.font = '40px Arial';
//     gCtx.textAlign = 'center';

//     gCtx.fillText(memeTxt, x, y);
//     gCtx.strokeText(memeTxt, x, y);
// }


function onText() {
    var elTxt = document.querySelector('input').value;
    setLineTxt(elTxt);

    var memes = getMeme()
    if (memes.lines[0].txt) {
        elTxt.style.display = 'none'
        memes.lines[1].txt
        elTxt.style.display = 'block'
        renderMeme();

    } else {
        memes.lines[1].txt
        elTxt.style.display = 'none'
        memes.lines[0].txt
        elTxt.style.display = 'block'
        renderMeme();

    }


}


function drawImg(imgId, memeTxt) {

    var img = new Image()
    img.src = `./meme-imgs/${imgId}.jpg`;
    // console.log('gCtx', gCtx);
    img.onload = () => {

        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);

        drawTextFirstLine(memeTxt.txt, 200, 70);

    }
}



