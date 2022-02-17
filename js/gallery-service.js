'use strict'

var gImgs = [{ id: 1, url: './meme-imgs/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: './meme-imgs/2.jpg', keywords: ['funny', 'cat'] },
{ id: 3, url: './meme-imgs/3.jpg', keywords: ['funny', 'cat'] },
{ id: 4, url: './meme-imgs/4.jpg', keywords: ['funny', 'cat'] },
{ id: 5, url: './meme-imgs/5.jpg', keywords: ['funny', 'cat'] },
{ id: 6, url: './meme-imgs/6.jpg', keywords: ['funny', 'cat'] },
{ id: 7, url: './meme-imgs/7.jpg', keywords: ['funny', 'cat'] },
{ id: 8, url: './meme-imgs/8.jpg', keywords: ['funny', 'cat'] },
{ id: 9, url: './meme-imgs/9.jpg', keywords: ['funny', 'cat'] },
];

function getImg() {
    var imgs = gImgs;
    console.log('imgs', imgs);

    return imgs
}


// function setImg() {
//     var meme = getMeme()
//     meme.selectedImgId = gImgs.id
//     console.log('meme', meme);
//     return meme

// }