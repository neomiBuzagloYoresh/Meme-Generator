'use strict'

var gFilterBy = 'ALL';




var gImgs = [
    { id: 1, url: './meme-imgs/1.jpg', keywords: ['political', 'dog'] },
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
    { id: 13, url: './meme-imgs/13.jpg', keywords: ['funny', 'actor'] },
    { id: 14, url: './meme-imgs/14.jpg', keywords: ['funny', 'actor'] },
    { id: 15, url: './meme-imgs/15.jpg', keywords: ['funny', 'actor'] },
    { id: 16, url: './meme-imgs/16.jpg', keywords: ['funny', 'actor'] },
    { id: 17, url: './meme-imgs/17.jpg', keywords: ['political', 'funny'] },
    { id: 18, url: './meme-imgs/18.jpg', keywords: ['actor', 'love'] },


];





function setFilter(filterBy) {
    if (filterBy === 'ALL') gFilterBy = 'ALL';
    gFilterBy = filterBy;
    renderGallery();
}
function getImagesForDisplay() {
    if (gFilterBy === 'ALL') return gImgs;

    return gImgs.filter((img) => img.keywords.includes(gFilterBy));
}



// function drawEmoji() {
//     var glass = '🕶️';
//     var had = '⛑️';
//     var hor = '🌪️';
//     var scream = '😱';
//     var love = '♥️';
//     var qui = '🔕';
//     var x = '📣';
//     var y = '🔔';
//     var imoj = [
//         glass, had, hor, scream, love, qui, x, y
//     ]

//     for (var i = 0; i < imoj.length; i++) {
//         var newImoj = imoj[Math.floor(Math.random() * 8)];
//         // console.log('img', img);
//     }
//     var randomImoj = newImoj;
//     gCtx.font = '30px serif'
//     // use these alignment properties for "better" positioning
//     gCtx.textAlign = "left";
//     gCtx.textBaseline = "middle";
//     // draw the emoji
//     gCtx.fillText(randomImoj, gCanvas.width / 2, gCanvas.height / 2)
//     // renderMeme();

// }

