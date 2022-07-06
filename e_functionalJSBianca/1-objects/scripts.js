var person = {};
person.name = "Mrs. White";
var who = person.name;
person.name = "Mr. White";
who;

// Primitive values are stored by value
// Non primitive values are stored by reference