const game = {
    suspects: [
        {
            name: "Rusty",
            color: "orange"
        },
        {
            name: "Miss Scarlet",
            color: "red",
        }
    ],
}
{
    for (let i = 0; i < game.suspects.length; i++) {
        console.log(game.suspects[i])
    }
}

{
    // Specific loop syntaxis to iterate ober objects
    for (let key in game) {
        console.log(game[key]);
    }
}

{
    for (let i = 0; i < game.suspects.length; i++) {
        for (let prop in game.suspects[i]) {
            if (game.suspects[i][prop] === "Rusty") {
                game.suspects[i]["wouldHe"] = "he would";
            }
        }
    }
}

//Destructure this nested data structure into two variables with the strings 'red' and 'orange'

{
    const suspects = [
        {
            name: "Rusty",
            color: "orange"
        },
        {
            name: "Miss Scarlet",
            color: "red",
        }
    ]

    const [color, color2] = [suspects[0].color, suspects[1].color];

    const [{ color: firstColor }, { color: secondColor }] = suspects;
}