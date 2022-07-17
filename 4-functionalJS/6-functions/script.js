// What are the pieces of a function ?
// What is the difference between parameters and arguments ?
// What is the difference between declaration and invocation ?
// What triggers the keyword return in the function body ?
// What is a side effect of a function ?

var nameImprover = function (name, adj) { //Fn name, fn definition with parameters
    return 'Col ' + name + ' Mc' + adj + ' pants'; //fn return with no side effects
};//fn body closes

$('body').hide();//Fn name call with arguments 'body'. Fn name .hide() just calling creating side effects

myArr.forEach(function (val) { //fn name with arguments, fn definition with parameters
    console.log(val); //fn name invocating with arguments and creating side effects.
});//fn body closes 

$('button').on('click', function () {//fn call with arguments 'button', fn call with arguments and fn declaration without parameters
    console.log('Don\'t press my buttons!'); //fn name log calling with arguments and creating side effects.
});//fn body closes


//Arrow functions
var nameImprover = (name, adj) => {
    return `Col ${name} Mc ${adj} pants`;
}

myArr.forEach(val => console.log(val));

$('button').on('click', () => {
    console.log('Don\'t press my buttons!');
});


//Projecting exercise 
const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    }
];

{
    _forEach = function (list, callback) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        }
    }

    _filter = function (list, callback) {
        let filterStorage = [];
        _forEach(list, function (element, index, list) {
            if (callback(element, index, list)) {
                filterStorage.push(element);
            }
        })
        return filterStorage;
    }

    let suspects = _filter(videoData, function (element, index, list) {
        if (list[index].present === true) {
            return element;
        }
    })

    _map = function (list, callback) {
        let mapStorage = [];
        for (let i = 0; i < list.length; i++) {
            mapStorage.push(callback(list[i], i, list));
        }
        return mapStorage;
    }

    let suspectsName = _map(suspects, function (element, index, list) {
        return list[index].name;
    })

    console.log(suspectsName);
}

{
    //What behaviour upon the arguments produces the spread operator ?
    const createTuple = (a, b, c, d) => {
        return [[a, c], [b, d]];
    }

    const createTupleSpreed = function (a, b, c, ...d) {
        console.log(arguments);// About what tell us explicitly arguments keyword ?
        return [[a, c], [b, d]];
    }
    console.log(createTuple('It', 'be', 'could', 'anyone', 'no one'));
    console.log(createTupleSpreed('It', 'be', 'could', 'anyone', 'no one'));
}

{
    const createDefault = (a, b = 2) => a + b;

    console.log(createDefault(1, 2));
    console.log(createDefault(2, 2));
}

