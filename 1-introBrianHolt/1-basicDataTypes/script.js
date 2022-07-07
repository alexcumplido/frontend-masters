// Primitive data type : value that is not an object and has no methods.
// Primitive string, number, bigint, boolean, undefined, symbol, and null.

//Numbers: JS do not distinguish between floats and integers, they are both numbers
console.log(typeof 4.5, typeof 30);

// Strings: a collection of characters
var greeting = "Hello ";

// Boolean
true
false

// Represent empty values, emptyness for the most part represent the same
undefined
null

//Non primitive
//Arrays
var array = [1, 2, 3]

//Objects 
//Collection of values. Values are given position - names locator (property-key)
var object = {
    name: "Alexandre"
}

// To reference and hold values JS provide bindings (variables)
// A represnetation of some location in memmory
// Pointing a reference of a value in memmory
// Retrieving a variable means retrieving what is referenced in that memmory place

// Created using keywords: const, let, var.
// let or var can reference different values over its lifetime

// const will reference same value over its lifetime, needs initialization.
const FIRST_CONSTANT = "firstConstant"; // Can't asign other value.

// declaring variable
var firstVariable, secondVariable;

// initializing variable (declaration + value assignment)
var third = "jsFundamentals";

// content of variables at this point in the code (secondVar has not yet been given a value)
console.log(firstVar, secondVar);

//Garbage Collection: new memory allocation starts and js removes initial value since not used anymore
firstVar = "2022";

// +, -, *,/ operators, they operate on the values they receive
// = asignment operator
// binary operators when there are 2 operands
2 + 4;
// unary operator when there is just 1 operand
!true

// Statement example
// thirdVar is an expression of a variable
// 2022 and 2023 are expressions of literal values
// thirdVar holds results of the expression 2022 + 2023
thirdVar = 2022 + 2023;

//Increment or decrement operators
let numberOne = 1;
let numberTwo = 1;
let numberThree = 2;

console.log(numberOne++ * numberThree);
console.log(++numberTwo * numberThree);
