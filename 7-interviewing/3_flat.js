function flatten (arr) {
    let newArray = arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            item = acc.concat(flatten(item));
        } else  {
            acc.push(item);
        }
        return acc;
    } , []);
    return newArray;
}