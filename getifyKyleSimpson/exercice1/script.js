
function addFavoriteBook(bookName) {
    if (!bookName.toLowerCase().includes('great')) {
        favoriteBooks.push(bookName);
    }
}

function printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBooks.length}`);
    for (let i = 0; i < favoriteBooks.length; i++) {
        console.log(`Book number ${i} in list is: ${favoriteBooks[i]}`);
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks();

// 1. Define an `addFavoriteBook(..)` function that receives a single parameter, called `bookName`.
// 2. If the provided `bookName` string does *NOT* have the word "Great" in it, add it to the `favoriteBooks` array.
// 3. Define a `printFavoriteBooks()` function that receives no parameters.
// 4. `printFavoriteBooks()` should first print a message like "Favorite Books: ..", and include the number of books in the `favoriteBooks` array.
// 5. Finally, `printFavoriteBooks()` should loop through the `favoriteBooks` array and print out each value.

console.log(typeof doesNotExist)
var v;
console.log(typeof v);
v = "1";
console.log(typeof v);
v = 2;
console.log(typeof v);
v = true;
console.log(typeof v);
v = {};
console.log(typeof v);
v = Symbol();
console.log(typeof v);
v = null;
console.log(typeof v);
v = function () { };
console.log(typeof v);


var greeting = "Hello, class!";
var something = greeting / 2;
console.log(something, Number.isNaN(something), Number.isNaN(greeting), typeof something);

// Falsy
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(Boolean(undefined));

// Truthy
(function sayHello() {
    console.log('hello');
})();

// function expressions

