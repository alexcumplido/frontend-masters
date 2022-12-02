const input = document.getElementById('regexTest');

const str = "Let's have fun with regular expressions. Fun like you never felt before, like 100 times more. A lot of funnnn!";

/expressions/.test(str);
/regular|fun|before/.test(str); //or operator
/fun/i.test(str); // case insensitive
str.match(/fun/ig); // extract matches
str.match(/.un/g); //any character followed by un
str.match(/r[ae]g[iou]l[ae]r/ig); // 
str.match(/[a-z]/ig);
str.match(/[a-z0-9]/ig);

str.match(/[^a-z]/ig); //negation sequence
str.match(/s+/g) // characters >= 1
str.match(/fun*/g); //fu followed by undetermined n characters
str.match(/ex[a-z]*n/); // greedy march
str.match(/ex[a-z]*?i/ig); //lazy match
str.match(/regular.*?b[a-z]*/ig);
/^Let's/.test(str); //start
/fun*!$/.test(str); // end+

str.match(/\w/ig); // a-z0-9 and _
str.match(/\W/ig); // non a-z0-9 and _
str.match(/\d/g); // digits
str.match(/\D/g); // non digits
str.match(/\s/g); // white spaces
str.match(/\s/g); // non spaces

str.match(/expres{1,2}ios/);
str.match(/fun{1,}!/)
str.match(/let's?/ig);

/^[A-Za-z]{2,}\d*$/.test(str); // initial min 2 letters and 2 final numbers

//Lookahead patterns
str.match(/hav(?=e)/); // sequence followed by an e
str.match(/hav(?!e)/); // opposite previous
/(?=\w{5,})(?=\D*\d{2,})/i.test('alex19') //5characters with 2

//Replace and search
"Alexandre Hello".replace(/(\w+)\s(\w+)/, '$2 $1'); //Hello Alexandres
"Hello Alexandre".replace(/^(\w+)/, "Greetings"); //Greetings Alexandres
"Hello Alexandre".replace(/^(\w+)/, "Greetings");

/^(\d+)\s\1\s\1$/.test("30 30 30");
"30 30 30".match(/^(\d+)\s\1\s\1$/)

"   Hello, World!  ".replace(/\s/g, ""); // Change this line
"   Hello, World!  ".replace(/^\s+|\s+$/g, "");

input.addEventListener('change', function (event) {
    let inputValue = event.target.value;
    let testRegEx = /[a-z]/ig.test(inputValue);

    if (testRegEx) {
        regexMatch = inputValue.match(/[a-z]/ig);
        console.log(testRegEx, regexMatch)
    } else {
        console.log(testRegEx);
    }
})