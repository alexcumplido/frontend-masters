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
}

function multiplyBy2(number) {
    return number * 2;
}

function divideBy2(number) {
    return number / 2;
}

function addBy2(number) {
    return number + 2;
}

const array = [1, 2, 3]
let resultMultiply = copyArrayAndManipulate(array, multiplyBy2);
let resultDivide = copyArrayAndManipulate(array, divideBy2);
let resultAdd = copyArrayAndManipulate(array, addBy2);


// http://csbin.io/callbacks
// In challenge 3, you've created a function called map. In this challenge, you're going to rebuild the map function by creating a function called mapWith.This time you're going to use forEach inside of mapWith instead of using a for loop.

//Challenge 3
function map(array, callback) {
    let storage = [];
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            storage.push(callback(array[i], i, array));
        }
    } else {
        for (let key in array) {
            storage.push(callback(array[key], key, array));
        }
    }
    return storage;
}

//Challenge 4
function forEach(array, callback) {
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i], i, array);
        }
    } else {
        for (let key in array) {
            callback(array[key], key, array);
        }
    }
}

//Challenge 5
function mapWith(array, callback) {
    let storage = [];
    forEach(array, function () {
        storage.push(callback);
    });
    return storage;
}

let arrayNumbers = [1, 2, 3];
let testing = mapWith(arrayNumbers, function (element, index, list) {
    return element + 1;
});