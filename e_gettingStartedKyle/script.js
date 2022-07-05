// console.log(typeof doesNotExist)
// var v;
// console.log(typeof v);
// v = "1";
// console.log(typeof v);
// v = 2;
// console.log(typeof v);
// v = true;
// console.log(typeof v);
// v = {};
// console.log(typeof v);
// v = Symbol();
// console.log(typeof v);
// v = null;
// console.log(typeof v);
// v = function () { };
// console.log(typeof v);


// var greeting = "Hello, class!";
// var something = greeting / 2;
// console.log(something, Number.isNaN(something), Number.isNaN(greeting), typeof something);

// // Falsy
// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(false));
// console.log(Boolean(undefined));

// // Truthy
// (function sayHello() {
//     console.log('hello');
// })();

// function expressions

//SCOPE
// Where the JavaScript engine need to look to get the variables
let instructor = 'Kyle';

function otherClass() {
    instructor = "Suzy";
    topic = "React"; // A variable undeclared will be created in the global scope
    console.log('Welcome!');

}

otherClass();
console.log(instructor, topic);

// A function is avalue that can be assigned as a value somewhere

var clickHandler = function () {
    // Anonymous function expression
}

var keyHandler = function keyHandler() {
    // Named function expression
}

var people = [];
var ids = people.map(person => person.id);

var ids = people.map(function getIdFrom(person) {
    return person.id;
})

// Block scoping with let
var teacher = "kyle";
{
    let teacher = "Suzy";
    console.log(teacher) //Different variable "Suzy"
}
console.log(teacher); // Kyle

function formatStr(str) {
    {//Explicit let block scope
        let prefix, rest; //Those variable live just in this scope inside formatStr function
        prefix = str.slice(0, 3);
        rest = str.slice(3);
        str = prefix.toUpperCase() + rest;
    }

    if (/^FOO:/.test(str)) {
        return str;
    }

    return str.slice(4);
}

// Closure is when a function "remembers" the variables outside of it.

function ask(question) {
    setTimeout(function waitASec() { //waitASec as a function has closure over the question variable, preserving acces of that variable over time
        console.log(question);
    }, 500);
}

ask("What is closure?");

//THIS
