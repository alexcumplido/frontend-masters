{
    const myAlert = () => {
        const message = `Help! I think I found a clue!`;
        const alerter = () => {
            alert(message);
        }
        setTimeout(alerter, 2000); //What would happen if we add the parenthesis to alerter
        console.log('What happens first ? This log or the alert ?')
    }
    myAlert();
}

{
    const myAlert = function () {
        const message = `Help! I think I found a clue!`;
        let counter = 0;
        const alerter = function () {
            alert(`${message}, ${++counter}`)
        }
        return alerter;
    }
    const funcAlert = myAlert(); // What happens to the execution contet every time myAlert() is called ?
    const funcAlert2 = myAlert();
    funcAlert();
    funcAlert();
    funcAlert2();
}

{
    const newClue = function (name) {
        const length = name.length;
        return function (weapon) {
            let clue = length + weapon.length;
            return !!(clue % 1);
        };
    };

    let funcWeapon = newClue('Alexandre');
    let funcResult = funcWeapon('candlestick');
    console.log(funcResult)
}

{
    function countClues() {
        var n = 0;
        return {
            count: function () { return ++n; },
            reset: function () { return n = 0; }
        };
    };

    let counter = countClues();
    counter.count();
    counter.count();
    counter.reset();
    counter.count();
}

{
    const findSomeone = () => {
        const speak = function () {
            console.log(who);
        };
        let who = 'Why hello there, Prof Plum!';
        return speak;
    };
    const someoneSpeak = findSomeone()
    someoneSpeak();
}

{
    const makeTimer = () => {
        let elapsed = 0;
        const stopWatch = () => elapsed;
        const increase = () => elapsed++;
        setInterval(increase, 1000);
        return stopWatch;
    }

    let timer = makeTimer();
}

