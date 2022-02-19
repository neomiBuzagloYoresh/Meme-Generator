'use strict'

// var gSortBy;
// var gSortDir = 'asc';
// var gFilterBy = { vendor: '', minSpeed: 0 }
// var gSortBy = { id: '', keywords: true }




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

function getImg() {
    var imgs = gImgs;
    // console.log('imgs', imgs);

    return imgs
}

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

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

// The next 2 functions handle IMAGE UPLOADING to img tag from file system: 
function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader()

    reader.onload = function (event) {
        // console.log('onload');
        var img = new Image()
        // Render on canvas
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
        gImg = img
    }
    // console.log('after');
    reader.readAsDataURL(ev.target.files[0])
}


function uploadImg() {
    const imgDataUrl = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        // console.log(encodedUploadedImgUrl);
        document.querySelector('.user-msg').innerText = `Your photo is available here: ${uploadedImgUrl}`

        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }

    doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            // console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}


// function setKeywordsSort(sortBy = {}) {
//     // var memeId =
//     if (sortBy.keywords !== undefined) {
//         gImgs.sort((k1, k2) => (k1.keywords - k2.keywords) * sortBy.keywords)
//     }
//     // if (sortBy.vendor !== undefined) {
//     //     gImgs.sort((k1, k2) => k1.vendor.localeCompare(k2.vendor) * sortBy.vendor)
//     // }
// }



// function sortSelect(selElem) {
//     var sortKeyWord = document.getElementById('keyword');
//     // var tmpAry = new Array();
//     for (var i = 0; i < selElem.options.length; i++) {
//         sortKeyWord[i] = new Array();
//         sortKeyWord[i][0] = selElem.options[i].text;
//         sortKeyWord[i][1] = selElem.options[i].value;
//     }
//     sortKeyWord.sort();
//     while (selElem.options.length > 0) {
//         selElem.options[0] = null;
//     }
//     for (var i = 0; i < sortKeyWord.length; i++) {
//         var op = new Option(sortKeyWord[i][0], sortKeyWord[i][1]);
//         selElem.options[i] = op;
//     }
//     return;
// }