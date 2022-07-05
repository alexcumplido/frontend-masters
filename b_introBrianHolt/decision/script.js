// Statement is one or more expressions
// A programm is a list of statements

// Enable a programm to follow a certain course of action depending on wether a particular condition is met
// Conditions are comparisions between variables and data

// left operand     === !== > >= < <=  && || !     right operand

var myAge = parseInt(prompt("Enter the age please", 30), 10);

if (myAge >= 0 && myAge <= 10) {
    console.log(`Age is: ${myAge}. Between 0 and 10.`)
}

if (!(myAge >= 0 && myAge <= 10)) {
    console.log(`Age is: ${myAge}. NOT between 0 and 10.`)
}

if (myAge >= 80 || myAge <= 10) {
    console.log(`Age is: ${myAge}. Age is equal or greater than 80 OR age is equal or less than 10.`)
}

if ((myAge >= 30 && myAge <= 39) || (myAge >= 80 && myAge <= 89)) {
    console.log(`Age is: ${myAge}. Age between 30 and 39 OR age between 80 and 89.`)
}

if (myAge === 100) {
    console.log('Age is 100');
} else if (myAge === 50) {
    console.log('Age is 50');
} else {
    console.log('Other ages');
}
debugger;

switch (myAge) {
    case 100:
        console.log('Age is 100');
        break;
    case 50:
        console.log('Age is 50');
        break;
    default:
        console.log('Other ages');
        break;
}



