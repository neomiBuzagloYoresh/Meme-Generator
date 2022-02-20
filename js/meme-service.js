'use strict'

const STORAGE_KEY = 'memeDB';
var gMeme;
var gSavedMemes;


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


function _saveMemesToStorage() {
    saveToStorage(STORAGE_KEY, gMeme)
}


function addMemeToArr(img) {
    gSavedMemes = loadFromStorage(STORAGE_KEY);
    if (!gSavedMemes || !gSavedMemes.length) gSavedMemes = [];
    gSavedMemes.push(img);
    _saveMemesToStorage();
}
