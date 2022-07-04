class Bookshelf {
    constructor() {
        this.favoriteBooks = [];
    }

    addFavoriteBooks(bookName) {
        if (!bookName.toLowerCase().includes("great")) {
            this.favoriteBooks.push(bookName);
        }
    }

    printFavoriteBooks() {
        console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
        for (let i = 0; i < this.favoriteBooks.length; i++) {
            console.log(`Book number ${i} in list is: ${this.favoriteBooks[i]}`);
        }
    }
}

function loadBooks(bookshelf) {
    fakeAjax(BOOK_API, function onBooks(bookNames) {
        for (let i = 0; i < bookNames.length; i++) {
            bookshelf.addFavoriteBooks(bookNames[i]);
        }
        bookshelf.printFavoriteBooks();
    });
}

var BOOK_API = "https://some.url/api";

function fakeAjax(url, cb) {
    setTimeout(function fakeLoadingDelay() {
        cb([
            "A Song of Ice and Fire",
            "The Great Gatsby",
            "Crime & Punishment",
            "Great Expectations",
            "You Don't Know JS"
        ]);
    }, 500);
}

let myBookshelf = new Bookshelf;
loadBooks(myBookshelf);