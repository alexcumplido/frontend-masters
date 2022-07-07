// 1. Execute initialization part of the for statement.
// 2. Check test condition. If true, continue; if not, exit the for statement.
// 3. Execute code in the block after the for statement.
// 4. Execute the increment part of the for statement.
// 5. Repeat steps 2 through 4 until the test condition is false.

// Increment counter has dual purpose. Count number of iterations and provides index position in the array.

var degFahren = [212, 32, -459.15];
var degCent = [];

for (let forCounter = 0; forCounter < degFahren.length; forCounter++) {
    degCent[forCounter] = 5 / 9 * (degFahren[forCounter] - 32);
}

console.log(degCent);

let myCities = ["Barcelona", "Madrid", "London"];

for (let index in myCities) {
    console.log(myCities[index]);
}

for (let i = 0; i < 24; i++) {
    for (let j = 1; j < 60; j++) {
        if (i === 7 && j === 15) {
            alert(`Wake up! It's ${i}:${j}.`);
        }
    }
}

for (let loopCounter = 0; loopCounter < "Alexandre".length; loopCounter++) {
    console.log("Alexandre"[loopCounter]);
}

for (let i = "Alexandre".length; i >= 0; i--) {
    console.log("Alexandre"[i]);
}

const beatles = ["john", "george", "ringo", "paul"];
for (let i = beatles.length; i > 0; i--) {
    console.log(i);
}

for (let i = 1; i <= 100; i++) {
    let output = ""
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
}


const arrayA = ['Axel', 'Mery', 'Joe', 'Rebeca'];
const arrayB = ['Spencer', 'Joe', 'Mery'];
const mutualData = [];

for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
        if (arrayA[i] === arrayB[j]) {
            mutualData.push(arrayA[i]);
        }
    }
}
console.log(mutualData);

/*
Whales double their e‘s and the u‘s in their language.
Write an if statement that checks if each letter in the input string is equal to 'e'. If so, use the .push() method to add input[i] to the resultArray.
Note: This statement belongs before the inner for loop block inside the outer for loop. This is because you only want to perform this check once for every letter in the input.
Next, you want to double the letter u.
*/

let input = "turpentine and turtles";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
    }

    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(vowels[j]);
        }
    }
}
console.log(resultArray.join('').toUpperCase());

