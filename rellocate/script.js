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



// Fahrenheit to Centigrade : Celsius = 5 / 9 * (Fahrenheit - 32)
var degFahren, degCent, noPrecedence;

degFahren = prompt("Enter Fahrenheit degrees", 50);

//Operator precedence: how operators are parsed concerning each other
//Left-associativity: left to right ()  */    + -
//Asignment operators are right-associativity
degCent = 5 / 9 * (degFahren - 32);
noPrecedence = 5 / 9 * degFahren - 32;
console.log(degCent, noPrecedence);

// Array manipulation with High Order Functions 
let people = [
    {
        name: 'Alex',
        year: 1992,
        city: 'Barcelona'
    },
    {
        name: 'Laura',
        year: 1988,
        city: 'Salamanca'
    },
    {
        name: 'Mixeta',
        year: 2016,
        city: 'Groundcity'
    },
    {
        name: 'Mama',
        year: 1960,
        city: 'Barcelona'
    },
]

function cloneArray(array) {
    let newArr = array.map(item => {
        return {
            ...item
        };
    });
    return newArr;
}

let under2000 = cloneArray(people).filter((person) => {
    return person.year > 2000;
});

let names = people.map(person => person.name);

let years = [1, 2, 3];
let ages = years.reduce((accumulator, current) => {
    return accumulator += current;
});

console.log(ages);
