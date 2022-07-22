// What can receive Higher Order functions as an argument ?

{
    // When is executed the anonymous functions passed to ifElse ?
    const ifElse = function (condition, isTrue, isFalse) {
        return condition ? isTrue() : isFalse();
    }

    ifElse(true,
        () => console.log(true),
        () => console.log(false)
    )

    const logTrue = () => console.log(true);
    const logFalse = () => console.log(false);

    ifElse(true, logTrue, logFalse);
}

{
    //Functions passed as arguments
    var increment = (n) => n + 1;
    var square = (n) => n * n;
    var doMath = function (n, otherFunction) {
        return otherFunction(n);
    }

    console.log(doMath(5, square))
    console.log(doMath(4, increment))
}

{
    // Passing functions with parameters    
    let names;
    const ifElse = function (condition, isTrue, isFalse, ...args) {
        return condition ? isTrue(...args) : isFalse(...args);
    }

    ifElse(true,
        function (...arg) {
            names.push(arg);
        },
        () => console.log('Alexandre'),
        'Alexandre',
        'Cumplido'
    )
}

{
    _reduce([1, 2], function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0)

    _reduce({ 'a': 1, 'b': 2, 'c': 1 }, function (result, value, key) {
        (result[value] || (result[value] = [])).push(key);
        return value;
    }, {})
}

{
    const reduce = function (list, callback, initial) {
        let memo = initial;
        for (let i = 0; i < list.length; i++) {
            if (i === 0 && memo === undefined) {
                memo = list[0];
            } else {
                memo = callback(list[i], memo)
            }
        }
        return memo;
    }

    reduce([1, 2, 3], function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0)
}


const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: true },
            { 'dining room': true },
            { 'billiard room': false },
            { library: true }
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            { kitchen: true },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': true },
            { library: false }
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: true },
            { 'dining room': false },
            { 'billiard room': true },
            { library: false }
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            { kitchen: true },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': true },
            { 'billiard room': false },
            { library: false }
        ]
    }
];

{
    const notInRoom = (suspect, memo) => {

        const emptyRooms = reduce(suspect.rooms, (room, memo) => {
            if (room === false) memo.push(room);
            return memo;
        }, []);
        return emptyRooms;
    };

    notInRoom = _.map(newDevelopment, notInRoom);

    _.intersection(...notInRoom);
}   