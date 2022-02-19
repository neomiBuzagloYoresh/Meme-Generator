'use strict'


var gFilterBy = { id: 1, keywords: 0 }

var gKeywordSearchCountMap = { 'funny': 10, 'dog': 3, 'baby': 5 };

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
    { id: 14, url: './meme-imgs/14.jpg', keywords: ['funny', 'baby'] },
    { id: 15, url: './meme-imgs/15.jpg', keywords: ['funny', 'political'] },
    { id: 16, url: './meme-imgs/16.jpg', keywords: ['funny', 'love'] },
    { id: 17, url: './meme-imgs/17.jpg', keywords: ['israel', 'love'] },
    { id: 18, url: './meme-imgs/18.jpg', keywords: ['israel', 'love'] },


];

console.log('getImgs() ', getImgs());

function getImgs() {
    var imgs = gImgs.filter((img) => img.keywords.includes(gFilterBy.keywords))
    console.log('imgs', imgs);
    const startIdx = gImgs.keywords * gKeywordSearchCountMap
    imgs = imgs.slice(startIdx, startIdx + gKeywordSearchCountMap)

    return imgs
}


function getImg() {
    var imgs = gImgs;
    // console.log('imgs', imgs);
    return imgs
}

// console.log(' filterImg()', filterImg());
// function filterImg() {
//     var imgByKeyWord = gImgs.filter(function (img) {
//         return img.keywords = "baby";
//     });

// }
// function getImgForDisplay() {
//     var imgs = gImgs;
//     if (gSortBy === gImgs.keywords) {
//         imgs = sortByName();
//     }
//     return imgs;
// }

// function setSortBy(sortBy) {
//     gSortBy = sortBy;
//     gSortDir = gSortDir === 'asc' ? 'desc' : 'asc';
// }


// function sortByName() {
//     var sortedImgs = gImgs.sort(function (img1, img2) {
//         var changeDir = gSortDir === 'desc' ? -1 : 1;
//         return (
//             (img1.gImgs.keywords.toLowerCase() > img2.gImgs.keywords.toLowerCase() ? 1 : -1) *
//             changeDir
//         );
//     });
//     return sortedImgs;
// }

