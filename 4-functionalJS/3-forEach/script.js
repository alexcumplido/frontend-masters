{
    function CreateSuspectObjects(name) {
        return {
            name: name,
            color: name.split(' ')[1],
            speak() {
                console.log(`my name is ${name}`);
            }
        };
    }
    let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']
    let supectList = [];

    for (let i = 0; i < suspects.length; i++) {
        supectList.push(
            CreateSuspectObjects(suspects[i])
        )
    }

    suspects.forEach(function (suspect) {
        supectList.push(
            CreateSuspectObjects(suspect)
        )
    });
}

{
    let objects = ['observatory', 'ballrom', 'library'];
    let logger = function (value) {
        console.log(value);
    }
    objects.forEach(logger)
}