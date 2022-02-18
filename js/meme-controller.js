'use strict'

var gCanvas;
var gCtx;
var gCurrShape = 'text';
var gMeme;
// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
init();

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    // drawTextFirstLineFirstLine('try', 10, 25)


    renderMeme()
}



function renderMeme() {
    var meme = getMeme()
    var memeTxt = meme.lines[meme.selectedLineIdx];

    var memeImg = meme.selectedImgId;
    drawImg(memeImg, memeTxt)

    // console.log('drawImg', drawImg());
}

function drawTextFirstLine(memes, x, y) {
    var memes = getMeme()
    console.log('memes', memes);
    memes.lines.forEach((lines, indx) => {
        var newColor = getColor();
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = 'black';
        gCtx.fillStyle = newColor;
        gCtx.font = '60px Arial';
        gCtx.textAlign = 'center';

        gCtx.fillText(lines.txt, x, y + indx * 350);
        gCtx.strokeText(lines.txt, x, y + indx * 500);

    });
}

function drawEmoji() {
    var glass = '🕶️';
    var had = '⛑️';
    var hor = '🌪️';
    var scream = '😱';
    var love = '♥️';
    var qui = '🔕';
    var x = '📣';
    var y = '🔔';

    renderMeme();

}



function onText(elTxt, elColor) {
    var elTxt = document.querySelector('.texts').value;
    var elColor = document.querySelector('.color').value;
    setLineTxt(elTxt, elColor);


    renderMeme();
}




function drawImg(imgId, memeTxt) {

    var img = new Image()
    img.src = `./meme-imgs/${imgId}.jpg`;
    console.log('gCtx', gCtx);
    img.onload = () => {

        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);

        drawTextFirstLine(memeTxt.txt, 200, 70);

    }
}

function onSwitch() {
    var meme = getMeme()
    var memeTxt = meme.lines[meme.selectedLineIdx];

    if (meme.selectedLineIdx === meme.lines.length - 1) {
        meme.selectedLineIdx = 0;
    } else {
        if (meme.selectedLineIdx < meme.lines.length) {
            meme.selectedLineIdx += 1;
        }
    }
    renderMeme()

}


function closeEditor() {
    var close = document.querySelector('.editor ');
    close.style.display = 'none'
    // renderMeme()

}

function openEditor() {
    var open = document.querySelector('.editor ');
    open.style.display = 'block'
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









// function openMenu() {
//     document.body.classList.add('menu-open')
// }

// function closeMenu() {
//     document.body.classList.remove('menu-open')
// }

// function openModal() {
//     document.body.classList.toggle('modal-open')
// }

// function closeModal() {
//     document.body.classList.remove('modal-open')
// }


// function toggleMenu() {
//     document.body.classList.toggle('menu-open');
//     closeModal()
//   }
//   function toggleModal() {
//     document.querySelector('.modal').classList.toggle('hidden');
//     document.body.classList.toggle('modal-open');
//   }
//   function closeModal() {
//     document.querySelector('.modal').classList.add('hidden');
//     document.body.classList.remove('modal-open');
//   }