class Book {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
let books = new Array(new Book("test3",100),new Book("test4",200),new Book("test2",50),new Book("test1",600))

$(window).load(function () {
    display()
});

function display() {
    books.forEach(function (book) {
        $("#book-table").append(`<tr><td>${book.title}</td><td>${book.price}</td></tr>`)
    })
}