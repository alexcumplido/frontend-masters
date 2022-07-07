// Objects
{
    var personObject = {};
    personObject.name = "Mrs. White";
    var who = personObject.name; // Storing a value by value
    personObject.name = "Mr. White";
    // Storing a value by reference 
    // The value of "Mrs. White" goes garbage collected since "Mr. White is the new value referenced for the property perosn.name"
    who.story // Undefined 

    // Arrays
    var personArray = [];
    personArray.name = "Mrs. White";
    var who = personArray.name; // Because arrays are objects we can set properties inside of them
    let typeArray = (typeof personArray === "array");
    let typeObject = (typeof personArray === "object");
    let isArray = Array.isArray(personArray);
    let objectKeys = Object.keys(personArray);

    personArray[0] = "I was not in ..."; // 0 is being stringify
    try {
        personArray[statement] = "I would never!" // JS parses this line and does not find an string value for plea
    } catch {
        console.log(typeof statement)
    }
    var plea = "wouldShe";
    personArray[plea] = "I would never";
    //JS check for varialble plea in the scope and get the variable plea that holds a copy of the string value "wouldShee"
    //A new property is set with key "wouldShea" and value "I would never"
}

// Object array Rules
// Array is a type of object with attached methods
// Before accessing a property have to be defined
// Dot notation coerces into a string when bracket notation does not
// Does notation can be used when passed an string or a usual character

// The main difference between arrays and others objects is that an array has the property .length
// wich is computed as you add numerical indexes
// and numerical idexes are different than properties on an array because an array captures that and increment the length

// Create an object an array that represents a clue game
// Values: Characters, weapons, rooms, special card with character, room, weapon

{
    let game = {};
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
}


// What is an object ?
// A non primitive value that can hold any type of value and has methods attached to it.
// Store data in a syntax of properties and values, "keys" = "values".


// What is the difference between dot and bracket notation ?
// Dot notationa accepts only a string type value and save us tipping time.

// How do you add a property with a key that contains special characters ?
// Through bracket notation wrapper in question marks

// How do you add a property whose key and value are stored in different variables ?
// Using dot notation in case is a pure string or bracket notation

// object[property] = value;


// ES6 Destructuring
// Declare a variable and reference to them

const [first, second, third] = [true, false]


let objectFreezed = {
    prop1: "Alex",
    prop2: "Laura"
}

Object.freeze(objectFreezed);
objectFreezed.prop1 = "Alexandre";



let confidential = {
    name: "Rusty",
    room: "kitchen",
    weapon: "candlestick",
}
{
    //Destructuring save us time
    let { weapon, name, room } = confidential;
}

{
    let name = confidential.name;
    let room = confidential.room;
    let weapon = confidential.weapon;
}

//How to iterate over an object keys ? 
for (const key in confidential) {
    console.log(`${key}: ${confidential.key}`)
}

//Destructuring an array
{
    let [a, b] = [1, 2];
    //=> 1 2
}

{
    //Omit certain values
    let [a, , b] = [1, 2, 3]
    //=> 1 3
}

{
    // Combine with spread/rest operator (accumulates the rest of the values)
    let [a, ...b] = [1, 2, 3]
    //=> 1 [2,3]
}

{
    // Swap variables easily without a temporary variables
    // Before
    let a = 1, b = 2;
    [b, a] = [a, b];
    console.log(`Now: a: ${a}, b: ${b}`)
}

{
    let a = 1, b = 2;
    let temporary = a;
    a = b;
    b = temporary;
    console.log([b, a] = [a, b])

}


