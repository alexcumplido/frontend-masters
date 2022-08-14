const weapons = ['candlestick', 'lead pipe', 'revolver'];
// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

function createSupectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log(`My name is ${name}`)
        }
    };
};

let suspects = {
    name1: 'Miss Scarlet',
    name2: 'Colonel Mustard',
    name3: 'Mr. White'
}

{
    // What is the main difference between .forEach() and .map() function ?
    let dataMap = weapons.map(function (element, index, array) {
        return element;
    });
    console.log(dataMap);
}

{
    const makeBroken = function (item) {
        return `broken ${item}`
    }
    let brokenWeapons = weapons.map(function (element, index, array) {
        return makeBroken(element);
    });
    console.log(brokenWeapons);
}

{
    const _ = {};
    _.map = function (array, callback) {
        let storage = [];
        if (Array.isArray(array)) {
            for (let i = 0; i < array.length; i++) {
                storage.push(callback(array[i], i, array));
            }
        } else {
            for (let key in array) {
                storage.push(
                    callback(array[key])
                );
            }
        }
        return storage;
    }
    let newArray = _map([1, 2, 3], function (value, index, list) {
        return value + 1;
    })
    console.log(newArray);
}
