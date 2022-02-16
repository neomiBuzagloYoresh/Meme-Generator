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
    gMeme.lines[0].txt = txt;
    // renderMeme();
    gMeme.lines[1].txt = txt;
}

// function getImgId(imgId) {
//     const img = gImgs.find((img) => imgId === img.id)
//     return img
// }

function getMeme() {
    var meme = gMeme
    return meme;
}

// 8. Phase2 – Basic line operations:
// a. Add a color picker button
// b. Add the button “increase/decrease” font

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

