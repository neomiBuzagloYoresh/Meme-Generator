'use strict'

var gMeme;
var gStartPos;
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {

            txt: 'txt1',
            size: 40,
            align: 'center',
            color: 'black',
            isDrag: false
        },
        {

            txt: 'txt2',
            size: 40,
            align: 'center',
            color: 'black',
            isDrag: false
        }
    ]
}



function setLineTxt(txt) {


    gMeme.lines[gMeme.selectedLineIdx].txt = txt;




}


function setLineColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
}


function getMeme() {
    var meme = gMeme
    return meme;
}

function getColor() {
    var color = document.querySelector('.color').value;

    return color
}

// function setEventListeners() {

//     gCanvas.addEventListener('mousedown', onDown);
//     gCanvas.addEventListener('mouseup', onUp);
//     gCanvas.addEventListener('mousemove', onMove);


// }

// function onMove(ev) {
//     if (gIsClicked) draw(ev);

// }
// function onDown(ev) {
//     gIsClicked = true;
//     document.body.style.cursor = 'grabbing'
//     draw(ev);
// }

// function onUp() {
//     gIsClicked = false;
//     document.body.style.cursor = 'grab'
// }


// function isCircleClicked(clickedPos) {
//     const { pos } = gMeme
//     const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
//     return distance <= gMeme.size
// }


// function setCircleDrag(isDrag) {
//     gMeme.isDrag = isDrag
// }
// function moveCircle(dx, dy) {
//     gMeme.pos.x += dx
//     gMeme.pos.y += dy

// }




function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}



function onDown(ev) {
    const pos = getEvPos(ev)
    console.log('onDown()');
    if (!isCircleClicked(pos)) return
    setCircleDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'

}

function onMove(ev) {
    console.log('onMove()');
    const circle = getMeme();
    if (circle.isDrag) {
        const pos = getEvPos(ev)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        moveCircle(dx, dy)
        gStartPos = pos
        renderMeme()
    }
}

function onUp() {
    console.log('onUp()');
    setCircleDrag(false)
    document.body.style.cursor = 'grab'
}

// function resizeCanvas() {
//     const elContainer = document.querySelector('.my-canvas')
//     gCanvas.width = elContainer.offsetWidth
//     gCanvas.height = elContainer.offsetHeight
// }

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}