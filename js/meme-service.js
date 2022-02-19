'use strict'

var gMeme;



gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {

            txt: 'txt1',
            size: 40,
            align: 'center',
            color: 'black',
            font: '40px'
        },
        {

            txt: 'txt2',
            size: 40,
            align: 'center',
            color: 'black',
            font: '40px'
        }
    ]
}



function setLineTxt(txt) {

    gMeme.lines[gMeme.selectedLineIdx].txt = txt;

}

function setLineColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
}


function getMeme() {
    var meme = gMeme
    return meme;
}

function getColor() {
    var color = document.querySelector('.color').value;

    return color
}




