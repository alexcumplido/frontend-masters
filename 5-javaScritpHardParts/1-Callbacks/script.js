function tenSquare() {
    return 10 * 10;
}

console.log(tenSquare());

function copyArrayAndMultyplyBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] * 2);
    }
    return output;
}

function copyArrayAnDivideBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] / 2);
    }
    return output;
}

function copyArrayAndAdd2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] + 2);
    }
    return output;
}

const myArray = [1, 2, 3];
const result1 = copyArrayAndMultyplyBy2(myArray);
const result2 = copyArrayAnDivideBy2(myArray);
const result3 = copyArrayAndAdd2(myArray);


function copyArray(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}

const multiplyBy2 = (number) => number * 2;
const divideBy2 = (number) => number / 2;
const addBy2 = (number) => number + 2;

const array = [1, 2, 3]
let resultMultiply = copyArray(array, multiplyBy2);
let resultDivide = copyArray(array, divideBy2);
let resultAdd = copyArray(array, addBy2);


// http://csbin.io/callbacks
// Challenge 3,4,5

// Challenge 3
// Create a function called map that takes two inputs:
// an array of numbers(a list of numbers)
// a 'callback' function - a function that is applied to each element of the array(inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

function map(array, callback) {
    let mappedArray = [];
    if (Array.isArray(array)) {
        for (let index = 0; index < array.length; index++) {
            storage.push(callback(array[index]));
        }
    } else {
        for (let key in array) {
            storage.push(callback(array[key]));
        }
    }
    return mappedArray;
}

// // Challenge 4
// // Create a function called forEach that takes an array and a callback, and runs the callback on each element of the array.forEach does not return anything.

function forEach(array, callback) {
    if (Array.isArray(array)) {
        for (let index = 0; index < array.length; index++) {
            callback(array[index]);
        }
    } else {
        for (let key in array) {
            callback(array[key]);
        }
    }
}

// Challenge 5
// In challenge 3, you've created a function called map.
// In this challenge, you're going to rebuild the map function by creating a function called mapWith.
// This time you're going to use forEach inside of mapWith instead of using a for loop.

let testArray = [1, 2, 3];
function mapWith(array, callback) {
    let mappedArray = [];
    forEach(array, function (item) {
        mappedArray.push(callback(item));
    });
    return mappedArray;
}

function add2(item) {
    return item + 2;
}
let mappedArray = mapWith(testArray, add2);
