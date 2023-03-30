// Collection of values located via numerical association
// Numerical association: Values are placed in indexed positions
// This index allow us to acces each value
// Each position act as a santard variable array[index] = value;

var array = [30, "Alexandre"];
array[2] = "Bcn";
array[2] = "Barcelona";

var elementIndex0 = array[0];
var elementIndex1 = array[1];
var elementIndex2 = array[2];

console.log(elementIndex0, elementIndex1, elementIndex2);

var firstArray = [0, 1, 2, 3, 5];

console.log(firstArray);

//Basic methods
firstArray.slice(1, 2); //returns an array with elements selected as indexes, last not incuded
firstArray.push(6); // adds piece of data in new last position, returns array new length
firstArray[firstArray.length] = 7; //add piece of data in new last position
firstArray.concat(7) //adds pieca of data in last position but don't modify original, returns new array
firstArray.pop(); // removes last element in array, returns element removed
firstArray.unshift(3); //adds one or more elements to the begginning of the array, returns array new length
firstArray.shift(); // removes first element in array, returns element removed
firstArray.splice(2, 1); // 1st arg. , index element to manipulate, 2nd arg., elements to remove, 3th optional arg. value to insert
firstArray.splice(2, 0, "four"); // remove-replace-add news elements, return an array with deleted elements
firstArray.indexOf(0); // returns index of the first element that matches, -1 if no present
firstArray.join(' '); // returns a new string concatenating all the elements in the array, separated default by commas or a specified separator;

// Array manipulation exercise
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
secretMessage.push('to', 'Program');
secretMessage[secretMessage.indexOf('easily')] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6, 5, 'know');
console.log(secretMessage.join(' '));

//Multidimensional arrays
//Two or more indexes for each element

var personnel = [];
personnel[0] = [];
personnel[0][0] = "Name0";
personnel[0][1] = "Age0";
personnel[0][2] = "Adress0";

personnel[1] = [];
personnel[1][0] = "Name1";
personnel[1][1] = "Age1";
personnel[1][2] = "Adress1";

personnel[2] = [];
personnel[2][0] = "Name2";
personnel[2][1] = "Age2";
personnel[2][2] = "Adress2";

console.table(personnel);

// FIFO First In First Out
{
    // QUEUE is a FIFO data structure
    // First In First Out
    const queue = [];
    queue.push(2);
    queue.push(5); // [2, 5]
    let i = queue.shift()
    alert(i); // I equals 2 
}

// STACK LIFO Last In First Out
{
    // STACK is a LIFO data structure
    // Last In Last Out
    const queue = [];
    queue.push(2);
    queue.push(5); // [2, 5]
    let i = queue.pop()
    alert(i); // I equals 2 
}

