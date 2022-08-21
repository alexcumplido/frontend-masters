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
    let suspectsPresent = videoData.filter(function (element, index, array) {
        if (array[index].present) {
            return element;
        }
    })
    console.log(suspectsPresent);
}

{
    const _ = {};
    _.filter = function (array, callback) {
        let storage = [];
        if (Array.isArray(array)) {
            for (let i = 0; i < array.length; i++) {
                if (callback(array[i], i, array) === true) {
                    storage.push(array[i]);
                }
            }
        } else {
            for (let key in array) {
                if (callback(array[key], key, array) === true) {
                    storage.push(array[key]);
                }
            }
        }
        return storage;
    }

    let newArray = _filter(videoData, function (item) {
        if (item.present) {
            return true;
        }
    })
    console.log(newArray);
}