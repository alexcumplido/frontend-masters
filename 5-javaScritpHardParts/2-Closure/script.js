function returnMultiplyFunction() {
    function multiplyBy2(num) {
        return num * 2;
    }
    return multiplyBy2;
}

const generatedFunc = returnMultiplyFunction();
const result = generatedFunc(3);

function outerCounter() {
    let counter = 0;
    function incrementCounter() {
        counter++;
    }
    return incrementCounter;
}

const myNewFunction = outerCounter();

myNewFunction();
myNewFunction();

// Exercises http://csbin.io/closures

// CHALLENGE 1
function createFunction() {
    function printHello() {
        console.log(`Hello user`);
    }
    return printHello;
}

const function1 = createFunction();
function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
    function printInput() {
        console.log(`${input}`);
    }
    return printInput;
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


function outer() {
    let counter = 0;
    function incrementCounter() {
        counter++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

willCounter(); //1
willCounter(); //2
willCounter(); //3
jasCounter(); //4
willCounter(); //1

// CHALLENGE 4
function addByX(x) {
    function addtoX(input) {
        console.log(`${input + x}`)
    }
    return addtoX;
}

const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9