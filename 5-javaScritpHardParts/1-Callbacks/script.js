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



function copyArrayAndManipulate(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}

function multiplyBy2(input) {
    return input * 2;
}

let result = copyArrayAndManipulate(array, multiplyBy2);