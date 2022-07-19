// What can receive Higher Order functions as an argument ?

{
    // When is executed the anonymous functions passed to ifElse
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
    const ifElse = function (condition, isTrue, isFalse, ...parameters) {
        return condition ? isTrue(...parameters) : isFalse(...parameters);
    }

    ifElse(true,
        () => console.log(true),
        () => console.log(false),
        'Alexandre'
    )
}