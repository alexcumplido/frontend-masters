{
    function printName() {
        console.log('Hey frontend developer!')
    }
    setTimeout(printName, 0);
    for (let i = 0; i < 5000; i++) {
        console.log(i);
    }
    console.log('Me First');
}

// Exercises http://csbin.io/async

{
    /* CHALLENGE 1 */
    function sayHowdy() {
        console.log('Howdy');
    }
    function testMe() {
        setTimeout(sayHowdy, 0);
        console.log('Partnah');
    }
    testMe(); // Partnah first then Howdy
}

{
    /* CHALLENGE 2 */
    function sayWelcome() {
        console.log('welcome')
    }
    function delayedGreet() {
        setTimeout(sayWelcome, 3000);
    }
    delayedGreet(); // should log (after 3 seconds): welcome
}

{
    /* CHALLENGE 3 */
    function sayGoodBye() {
        console.log(`good bye`)
    }
    function helloGoodbye() {
        console.log(`hello`);
        setTimeout(sayGoodBye, 3000);
    }
    helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye
}

{
    /* CHALLENGE 4 */
    let intervalId;
    function clearAsync() {
        clearInterval(intervalId);
    }
    function brokenRecord() {
        intervalId = setInterval(sayWelcome, 2000);
        setTimeout(clearAsync, 10000);
    }
    brokenRecord(); // should log (every second): hi again
}

{
    /* CHALLENGE 5 */
    let intervalId;
    function sayHi() {
        console.log(`hi for now`)
    }
    function clearAsync() {
        clearInterval(intervalId);
    }
    function limitedRepeat() {
        intervalId = setInterval(sayHi, 1000);
        setTimeout(clearAsync, 5000);
    }
    // Uncomment the following line to check your work!
    limitedRepeat(); // should log (every second, for 5 seconds): hi for now
    // }
}
{
    /* CHALLENGE 6 */
    let intervalId;
    function theEnd() {
        console.log('This is the end!');
    }
    function clearAsync() {
        clearInterval(intervalId);
    }
    function everyXsecsForYsecs(func, timeInterval, timeDuration) {
        intervalId = setInterval(func, timeInterval);
        setTimeout(clearAsync, timeDuration);
    }
    everyXsecsForYsecs(theEnd, 2000, 20000); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
}

{
    /*CHALLEGE 7*/
    function delayCounter(target, wait) {
        let time = target;
        function counter() {
            setInterval(function () {
                console.log(`${time++} wait ${wait}`);
            }, 1000);
        }
        return counter;
    }

    const countLogger = delayCounter(3, 1000);
    countLogger();
}

// Exercises http://csbin.io/promises