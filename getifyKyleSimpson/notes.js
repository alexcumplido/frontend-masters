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