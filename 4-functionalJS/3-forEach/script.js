var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

function createSupectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log(`My name is ${name}`)
        }
    };
};

{
    //What it means to Hydrate data into an object ? What is an hidrated Object ?
    var suspectList = [];
    for (let i = 0; i < suspects.length; i++) {
        suspectList.push(
            createSupectObjects(suspects[i])
        );
    }
}

{
    var suspectList = [];
    _.each(
        ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'],
        function (value, index, list) {
            console.log(value);
            let suspectObject = createSupectObjects(list[index]);
            suspectList.push(suspectObject);
        });
    console.log(suspectList);
}

{
    var suspectList = [];
    ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']
        .forEach(function (value, index, list) {
            suspectList[index] = createSupectObjects(value);
        })
    console.log(suspectList);
}

{
    const _ = {};
    var suspectList = [];
    _.each = function (list, callback) {
        if (Array.isArray(list)) {
            for (let i = 0; i < list.length; i++) {
                callback(list[i], i, list);
            }
        } else {
            for (let key in list) {
                callback(list[key], key, list);
            }
        }
    }

    _.each(['sally', 'george', 'porgie'], function (name, i, list) {
        if (list[i + 1]) {
            console.log(`${name} is younger than ${list[i + 1]}`);
        } else {
            console.log(`${name} is the oldest.`);
        }
    })
}