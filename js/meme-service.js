'use strict'



var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'txt',
            size: 40,
            align: 'center',
            color: 'black'
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