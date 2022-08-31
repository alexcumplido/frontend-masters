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
// Challenge 1,2,3,4,5