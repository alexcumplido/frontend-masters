// To reference and hold values JS provide bindings (variables)
// Variable references a value using keywords: const, let, var.
// let or var can reference different values over its lifetime

let variable;
var otherVariabe;

// const will reference same value over its lifetime, needs initialization.

const FIRST_CONSTANT = "firstConstant"; // Can't asign other value.

// Fragment of code that produces value is called expression
// Primitive data type : value that is not an object and has no methods.
// 7 types: string, number, bigint, boolean, undefined, symbol, and null.
// Literal value : piece of actual data and not result of calculation.
// Are immutable. Can be replaced but not altered.

// initializing variable (declaration + value assignment)
var firstVar = "jsFundamentals";
// declaring variable
var secondVar;
var thirdVar;

// content of firstVar at this point in the code
console.log(firstVar);

// secondVar equals undefined since it has not yet been given a value
console.log(secondVar);

//Garbage Collection: new memory allocation starts and js removes initial value since not used anymore
firstVar = "2022";

// asign to secondVar the value of another variable
secondVar = firstVar;
firstVar = "2023";

console.log(firstVar, secondVar);

// +, -, *,/ operators, they operate on the values they receive
// = asignment operator
// thirdVar holds results of the expression 2022 + 2023
thirdVar = 2022 + 2023;

//Increment or decrement operators
let numberOne = 1;
let numberTwo = 1;
let numberThree = 2;

console.log(numberOne++ * numberThree);
console.log(++numberTwo * numberThree);
// Fahrenheit to Centigrade : Celsius = 5 / 9 * (Fahrenheit - 32)
var degFahren, degCent, noPrecedence;

degFahren = prompt("Enter Fahrenheit degrees", 50);

//Operator precedence: how operators are parsed concerning each other
//Left-associativity: left to right ()  */    + -
//Asignment operators are right-associativity
degCent = 5 / 9 * (degFahren - 32);
noPrecedence = 5 / 9 * degFahren - 32;
console.log(degCent, noPrecedence);
