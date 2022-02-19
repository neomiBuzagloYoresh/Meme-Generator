'use strict'

var isNewMeme = false;
var newCurrMeme;
var gCanvas;
var gCtx;
var gCurrShape = 'text';
var gMeme;
// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
init()

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    // drawTextFirstLineFirstLine('try', 10, 25)

    // addListeners()
    renderMeme()
    // resizeCanvas()
}
// getMeme()

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

    // console.log('drawImg', drawImg());
}


// function renderCircle() {
//     const { pos, color, size } = getMeme()
//     // drawArc(pos.x, pos.y, size, color)
// }

function newMeme() {
    isNewMeme = true;
    // newCurrMeme = getRandomMeme()
    renderMeme()
    isNewMeme = false;
}


// function addListeners() {
//     addMouseListeners()
//     addTouchListeners()
//     window.addEventListener('resize', () => {

//         renderMeme()
//     })
// }


function drawTextFirstLine(memes, x, y) {

    // console.log('memes', memes);
    newCurrMeme.lines.forEach((lines, indx) => {
        var newColor = getColor();
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = 'black';
        gCtx.fillStyle = newColor;
        gCtx.font = '40px Arial';
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
    var imoj = [
        glass, had, hor, scream, love, qui, x, y
    ]

    for (var i = 0; i < imoj.length; i++) {
        var newImoj = imoj[Math.floor(Math.random() * 8)];
        // console.log('img', img);
    }
    var randomImoj = newImoj;
    gCtx.font = '30px serif'
    // use these alignment properties for "better" positioning
    gCtx.textAlign = "center";
    gCtx.textBaseline = "middle";
    // draw the emoji
    gCtx.fillText(randomImoj, gCanvas.width / 2, gCanvas.height / 2)
    // renderMeme();

}



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

    // var memeTxt = newCurrMeme.lines[newCurrMeme.selectedLineIdx];

    if (newCurrMeme.selectedLineIdx === newCurrMeme.lines.length - 1) {
        newCurrMeme.selectedLineIdx = 0;
    } else {
        if (newCurrMeme.selectedLineIdx < newCurrMeme.lines.length) {
            newCurrMeme.selectedLineIdx += 1;
        }
    }
    renderMeme()

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





// console.log(getRandomMeme());
function getRandomMeme() {

    var newMeme = {

        selectedImgId: getRandomInt(1, 17),
        selectedLineIdx: 0,
        lines: [],
    };
    var lineNum = getRandomInt(1, 2)

    for (var i = 0; i < lineNum; i++) {
        var senten = getRandomSenten();
        newMeme.lines.push({ font: '10px', txt: senten, color: getRandomTxtColor(), stroke: getRandomStrokeColor(), align: 'center' })

    }
    return newMeme
}


function getRandomImg() {

    for (var i = 0; i < gImgs.length; i++) {
        var img = gImgs[Math.floor(Math.random() * 18)];
        // console.log('img', img);
    }
    return img

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



// console.log('newMeme()', newMeme());







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