
// Exercises http://csbin.io/async

function printName() {
    console.log('Hey frontend developer!')
}

debugger;
setTimeout(printName, 4000);

for (let i = 0; i < 5000; i++) {
    console.log(i);
}

console.log('Me First');

/* CHALLENGE 1 */
function sayHowdy() {
    console.log('Howdy');
}

function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
}

//testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */
function delayedGreet() {
    setTimeout(function () {
        console.log('welcome');
    }, 3000);
}
// delayedGreet() // should log (after 3 seconds): welcome

/* CHALLENGE 3 */
function helloGoodbye() {
    console.log('hello');
    setTimeout(function () {
        console.log('good bye');
    }, 2000);
}
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */
function brokenRecord() {
    setInterval(function () {
        console.log('hi');
    }, 1000)
}
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */
function limitedRepeat() {
    const intervalId = setInterval(function () {
        console.log('hi again');
    }, 1000);

    setTimeout(function () {
        clearInterval(intervalId)
    }, 5000)
}
//limitedRepeat(); // should log (every second, for 5 seconds): hi for now

function display(data) {
    console.log(data)
}

const futureData = fetch('https://jsonplaceholder.typicode.com/todos/1');
futureData.then(display);