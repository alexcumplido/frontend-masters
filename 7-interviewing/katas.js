8 kyu
The Wide-Mouthed frog!
JavaScript:
const mouthSize = (animal) => (animal.toLowerCase() === 'alligator') ? 'small' : 'wide';
5 months agoRefactor
function mouthSize(animal) {
  return (animal === 'alligator') ? 'small' : 'wide';
}
8 months agoRefactorDiscuss
8 kyu
Grasshopper - Summation
JavaScript:
var summation = function (number) {
  let summation = 0;
  let iteration = 0;
  while (iteration <= number) {
    summation += iteration;
    iteration++;
  }
  return summation;
}
8 months agoRefactorDiscuss
8 kyu
Calculate average
JavaScript:
function find_average(array) {
  let average = 0;
  function _forEach (list, callback){
    if(Array.isArray(list)){
      for(let i = 0; i < list.length; i++){
        callback(list[i], i, list);
      }
    }else {
      for(let key in list){
        callback(list[key], key, list);
      }
    }
  }
  _forEach(array, function(element, index, list){
    average += element;
  });
  average = (average/array.length) || 0;
  return average;
}
8 months agoRefactorDiscuss
8 kyu
MakeUpperCase
JavaScript:
function makeUpperCase(string) {
  return string.toUpperCase();
}
8 months agoRefactorDiscuss
8 kyu
Reversed sequence
JavaScript:
const reverseSeq = n => {
  let sequence = [];
  let currentNum = n;
  while(sequence.length < n){
    sequence.push(currentNum);
    currentNum--;
  }
  return sequence;
};
8 months agoRefactorDiscuss
7 kyu
Shortest Word
JavaScript:
function findShort(str){
  let arrayStr = str.split(" ").sort(function(firstEl, secondEl){
    if(firstEl.length > secondEl.length) {
      return 1;
    } else if(secondEl.length > firstEl.length) {
      return -1;
    } else {
      return 0;
    }
  });
  return arrayStr[0].length;
}
8 months agoRefactorDiscuss
function findShort(str){
  let arrayStr = str.split(" ").sort(function(firstEl, secondEl){
    if(firstEl.length > secondEl.length) {
      return 1;
    } else if(secondEl.length > firstEl.length) {
      return -1;
    } else {
      return 0;
    }
  });
  let shortLength = arrayStr[0].length
  return shortLength;
}
8 months agoRefactorDiscuss
8 kyu
Template Strings
JavaScript:
var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`;
}
8 months agoRefactorDiscuss
8 kyu
Fake Binary
JavaScript:
function fakeBin(string) {
  
  /*What map methods performs under the hood*/
  function _map(list, callback) {
    let storage = [];
    if(Array.isArray(list)) {
      for (let i = 0; i < list.length; i++){
        storage.push(callback(list[i], i, list));
      }
    } else {
      for(let key in list){
        storage.push(callback(list[key], key, list));
      }
    }
    return storage; 
  }
  
  /*Apply map*/
  let arrayStr = string.split("");
  let fakeBinary = _map(arrayStr, function(element, index, list){
    return (element < 5)? '0' : '1';
  })
  return fakeBinary.join("");
}
8 months agoRefactorDiscuss
function fakeBin(string) {
  let fakeBinary = '';
  for(let i = 0; i < string.length; i++){
    if(string[i] < 5) fakeBinary += '0';
    if(string[i] >= 5) fakeBinary += '1';
  }
  return fakeBinary;
}
8 months agoRefactorDiscuss
8 kyu
Reverse List Order
JavaScript:
function reverseList(list) {
  let reversedArr = [];
  for(let i = list.length-1; i >= 0; i--) {
    reversedArr.push(list[i]);
  }
  return reversedArr;
}
8 months agoRefactorDiscuss
RetiredFilling an array (part 1)
JavaScript:
function arr (n) {
  let array = [];
  let counter = 0;
  while (array.length < n) {
    array.push(counter);
    counter++;
  }
  return array;
}
8 months agoRefactorDiscuss
8 kyu
No Loops 2 - You only need one
JavaScript:
function check(array, value){
  return array.includes(value);
};
8 months agoRefactor
8 kyu
Printing Array elements with Comma delimiters
JavaScript:
function printArray(array){
  return array.join(",");
}
8 months agoRefactorDiscuss
8 kyu
Grasshopper - Array Mean
JavaScript:
var findAverage = function (nums) {
  let mean = 0;
  for(let i = 0; i < nums.length; i++) {
    mean+= nums[i];
  }
  return mean / nums.length;
}
8 months agoRefactorDiscuss
8 kyu
A Needle in the Haystack
JavaScript:
function findNeedle(haystack) {
  let idxNeedle;
  haystack.forEach(function(element, index, list){
    if(element === "needle") idxNeedle = index;
  })
  return `found the needle at position ${idxNeedle}`;
}
9 months agoRefactorDiscuss
RetiredrepeatIt
JavaScript:
function repeatIt(str, repetitions) {
  if(typeof str !== 'string') return "Not a string";
  let repeatedStr = "";
  for (let i = 0; i < repetitions; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}
9 months agoRefactorDiscuss
8 kyu
Reversing Words in a String
JavaScript:
function reverse(string){
  let arrStr = string.trim().split(" ");
  let strReverse = arrStr.reverse().join(" ");
  return strReverse;
}
9 months agoRefactorDiscuss
8 kyu
The 'if' function
JavaScript:
function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}
9 months agoRefactorDiscuss
8 kyu
ES6 string addition
JavaScript:
function joinStrings(string1, string2){
   return `${string1} ${string2}`;
}
9 months agoRefactorDiscuss
8 kyu
Get number from string
JavaScript:
function getNumberFromString(string) {
  let strNumbers = string.replace(/\s/g, '');
  strNumbers = strNumbers.split("").filter(function(element, index, list){
    if(element == Number(element)) return element;
  });
  return Number(strNumbers.join(""));
}
9 months agoRefactorDiscuss
function getNumberFromString(string) {
  let strNumbers = string.replace(/\s/g, '');
  strNumbers = strNumbers.split("").filter(function(element, index, list){
    if(element == Number(element)) return element;
  });
  strNumbers = Number(strNumbers.join(""));
  return strNumbers;
}
9 months agoRefactorDiscuss
8 kyu
Simple Comparison?
JavaScript:
function add(num, str){
  return num == str;
}
9 months agoRefactorDiscuss
8 kyu
Is he gonna survive?
JavaScript:
function hero(bullets, dragons){
  let survive = (bullets >= (dragons * 2)) ? true : false;
  return survive;
}
9 months agoRefactorDiscuss
8 kyu
Count the Monkeys!
JavaScript:
function monkeyCount(maxMonkeys) {
  let monkeys = [];
  while(monkeys.length < maxMonkeys) {
    monkeys.push(monkeys.length + 1);
  }
  return monkeys;
}
9 months agoRefactorDiscuss
function monkeyCount(monkeys) {
  let monkeyCount = [];
  let count = 0;
  while(monkeyCount.length < monkeys) {
    count++;
    monkeyCount.push(count);
  }
  return monkeyCount;
}
9 months agoRefactorDiscuss
8 kyu
Add Length
JavaScript:
function addLength(str) {
  let stringsArray = str.split(" ");
  //_map method implemented under the hood
  let _map = function (list, callback) {
    let storage = [];
    for (let i = 0; i <list.length; i++) {
      storage.push(callback(list[i], i, list))
    }
    return storage;
  }
  
  stringsArray = _map(stringsArray, function (element, index, list){
    return `${element} ${element.length}`;
  });
  return stringsArray;
};
9 months agoRefactorDiscuss
8 kyu
Welcome to the City
JavaScript:
function sayHello( name, city, state ) {
  let strName = name.join(" ");
  let strWelcome = 
      (`Hello, ${strName}! Welcome to ${city}, ${state}!`);
  return strWelcome;
}
9 months agoRefactorDiscuss
8 kyu
Basic Training: Add item to an Array
JavaScript:
websites[0] = "codewars";
9 months agoRefactorDiscuss
8 kyu
Filter out the geese
JavaScript:
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let filteredGeese = birds.filter(function (element, index, list) {
    let repeated = false;
    geese.forEach( function (item) { 
      if (item === element) repeated = true; 
    });
    if(repeated === false) return element;
  });                
  return filteredGeese;
}
9 months agoRefactorDiscuss
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let filteredGeese = birds.filter(function (element, index, list) {
    let repeated = false;
    geese.forEach( function (item) { 
      if (item === element) repeated = true; 
    })

    if(repeated === false) return element;
  });                
  return filteredGeese;
}
9 months agoRefactor
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
    
  let filteredGeese = birds.filter(function (element, index, list) {
    let repeated = false;
    
    geese.forEach( function (item) { 
      if (item === element) repeated = true; 
    })

    if(repeated === false) return element;

  });
   
                            
  return filteredGeese;
}
9 months agoRefactor
8 kyu
Removing Elements
JavaScript:
function removeEveryOther(array){
  let _filter = function (list, callback) {
    let storage = [];
    for (let i = 0; i < list.length; i++) {
      if(callback(list[i], i, list)) {
        storage.push(list[i]);
      }
    }
    return storage;
  }
  
  let arrayFiltered = _filter(array, function (element, index, list){
    return index % 2 === 0;
  })

 return arrayFiltered; 
}
  
9 months agoRefactorDiscuss
8 kyu
Count of positives / sum of negatives
JavaScript:
function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) return [];
  let positive = 0;
  let negative = 0; 
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positive++;
    } else {
      negative += input[i];
    }
  }
  return [positive, negative];
}
9 months agoRefactor
function countPositivesSumNegatives(input) {
  if (input === null) return [];
  let array = [0, 0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      array[0] += 1;
    } else {
      array[1] += input[i];
    }
  }
  if(array[0] === 0 && array[1] === 0) return [];
  return array;
}
9 months agoRefactorDiscuss
function countPositivesSumNegatives(input) {
  let array = [0, 0];  
  if (input === null || input === []) return [ ];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      array[0] += 1;
    } else {
      array[1] += input[i]
    }
  }
  if(array[0] === 0 && array[1] === 0) return []
  return array;
}
9 months agoRefactorDiscuss
8 kyu
If you can't sleep, just count sheep!!
JavaScript:
var countSheep = function (number){
  let string = '';
  for (let i = 1; i <= number; i++) {
    string += `${i} sheep...`;
  }
  return string;
}
9 months agoRefactorDiscuss
8 kyu
Convert a String to a Number!
JavaScript:
const stringToNumber = function(string){
  return Number.parseInt(string) || null;
}
9 months agoRefactorDiscuss
8 kyu
Reversed Strings
JavaScript:
function solution(str){
  let reversedStr = '';
  for (let i = str.length-1; i >= 0; i--) {
    reversedStr = reversedStr.concat("",str[i]);
  }
  return reversedStr;
}
9 months agoRefactorDiscuss
8 kyu
Remove First and Last Character Part Two
JavaScript:
function array(string){
  let sequenceStr = string.split(",");
  sequenceStr = sequenceStr.slice(1, -1);
  sequenceStr = sequenceStr.join(" ");
  return sequenceStr || null;
}
9 months agoRefactorDiscuss
function array(string){
  let sequenceStr = string.split(",");
  sequenceStr.shift();
  sequenceStr.pop();
  sequenceStr = sequenceStr.join(" ");
  return sequenceStr || null;
}
9 months agoRefactorDiscuss
8 kyu
You only need one - Beginner
JavaScript:
function check(array, value) {
  let valueExist = array.some(function(element, index, list){
    return element === value;
  })
  return valueExist;
}
9 months agoRefactorDiscuss
function check(array, value) {
  let valueExist = array.includes(value)
  return valueExist;
}
9 months agoRefactorDiscuss
8 kyu
Get the mean of an array
JavaScript:
function getAverage(marks){
  let mean = 0;
  marks.forEach(function (element, index, list){
    mean += element;
  });
  return Math.floor((mean/marks.length));
}
9 months agoRefactorDiscuss
function getAverage(marks){
  let mean = 0;
  marks.forEach(function (element, index, list){
    mean += Math.floor(element);
  });
  return Math.floor((mean/marks.length));
}
9 months agoRefactorDiscuss
8 kyu
Abbreviate a Two Word Name
JavaScript:
function abbrevName(name){
  let arrayNames = name.split(" ");
  let initialNames = arrayNames.map(function (element, index, list){
    return element.charAt(0).toUpperCase();
  });
  return `${initialNames[0]}.${initialNames[1]}`
}
9 months agoRefactorDiscuss
function abbrevName(name){
  let arrayNames = name.toUpperCase().split(" ");
  let [firstName, lastName] = arrayNames;
  return `${firstName[0]}.${lastName[0]}`
}
9 months agoRefactor
function abbrevName(name){
  let arrayNames = name.toUpperCase().split(" ");
  let [firstName, lastName] = arrayNames;
  return `${firstName.charAt(0)}.${lastName.charAt(0)}`
}
9 months agoRefactor
function abbrevName(name){
  let arrayNames = name.toUpperCase().split(" ");
  let [firstName, lastName] = arrayNames;
  let firstNameInitial = firstName.charAt(0);
  let lastNameInitial = lastName.charAt(0);
  return `${firstNameInitial}.${lastNameInitial}`
}
9 months agoRefactorDiscuss
function abbrevName(name){
  let arrayNames = name.toUpperCase().split(" ");
  let [firstName, lastName] = arrayNames;
  let firstNameInitial = firstName.charAt(0);
  let lastNameInitial = lastName.charAt(0);
  let initials = `${firstNameInitial}.${lastNameInitial}`
  return initials;
}
9 months agoRefactorDiscuss
8 kyu
Remove First and Last Character
JavaScript:
function removeChar(str){
  let subStr = str.substring(1, str.length-1)
  return subStr;
};
9 months agoRefactorDiscuss
8 kyu
Reversed Words
JavaScript:
function reverseWords(str){
  let arrStr = str.split(" ");
  let arrReversed = arrStr.reverse();
  let strReversed = arrReversed.join(" ");
  return strReversed;
}
9 months agoRefactorDiscuss
8 kyu
Convert number to reversed array of digits
JavaScript:
function digitize(num) {
  let arrayNum = num.toString().split('');
  let numParsed = arrayNum.map(function (element, index, list){
    return Number(element);
  });
  let numReversed = numParsed.reverse();
  return numReversed;
}
9 months agoRefactorDiscuss
function digitize(num) {
  let arrayNum = num.toString().split('');
  let inverseNum = arrayNum.map(function (element, index, list){
    return Number(element);
  });
  inverseNum = inverseNum.reverse();
  return inverseNum;
}

  
 
 
9 months agoRefactorDiscuss
8 kyu
Sentence Smash
JavaScript:
function smash (words) {
    let str = words.join(" ");
    let strSanitized = str.toLowerCase().trim();
    return strSanitized;
};
9 months agoRefactorDiscuss
8 kyu
Define a card suit
JavaScript:
function defineSuit(card) {
  switch(true || false) {
      case card.includes('♣'):
        return 'clubs';
        break;
      case card.includes('♦'): 
        return 'diamonds';
        break;
      case card.includes('♥'):
        return 'hearts';
        break;
      case card.includes('♠'):
        return 'spades';
        break;
      default:
        return 'Please, insert a valid card';
        break;
  }
}
9 months agoRefactorDiscuss
function defineSuit(card) {
  let cardType;
  switch(true || false) {
      case card.includes('♣'):
        cardType = 'clubs';
        break;
      case card.includes('♦'): 
        cardType = 'diamonds';
        break;
      case card.includes('♥'):
        cardType = 'hearts';
        break;
      case card.includes('♠'):
        cardType = 'spades';
        break;
      default:
        cardType = 'Please, insert a valid card';
        break;
  }
  return cardType;
}
9 months agoRefactorDiscuss
8 kyu
Name Shuffler
JavaScript:
function nameShuffler(string){
  let arrOfStrings = string.split(" ").reverse();
  let fullName = arrOfStrings.join(" ");
  return fullName;
}
9 months agoRefactorDiscuss
8 kyu
Well of Ideas - Easy Version
JavaScript:
function well(kataIdeas){
  //What filter does under the hood
  function _filter(list, callback) {
    let storage = [];
    for(let i = 0; i <list.length; i++) {
      if(callback(list[i], i, list)) {
         storage.push(list[i]);
      }
    }
    return storage;
  }
  
  let test = 'Fail!';
  
  let ideas = _filter(kataIdeas, function(element, index, list){
    return element === 'good';
  })
  
  if(ideas.length > 0 && ideas.length < 3) test = 'Publish!'
  if(ideas.length > 2) test = 'I smell a series!'
  
  return test;
}
9 months agoRefactorDiscuss
function well(kataIdeas){
  let passTest = 'Fail!';
  let goodIdeas = kataIdeas.filter(function (element, index, list) {
    return list[index] === 'good';
  })
  if(goodIdeas.length === 1 || goodIdeas.length === 2) passTest = 'Publish!'
  if(goodIdeas.length > 2) passTest = 'I smell a series!'
  return passTest;
}
9 months agoRefactorDiscuss
8 kyu
Sum Arrays
JavaScript:
function sum (numbers) {
  if(!numbers) return 0;
  let sum = 0;
  numbers.forEach((element) => sum += element);
  return sum;
};
9 months agoRefactorDiscuss
function sum (numbers) {
  let sum = 0;
  numbers.forEach((element) => sum += element);
  sum = (sum) ? sum : 0;
  return sum;
};
9 months agoRefactorDiscuss
// Sum Numbers
function sum (numbers) {
    "use strict";
  let sum = 0;
  /*What the forEach does under the hood*/
    const _forEach = function (list, callback) {
      for (let i = 0; i < list.length; i++) {
        callback(list[i], i, list);
      }
    }
    _forEach(numbers, function (element, index, list){
      sum += element;
    })
  
  sum = (sum) ? sum : 0;
  
  return parseFloat(sum);
};
9 months agoRefactorDiscuss
8 kyu
Grasshopper - Personalized Message
JavaScript:
function greet (name, owner) {
  let user = (name == owner) ? 'boss' : 'guest';
  let greeting = `Hello ${user}`;
  return greeting;
}
9 months agoRefactor
function greet (name, owner) {
  return (name == owner) ? 'Hello boss' : 'Hello guest';
}
9 months agoRefactor
function greet (name, owner) {
  let greeting = '';
  if (name == owner) {
    greeting += 'Hello boss'
  } else {
    greeting += 'Hello guest'
  }
  return greeting;
}
10 months agoRefactorDiscuss
8 kyu
Convert a string to an array
JavaScript:
function stringToArray(string){
  let array = string.split(" ");
  return array;
}
9 months agoRefactorDiscuss
8 kyu
Find the position!
JavaScript:
function position(letter){
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n', 'o',
                  'p','q','r','s','t','u','v','w','x','y','z'];
  let position = alphabet.indexOf(letter)+1;
  return`Position of alphabet: ${position}`;
}
9 months agoRefactor
function position(letter){
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n', 'o',
                  'p','q','r','s','t','u','v','w','x','y','z'];
  let position = alphabet.indexOf(letter)+1;
  return`Position of alphabet: ${position}`;
}
9 months agoRefactorDiscuss
8 kyu
Opposite number
JavaScript:
function opposite(number) {
  return -number;
}
9 months agoRefactorDiscuss
8 kyu
Counting sheep...
JavaScript:
function countSheeps(arrayOfSheep) {
  //What the filter does under the hood.
  function _filter (list, callback) {
    let arrStorage =  [];
    for (let i = 0; i < list.length; i++){
      if(callback(list[i], i, list)===true) {
         arrStorage.push(list[i]);
       }
    }
    return arrStorage;
  }
  
  let sheepPresent = _filter(arrayOfSheep, function (element, index, list){
    return element === true;
  });
    
  return sheepPresent.length;
}
9 months agoRefactorDiscuss
8 kyu
String repeat
JavaScript:
function repeatStr (num, str) {
  let strRepeated = '';
  for (let i = 0; i < num; i++) {
    strRepeated += str;
  }
  return strRepeated;
}
9 months agoRefactorDiscuss
8 kyu
String Templates - Bug Fixing #5
JavaScript:
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}
9 months agoRefactorDiscuss
8 kyu
Quarter of the year
JavaScript:
const quarterOf = (month) => {
  if (month > 0 && month < 4) return 1
  if (month > 3 && month < 7) return 2
  if (month > 6 && month < 10) return 3
  if (month > 9 && month < 13) return 4
}
9 months agoRefactorDiscuss
8 kyu
Will there be enough space?
JavaScript:
function enough(cap, on, wait) {
  let needWait;
  let freeSeats = cap - on;
  if (freeSeats >= wait) {
    needWait = 0;
  } else {
    needWait = wait - freeSeats;
  }
  return needWait;
}
9 months agoRefactorDiscuss
function enough(cap, on, wait) {
  let cannotEnter;
  let freeSeats = cap - on;
  if (freeSeats >= wait) {
    cannotEnter = 0;
  } else {
    cannotEnter = wait - freeSeats;
  }
  return cannotEnter;
}
9 months agoRefactorDiscuss
function enough(cap, on, wait) {
  let cannotEnter;
  let freeSeats = cap - on;
  if (wait < freeSeats) {
    cannotEnter = 0;
  } else {
    cannotEnter = wait - freeSeats;
  }
  return cannotEnter;
}
9 months agoRefactorDiscuss
function enough(cap, on, wait) {
    let cannotEnter;
    let freeSeats = cap - on;
    
    if (wait <= freeSeats) {
      cannotEnter = 0;
    } else {
      cannotEnter = wait - freeSeats;
    }
  
  return cannotEnter;
}
9 months agoRefactorDiscuss
8 kyu
Invert values
JavaScript:
function invert(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = (array[i]<0) ? Math.abs(array[i]) : -Math.abs(array[i]);
  } 
   return array;
}
9 months agoRefactorDiscuss
function invert(array) {
  let invertVal = array.map(function (element, index, list) {
    return -element;
  });
  return invertVal;
}
9 months agoRefactorDiscuss
function invert(array) {
   for (let i = 0; i < array.length; i++) {
     array[i] = -array[i];
   }
  return array;
}
9 months agoRefactor
function invert(array) {
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    array[i] = (num<0) ? Math.abs(num) : -Math.abs(num);
  } 
   return array;
}
9 months agoRefactorDiscuss
8 kyu
Capitalization and Mutability
JavaScript:
function capitalizeWord(word) {
  let strCap = word.charAt(0).toUpperCase();
  let strLower = word.slice(1).toLowerCase();
  return `${strCap}${strLower}`;
}
9 months agoRefactorDiscuss
function capitalizeWord(word) {
  let strCapital = word[0].toUpperCase();
  let strLower = word.slice(1).toLowerCase();
  return strCapital+strLower;
}
9 months agoRefactorDiscuss
8 kyu
Calculate BMI
JavaScript:
function bmi(weight, height) {
    let range = '';
    let bmi = weight / Math.pow(height, 2);
    if (bmi <= 18.5) {
        range = "Underweight";
    } else if (bmi <= 25.0) {
        range = "Normal";
    } else if (bmi <= 30.0) {
        range = "Overweight"
    } else if (bmi > 30) {
        range = "Obese"
    }
    return range;
}
9 months agoRefactorDiscuss
function bmi(weight, height) {
    let bmiLevel = '';
    let bmiCalc = weight / Math.pow(height, 2);
    if (bmiCalc <= 18.5) {
        bmiLevel = "Underweight";
    } else if (bmiCalc <= 25.0) {
        bmiLevel = "Normal";
    } else if (bmiCalc <= 30.0) {
        bmiLevel = "Overweight"
    } else if (bmiCalc > 30) {
        bmiLevel = "Obese"
    }
    return bmiLevel;
}
9 months agoRefactorDiscuss
8 kyu
isReallyNaN
JavaScript:
const isReallyNaN = (val) => {
  let checkNaN = Number.isNaN(val);
  return checkNaN;
};
9 months agoRefactorDiscuss
8 kyu
Do I get a bonus?
JavaScript:
function bonusTime(salary, bonus) {
  salary = (bonus) ? salary * 10 : salary;
  return `\u00A3${salary}`;
}
9 months agoRefactorDiscuss
function bonusTime(salary, bonus) {
  let payCheck = (bonus) ? salary * 10 : salary;
  let figure = `\u00A3${payCheck}`;
  return figure;
}
9 months agoRefactorDiscuss
8 kyu
Are You Playing Banjo?
JavaScript:
function areYouPlayingBanjo(name) {
  let doesPlay = 'does not play banjo';
    if (name.charAt(0).toLowerCase() === `r`) {
      doesPlay = 'plays banjo';
    } 
  return `${name} ${doesPlay}`;
}
9 months agoRefactorDiscuss
8 kyu
Volume of a Cuboid
JavaScript:
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
9 months agoRefactor
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    let volumeFormula = length * width * height;
    return volumeFormula;
  }
}
9 months agoRefactorDiscuss
8 kyu
Convert a Boolean to a String
JavaScript:
function booleanToString(boolean){
  let strBoolean = (boolean) ? 'true': 'false';
  return strBoolean;
}
9 months agoRefactorDiscuss
8 kyu
L1: Set Alarm
JavaScript:
function setAlarm(employed, vacation){
  let alarm = (employed && !vacation) ? true : false;
  return alarm;
}
9 months agoRefactor
function setAlarm(employed, vacation){
  let alarm = false;
  if (employed == true && vacation == false) alarm = true;
  return alarm;
}
9 months agoRefactorDiscuss
8 kyu
Remove String Spaces
JavaScript:
function noSpace(string){
  return string.split(' ').join('');
}
9 months agoRefactorDiscuss
8 kyu
Convert boolean values to strings 'Yes' or 'No'.
JavaScript:
const boolToWord = (boolean) => (boolean) ? "Yes" : "No";
9 months agoRefactor
function boolToWord( boolean ){
  return (boolean) ? "Yes" : "No";
}
9 months agoRefactorDiscuss
8 kyu
Beginner Series #1 School Paperwork
JavaScript:
function paperwork(people, pages) {
  let  blankPages = (people > 0 && pages > 0) ? people * pages : 0;
  return blankPages;
}
9 months agoRefactorDiscuss
function paperwork(people, pages) {
  let blankPages = 0;
  if (people > 0 && pages > 0) blankPages = people * pages;
  return blankPages;
}
9 months agoRefactorDiscuss
8 kyu
Return Negative
JavaScript:
function makeNegative(num) {
    let negativeNum = (num > 0) ? -num : num;
    return negativeNum;
}
9 months agoRefactorDiscuss
RetiredFunction 3 - multiplying two numbers
JavaScript:
const multiply = (num1, num2) => num1 * num2;
9 months agoRefactor
function multiply (number1, number2) {
  return number1 * number2;
}
9 months agoRefactorDiscuss
8 kyu
Simple multiplication
JavaScript:
function simpleMultiplication(num) {
  let result = (num % 2) ? num * 9 : num * 8;
  return result;
}
9 months agoRefactorDiscuss
function simpleMultiplication(number) {
  let result = number;
    if (number %2 === 0) {
      result = number * 8;
    } else {
      result = number * 9;
    }
  return result;
}
9 months agoRefactorDiscuss
8 kyu
Opposites Attract
JavaScript:
function lovefunc(flower1, flower2){  
  let flower1Even = (flower1 % 2) ? false : true;
  let flower2Even = (flower2 % 2) ? false : true;
  let love = (flower1Even != flower2Even) ? true : false;
  return love;
}
9 months agoRefactorDiscuss
function lovefunc(flower1, flower2){
  let result = false;  
  let flower1Even = (flower1%2 === 0)? true : false;
  let flower2Even = (flower2%2 === 0)? true : false;
  if(flower1Even != flower2Even) {
    result = true;
  } 
  return result;
}
9 months agoRefactorDiscuss
8 kyu
Even or Odd
JavaScript:
function even_or_odd(number) {
  let result = (number % 2) ? "Odd" :'Even' ;
  return result;
}
9 months agoRefactor
function even_or_odd(number) {
  let result = '';
  if (number%2 === 0) {
    result = "Even";
  } else {
    result = "Odd";
  }
  return result;
}
9 months agoRefactorDiscuss
8 kyu
Beginner - Lost Without a Map
JavaScript:
function maps(array){
  let numDoubled;
  
  //* What map does under the hood.
  const _map = function (list, callback) {
    let storage = [];
    for (let i = 0; i < list.length; i++) {
      storage.push(
        callback(list[i], i, list)
      )
    }
    return storage;
  }
  
  numDoubled = _map(array, function (element, index, list){
    return list[index] * 2;
  })
  
  // ES6 version
  // numDoubled = array.map((element) => element *2);

  return numDoubled;
}
9 months agoRefactorDiscuss
function maps(array){
  let doubledNumbers = [];
  
  for (let i = 0; i < array.length; i++) {
    doubledNumbers.push(array[i]*2);
  }
  
  return doubledNumbers;
}
10 months agoRefactorDiscuss
8 kyu
Multiply
JavaScript:
const multiply = (a, b) =>  a * b;
9 months agoRefactor
function multiply(a, b){
 return a * b;
}
10 months agoRefactor
8 kyu
How good are you really?
JavaScript:
function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  let sum = 0;
  let isBetter;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  sum /= classPoints.length;
  isBetter = (sum >= yourPoints) ? false : true;
  return isBetter;
}
9 months agoRefactorDiscuss
8 kyu
Square(n) Sum
JavaScript:
function squareSum(numbers){
  let sum = 0;
  let arrSquares = numbers.map((element) => Math.pow(element, 2));
  arrSquares.forEach((element) => sum += element);
  return sum;
}
9 months agoRefactorDiscuss
function squareSum(numbers){
  let sum = 0;
  let arrSquares = numbers.map(function(element, index, list){
    return Math.pow(element, 2)
  })
  arrSquares.forEach(function(element, index, list){
    sum += element;
  })
  return sum;
}
9 months agoRefactorDiscuss
function squareSum(numbers){
  let sum = 0;
  let arrSquares = [];
  for (let i = 0; i < numbers.length; i++) {
    arrSquares.push(Math.pow(numbers[i], 2))
  }
  for (let i = 0; i < arrSquares.length; i++) {
    sum += arrSquares[i];
  }
  return sum;
}
9 months agoRefactor
8 kyu
Sum Mixed Array
JavaScript:
function sumMix(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseFloat(arr[i])
  }
  return sum;
}

9 months agoRefactorDiscuss
function sumMix(arr) {
  let sum = 0;
  //Iteration conversion
  let arrNumbers = arr.map(function (element, index, list){
    return parseFloat(element);
  });
  //Iteration summ
  arrNumbers.forEach(function (element, index, list){
    sum+= element;
  });
  return sum;
}

9 months agoRefactorDiscuss
8 kyu
Sum of positive
JavaScript:
function positiveSum (array) {
  let sumPositive = 0;
    for (let i = 0; i <array.length; i++) {
     if(array[i]>0) sumPositive += array[i];
    }
  return sumPositive;
}
9 months agoRefactor
function positiveSum (array) {
  let sumPositive = 0;
  //This is what .forEach() does under the hood*/
  let _forEach = function (list, callback) {
    for (let i = 0; i <list.length; i++) {
      callback(list[i], i, list);
    }
  }
  _forEach(array, function(value, index, list) {
    if(value>0) sumPositive += list[index];
  })
    
  return sumPositive;
}
9 months agoRefactorDiscuss
8 kyu
Correct the mistakes of the character recognition software
JavaScript:
function correct(string) {
  string = string.replace(/5/g, 'S')
  string = string.replace(/0/g, 'O')
  string = string.replace(/1/g, 'I')
  return string;
}
9 months agoRefactor
function correct(string) {
    for (let i = 0; i <string.length; i++) {
      string = string.replace('5', 'S')
      string = string.replace('0', 'O')
      string = string.replace('1', 'I')
    }
  return string;
}
9 months agoRefactorDiscuss
8 kyu
You Can't Code Under Pressure #1
JavaScript:
function doubleInteger(i) {
  return i * 2;
}
9 months agoRefactorDiscuss
8 kyu
Convert a Number to a String!
JavaScript:
function numberToString(num) {
  return num.toString();
}
9 months agoRefactorDiscuss
8 kyu
Function 1 - hello world
JavaScript:
function greet () {
  return `hello world!`;
}
10 months agoRefactorDiscuss
8 kyu
Returning Strings
JavaScript:
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}
10 months agoRefactorDiscuss