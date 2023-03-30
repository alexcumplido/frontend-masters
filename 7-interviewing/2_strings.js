{
    // Create a function that reverse the given string
    function reverseString(str){
        let result = "";
        for(let i = str.length-1; i >= 0; i--) {
            result += str[i];
        }
        return result;
    }
    function reverse(str) {
        return str.split('').reverse().join('');
    }
}

{
    // Create a function that removes duplicate substrings in string
    let testString = "This is is a test test string";
    function removeDuplicateStrings(str) {
        const arr = str.split(' ');
        const set = new Set(arr);
        const newStr = [...set].join(" ");
        return newStr;
    }
    removeDuplicateStrings(testString);
}
