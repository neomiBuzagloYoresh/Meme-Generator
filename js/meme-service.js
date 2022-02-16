'use strict'
// Add a memeService with a gMeme variable and a function getMeme(), the
// function renderMeme() can now render that meme 



var gImgs = [{ id: 1, url: './meme-imgs/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: './meme-imgs/2.jpg', keywords: ['funny', 'cat'] },
{ id: 3, url: './meme-imgs/3.jpg', keywords: ['funny', 'cat'] },
{ id: 4, url: './meme-imgs/4.jpg', keywords: ['funny', 'cat'] },
];

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: drawText(text, x, y),
            size: 20,
            align: 'center',
            color: 'red'
        }
    ]
}

function getMeme() {
    var meme = gMeme



    return meme;

}


// var books = gBooks

// const startIdx = gPageIdx * PAGE_SIZE

// books = books.slice(startIdx, startIdx + PAGE_SIZE)
// return books

// function getCurrLineIdx() {


// }


// let theText = myTextInput.value;


function addTextLine() {
    var newLine = document.querySelector('.text').value;
    newLine.innerText = newLine.value

}