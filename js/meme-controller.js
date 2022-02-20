'use strict'
init()

var isNewMeme = false;
var newCurrMeme;
var gCanvas;
var gCtx;
var gCurrShape = 'text';
var gMeme;


function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')

    renderMeme()

}



function renderMeme() {
    if (isNewMeme) {
        newCurrMeme = getRandomMeme()
        console.log('newCurrMeme1', newCurrMeme);
        isNewMeme = true;
    } else {
        newCurrMeme = getMeme()
        console.log('newCurrMeme2', newCurrMeme);
        isNewMeme = false;
    }

    var memeTxt = newCurrMeme.lines[newCurrMeme.selectedLineIdx];

    var memeImg = newCurrMeme.selectedImgId;
    drawImg(memeImg, memeTxt)
    clearCanvas()
    // console.log('drawImg', drawImg());
    _saveMemesToStorage()
}



function newMeme() {
    isNewMeme = true;
    // newCurrMeme = getRandomMeme()
    renderMeme()
    isNewMeme = false;
}





function drawTextFirstLine(memes, x, y) {
    gMeme = loadFromStorage(STORAGE_KEY)


    newCurrMeme.lines.forEach((line, indx) => {

        gCtx.lineWidth = 2;
        gCtx.strokeStyle = 'black';
        gCtx.fillStyle = line.color;
        gCtx.font = `${line.font} Ariel`;
        gCtx.textAlign = 'center';


        gCtx.fillText(line.txt, x, y + indx * 350);
        gCtx.strokeText(line.txt, x, y + indx * 500);

    });
}
function memeController() {


}

saveMeme()
function saveMeme() {

    var imgContent = gCanvas.toDataURL('image/jpeg')
    console.log('imgContent', imgContent);
    addMemeToArr(imgContent)

}


// function textSize() {
//     var meme = getMeme();
//     meme.line.fontSize++
//     // var font = document.getElementById('b').style.fontSize;            
//     // font++;
//     return meme.line.fontSize + 'px'
// }


function onText(elTxt, elColor) {
    var elTxt = document.querySelector('.texts').value;
    var elColor = document.querySelector('.color').value;
    setLineTxt(elTxt);
    setLineColor(elColor);

    renderMeme();
}




function drawImg(imgId, memeTxt) {

    var img = new Image()
    img.src = `./meme-imgs/${imgId}.jpg`;
    // console.log('gCtx', gCtx);
    img.onload = () => {

        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);

        drawTextFirstLine(memeTxt.txt, 200, 70);

    }

}

function onSwitch() {


    if (newCurrMeme.selectedLineIdx === newCurrMeme.lines.length - 1) {
        newCurrMeme.selectedLineIdx = 0;
    } else {
        if (newCurrMeme.selectedLineIdx < newCurrMeme.lines.length) {
            newCurrMeme.selectedLineIdx += 1;
        }
    }
    renderMeme()

}

function clearCanvas() {

    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function closeEditor() {
    var close = document.querySelector('.editor');
    var open = document.querySelector('.gallery ');
    close.style.display = 'none'
    open.style.display = 'block'
    // renderMeme()

}



function openEditor() {
    var open = document.querySelector('.editor ');
    var close = document.querySelector('.gallery ');
    open.style.display = 'block'
    close.style.display = 'none'
    // renderMeme()
    // renderImg()
}

function toggleMenu() {
    document.body.classList.toggle("menu-open");
}


function openModal() {
    document.body.classList.toggle("menu-open");
    var elModal = document.querySelector('.btn-modal');
    elModal.classList.add('show');
}

function closeModal() {
    var elModal = document.querySelector('.btn-modal');

    elModal.classList.remove('show');
    document.body.classList.toggle("menu-open");
}

function openMoreModal() {
    var elOpen = document.querySelector('.share-modal');
    var elClose = document.querySelector('.close-more');
    var download = document.querySelector('.download');
    download.style.display = 'block'
    elOpen.style.display = 'block'
    elClose.style.display = 'block'
}


function closeMoreModal() {
    var elClose = document.querySelector('.share-modal');
    elClose.style.display = 'none'
}


function getRandomMeme() {

    var newMeme = {

        selectedImgId: getRandomInt(1, 17),
        selectedLineIdx: 0,
        lines: [],
    };
    var lineNum = getRandomInt(1, 2)

    for (var i = 0; i < lineNum; i++) {
        var senten = getRandomSenten();
        newMeme.lines.push({ font: '20px', txt: senten, color: getRandomTxtColor(), stroke: getRandomStrokeColor(), align: 'center' })

    }
    return newMeme
}


function getRandomSenten() {

    for (var i = 0; i < memesSentences.length; i++) {
        var sen = memesSentences[Math.floor(Math.random() * 15)];
        // console.log('sen', sen);
    }
    return sen
}

function getRandomTxtColor() {

    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];

    }
    return color;
}


function getRandomStrokeColor() {

    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];

    }
    return color;
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}




// function getRandomImg() {

//     for (var i = 0; i < gImgs.length; i++) {
//         var img = gImgs[Math.floor(Math.random() * 18)];
//         // console.log('img', img);
//     }
//     return img

// }