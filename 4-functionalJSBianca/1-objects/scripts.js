// // Objects
// var person = {};
// person.name = "Mrs. White";
// var who = person.name; // Storing a value by value
// person.name = "Mr. White"; // Storing a value by reference
// who.story // Undefined

// // Arrays //
// var person = [];
// person.name = "Mrs. White";
// var who = person.name; // Because arrays are objects we can set properties inside of them
// let arrayTypeOf = (typeof person === "array");
// arrayTypeOf = (typeof person === "object");
// let arrayIsTest = Array.isArray(person);
// let objectKeys = Object.keys(person);

// person[0] = "I was not in ..."; // 0 is being stringify

// // person[plea] = "I would never!" // JS parses this line and does not find an string value for plea

// var plea = "wouldShe";

// person[plea] = "I would never";
// //JS check for varialble plea in the scope and get the string value "wouldShee"
// //A new property is set with key "wouldShea" and value "I would never"

// Create an object an array that represents a clue game
// Values: Characters, weapons, rooms, special card with character, room, weapon


var game = {};

game['weapons'] = [
    {
        type: 'lasers',
        location: 'lab'
    },
    {
        type: 'angry cats',
        location: 'entrance'
    },
    {
        type: 'dish soap',
        location: 'kitchen'
    },

]

game.name = []
game.name[0] = "Bianca";
game.name[1] = "Marc";
game.name[2] = "Brian";


// What is an object ?
// An object is a non primitive value.
// Wich means is a value that has attached methods and can hold data in a syntaxis of key-value pairs.

// What is the difference between dot and bracket notation ?
// Dot notationa accepts only a string type value and save us tipping time.

// How do you add a property with a key that contains special characters ?
// Through bracket notation wrapper in question marks

// How do you add a property whose key and value are stored in different variables ?
// Using dot notation in case is a pure string or bracket notation

// object[property] = value;


// // How do we loop through objects to access the values ?
// for (const key in object) {
//     console.log(`${key}: ${user.key}`)
// }

// let object = {
//     first: 0, second: 1
// }

// let { second, first } = object;


const confidential = {
    name: "Rusty",
    room: "kitchen",
    weapon: "candlestick"
}

confidential.room;
console.log(confidential.weapon)

let { room, weapon } = confidential;

//Destructuring an array
let [firstNumber, secondNumber] = [1, 2];
//=> 1 2

//Omit certain values
let [one, , three] = [1, 2, 3]
//=> 1 3

// Combine with spread/rest operator (accumulates the rest of the values)
let [first, ...others] = [1, 2, 3]
//=> 1 [2,3]

// Swap variables easily without a temporary variables
// Before
var a = 1, b = 2;
console.log(a, b)
// var temporary = a;
// a = b;
// b = temporary;

console.log([b, a] = [a, b])

