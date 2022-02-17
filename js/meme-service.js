'use strict'



var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'txt1',
            size: 40,
            align: 'center',
            color: 'black'
        },
        {
            txt: 'txt2',
            size: 40,
            align: 'center',
            color: 'black'
        }
    ]


}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;

}


function getMeme() {
    var meme = gMeme
    return meme;
}

function getColor() {
    var color = document.querySelector('.color').value;

    return color
}

function setEventListeners() {

    gCanvas.addEventListener('mousedown', onDown);
    gCanvas.addEventListener('mouseup', onUp);
    gCanvas.addEventListener('mousemove', onMove);


}

function onMove(ev) {
    if (gIsClicked) draw(ev);

}
function onDown(ev) {
    gIsClicked = true;
    document.body.style.cursor = 'grabbing'
    draw(ev);
}

function onUp() {
    gIsClicked = false;
    document.body.style.cursor = 'grab'
}

