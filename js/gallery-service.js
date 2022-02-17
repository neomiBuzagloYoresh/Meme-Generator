'use strict'

var gImgs = [{ id: 1, url: './meme-imgs/1.jpg', keywords: ['political', 'dog'] },
{ id: 2, url: './meme-imgs/2.jpg', keywords: ['love', 'dog'] },
{ id: 3, url: './meme-imgs/3.jpg', keywords: ['baby', 'dog'] },
{ id: 4, url: './meme-imgs/4.jpg', keywords: ['cute', 'cat'] },
{ id: 5, url: './meme-imgs/5.jpg', keywords: ['baby', 'score'] },
{ id: 6, url: './meme-imgs/6.jpg', keywords: ['funny', 'actor'] },
{ id: 7, url: './meme-imgs/7.jpg', keywords: ['funny', 'baby'] },
{ id: 8, url: './meme-imgs/8.jpg', keywords: ['funny', 'actor'] },
{ id: 9, url: './meme-imgs/9.jpg', keywords: ['funny', 'baby'] },
{ id: 10, url: './meme-imgs/10.jpg', keywords: ['funny', 'political'] },
{ id: 11, url: './meme-imgs/11.jpg', keywords: ['funny', 'love'] },
{ id: 12, url: './meme-imgs/12.jpg', keywords: ['israel', 'love'] },
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