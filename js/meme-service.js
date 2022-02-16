'use strict'
// Add a memeService with a gMeme variable and a function getMeme(), the
// function renderMeme() can now render that meme 
// var gCanvas;
// var gCtx;

// gCanvas = document.getElementById('my-canvas')
// gCtx = gCanvas.getContext('2d')

var gImgs = [{ id: 1, url: './meme-imgs/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: './meme-imgs/2.jpg', keywords: ['funny', 'cat'] },
{ id: 3, url: './meme-imgs/3.jpg', keywords: ['funny', 'cat'] },
{ id: 4, url: './meme-imgs/4.jpg', keywords: ['funny', 'cat'] },
];


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'txt',
            size: 20,
            align: 'center',
            color: 'red'
        }
    ]
}

function setLineTxt(txt) {
    gMeme.lines[0].txt = txt;
    // renderMeme();

}

// function getImgId(imgId) {
//     const img = gImgs.find((img) => imgId === img.id)
//     return img
// }


function getMeme() {
    var meme = gMeme
    return meme;
}


// function getColor() {
//     var color = document.querySelector('body');
//     color.body.style.backgroundColor = 'RED';

// }