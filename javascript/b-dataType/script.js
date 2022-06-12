// Strings
// Concatenation : joning two strings
var greeting = "Hello ";
var userString = prompt("Please enter your name", "");
var concatString;

concatString = greeting + userString;
console.log(concatString);

//Data type: conversion
var dataString = "123.4";
var dataInteger = parseInt(dataString, 10); //,10 is radiax, 
var dataFloat = parseFloat(dataString);

var dataPureString = "String";
var nonConversion = parseInt(dataPureString); //Not a Number NaN
console.log(isNaN(dataString));
console.log(isNaN(dataPureString));


//Math or number object
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));