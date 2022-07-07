const A = "A";
let F;

function doStuff(B) {
    console.log(B);
    const C = "C";
    let H = "H";
    if (true) {
        const D = "D";
        H = "something else";
    }
    console.log('At this point in code D equals undefined', D);
    console.log('At this point in code H equals : something else', H);
    F = "F";
}
doStuff("B");

//Check for adult person
function checkAge(age) {
    return (age > 18) ? true : false;
}

function checkAge(age) {
    return age > 18 || confirm('Did parents allow you?');
}

//Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
    return (a < b) ? a : b;
}

//--> arrov verson
let min = (a, b) => (a < b) ? a : b;


function ask(question, yes, no) {
    confirm(question) ? yes() : no();
}

function showOk() {
    alert("You agreed.");
}
function showCancel() {
    alert("You canceled the execution.");
}

ask(
    'Are you agree?',
    showOk(),
    showCancel()
);

//Other declarative and arrow functions examples

//Example Arrow 1
const greet = function () {
    return 'hello World';
}
// --> Arrow version
const greets = () => 'hello World';

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
        return total;
    }
}

//Multiplication fo two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

let multiplyArrow = (num1, num2) => num1 * num2;

//String to lower case and 1st letter upper case 
function capitalize(str) {
    let strLow = str.toLowerCase();
    return strLow.replace(strLow[0], strLow[0].toUpperCase(0));
}

//Return last letter of a String
function lastLetter(str) {
    return str[str.length - 1];
}
let lastArrow = (str) => str[str.length - 1];

//Reverse String
function reverseString(string) {
    let reverseStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverseStr += string.charAt(i);
    }
    return reverseStr;
}


//......................................................................
const myFunc = function (callbackFunc) {
    //do something
    let value = 50;
    callbackFunc(value);
}

myFunc(value => {
    //do something
    console.log(value);
});

