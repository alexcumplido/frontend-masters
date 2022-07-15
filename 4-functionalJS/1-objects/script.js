
{
    // Objects
    var personObject = {};
    personObject.name = "Mrs. White";
    var who = personObject.name; // What is storing a value by value ?
    personObject.name = "Mr. White"; // What does it mean storing a value by reference? 
    // The value of "Mrs. White" goes garbage collected since "Mr. White is the new value referenced for the property person.name"
    who.story // Undefined 

    // Arrays
    var personArray = [];
    personArray.name = "Mrs. White";
    var who = personArray.name; // Because arrays are objects we can set properties inside of them
    let typeArray = (typeof personArray === "array"); // What is gonna return typeArray and why ?
    let typeObject = (typeof personArray === "object"); // true
    let isArray = Array.isArray(personArray);
    let objectKeys = Object.keys(personArray);

    personArray[0] = "I was not in ..."; // 0 is being stringify
    try {
        personArray[statement] = "I would never!" // What happen when JS parses this line ?
    } catch {
        console.log(typeof statement)
    }
    var plea = "wouldShe";
    personArray[plea] = "I would never";
    //JS check for varialble plea in the scope and get the variable plea that holds a copy of the string value "wouldShee"
    //A new property is set with key "wouldShea" and value "I would never"
}

// Object array Rules

// What type of value is arra ? 
// Can access a property of an object without previous definition ?
// In what coerces dot notation that does not bracket notation ?
// What is the difference between dot and bracket notation ?

// What is the main difference between arrays and the other type of objects ?

// The main difference between arrays and others objects is that an array has the property .length , computed as you add numerical indexes
// and numerical idexes are different than properties on an array because an array captures that and increment the length



{
    // Create an object an array that represents a clue game
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

{
    //Prevention of object mutation via Object.freeze
    let objectFreezed = {
        prop1: "Alex",
        prop2: "Laura"
    }
    Object.freeze(objectFreezed);
    objectFreezed.prop1 = "Alexandre";
}

// What is an object ? How data is stored in it ?
// How do you add a property with a key that contains special characters ?
// How do you add a property whose key and value are stored in different variables ?

// ES6 Destructuring:
// How do you pullout values from objects declaring a variable and reference to them

const [first, second, third] = [true, false];

{
    let confidential = {
        name: "Rusty",
        room: "kitchen",
        weapon: "candlestick",
    }
    let name = confidential.name;
    let room = confidential.room;
    let weapon = confidential.weapon;

    {
        // What technique is more efficient ?
        let { weapon, name, room } = confidential;
    }

    {
        //How to iterate over an object keys ?
        for (const key in confidential) {
            console.log(`${key}: ${confidential.key}`)
        }
    }
}

{
    let [a, b] = [1, 2];
    //=> 1 2
}

{
    // How do we omit certain value ?
    let [a, , b] = [1, 2, 3]
    //=> 1 3
}

{
    // What happens when combine with spread operator ?
    let [a, ...b] = [1, 2, 3]
    //=> 1 [2,3]
}

{
    // Swap variables easily without a temporary variables
    let a = 1
    let b = 2;
    [b, a] = [a, b];
    console.log(`Now: a: ${a}, b: ${b}`)
}

{
    //Before
    let a = 1
    let b = 2;
    let temporary = a;
    a = b;
    b = temporary;
}