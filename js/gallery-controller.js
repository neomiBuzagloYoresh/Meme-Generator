'use strict'



function renderGallery() {
    var imgs = getImg();

    var strHTMLs = '';
    strHTMLs = imgs.map((img) => {
        return `<img src="/meme-imgs/10.jpg" alt="" />
        <img src="/meme-imgs/11.jpg" alt="" />
        <button onclick="onImgSelect()"></button>

`
    })

    document.querySelector('.gallery').innerHTML = strHTMLs.join(', ')
}

// 7. onImgSelect – memeService.setImg() and then renderMeme()
function onImgSelect() {


}


// const books = getBooks();
// var strHTMLs = books.map((book) => {

//     return `< tr >
//     <td>${book.id}</td>
//         <td >${book.bookName}</td>
//         <td > ${book.bookPrice}$</td>
//         <td><img src="img/${book.imgUrl}.jpg"/></td>
//         <td class="update-rating">${book.rating}</td>
//         <td>
//         <button class="Read" onclick="onReadBook('${book.id}')">Read</button>
//         <button class="update" onclick="onUpdateBook('${book.id}')">Update</button>
//         <button class="delete" onclick="onDeleteBook('${book.id}')">Delete</button></td>
//          </> `
// })
// document.querySelector('.books-table').innerHTML = strHTMLs.join('')
