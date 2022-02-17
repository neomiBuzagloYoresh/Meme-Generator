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

function drawTextFirstLine(memes, x, y) {
    var memes = getMeme()
    console.log('memes', memes);
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

// function drawTextFirstLine(memeTxt, x, y) {

//     //     var memes = getMeme()
//     var newColor = getColor();
//     gCtx.lineWidth = 2;
//     gCtx.strokeStyle = 'black';
//     gCtx.fillStyle = newColor;
//     gCtx.font = '40px Arial';
//     gCtx.textAlign = 'center';

//     gCtx.fillText(memeTxt.txt, x, y);
//     gCtx.strokeText(memeTxt.txt, x, y);
// }

// function drawTextSecLine(memeTxt, x, y) {
//     var newColor = getColor();
//     gCtx.lineWidth = 2;
//     gCtx.strokeStyle = 'black';
//     gCtx.fillStyle = newColor;
//     gCtx.font = '40px Arial';
//     gCtx.textAlign = 'center';

//     gCtx.fillText(memeTxt, x, y);
//     gCtx.strokeText(memeTxt, x, y + 300);
// }


function onText(elTxt) {
    var elTxt = document.querySelector('input').value;
    setLineTxt(elTxt);
    console.log('elTxt', elTxt);

    renderMeme();
}




function drawImg(imgId, memeTxt) {

    var img = new Image()
    img.src = `./meme-imgs/${imgId}.jpg`;
    console.log('gCtx', gCtx);
    img.onload = () => {

        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);

        drawTextFirstLine(memeTxt.txt, 200, 70);

    }
}

function onSwitch() {
    var meme = getMeme()
    var memeTxt = meme.lines[meme.selectedLineIdx];

    if (meme.selectedLineIdx === meme.lines.length - 1) {
        meme.selectedLineIdx = 0;
    } else {
        if (meme.selectedLineIdx < meme.lines.length) {
            meme.selectedLineIdx += 1;
        }
    }
    renderMeme()

}

