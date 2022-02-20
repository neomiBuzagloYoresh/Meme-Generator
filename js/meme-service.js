'use strict'


var gMeme;
var gSavedMemes = [];


gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {

            txt: 'txt1',
            size: 40,
            align: 'center',
            color: 'white',
            font: '40px'
        },
        {

            txt: 'txt2',
            size: 40,
            align: 'center',
            color: 'black',
            font: '40px',
            fontSize: '40px'
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


// function moveText(line, dx, dy) {
//     line.x += dx;
//     line.y += dy;
// }

// function Updatelocation() {
//     gMeme[0].lines.forEach((line) => {
//         line.y += 20;
//     });
// }



function addMemeToArr(img) {
    gSavedMemes = loadFromStorage(STORAGE_KEY);
    if (!gSavedMemes || !gSavedMemes.length) gSavedMemes = [];
    gSavedMemes.push(img);
    _saveMemesToStorage();
}
function _saveMemesToStorage() {
    saveToStorage(STORAGE_KEY, gSavedMemes)
}






// gMeme.lines[0].txt.length * gMeme.lines[0].fontSize / 2