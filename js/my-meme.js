'use strict'


const STORAGE_KEY = 'memeDB';


function renderMemesGallery() {
    document.querySelector('.my-memes').style.display = 'block';

    document.querySelector('.gallery-pic').style.display = 'none';
    document.querySelector('.editor').style.display = 'none';
    // document.querySelector('.search').style.display = 'none';

    var strHtmls = '';
    const memes = loadFromStorage(STORAGE_KEY);
    if (!memes || !memes.length) strHtmls += 'There is no saved Mems yet';
    else {
        strHtmls += memes.map((img) => `<img class="item"  src="${img}">`).join('');
    }

    document.querySelector('.my-saved-memes').innerHTML = strHtmls;
}


function downloadMemeImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}
