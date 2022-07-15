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
    let dataMap = weapons.map(function (element, index, list) {
        return element;
    });
    console.log(dataMap);
}

{
    const makeBroken = function (item) {
        return `broken ${item}`
    }
    let brokenWeapons = weapons.map(function (element, index, list) {
        return makeBroken(element);
    });
    console.log(brokenWeapons);
}

{
    let objectList = [];
    if (Array.isArray(suspects)) {
        objectList = suspects.map(function (element, index, list) {
            return createSupectObjects(list[index]);
        });
    } else {
        for (let key in suspects) {
            objectList.push(
                createSupectObjects(suspects[key])
            );
        }
    }
    console.log(objectList);
}

{
    _map = function (list, callback) {
        let arrayStorage = [];
        for (let i = 0; i < list.length; i++) {
            arrayStorage.push(
                callback(list[i], i, list)
            )
        }


        return arrayStorage;
    }
}