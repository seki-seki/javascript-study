class Book {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
let books = createRandomBooks()

$(window).load(function () {
    display()
});

function display() {
    books.forEach(function (book) {
        $("#book-table").append(`<tr><td>${book.title}</td><td>${book.price}</td></tr>`)
    })
}

function createRandomBooks() {
    let books = [];
    for(let i = 0;i < 100;i++){
        books.push(new Book("book" + i,getRandomInt(100,10000)));
    }
    return books;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}