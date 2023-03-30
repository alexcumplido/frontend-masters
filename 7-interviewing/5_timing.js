{
   function debounce(fn, time) {
    let setTimeoutId;
    return function () {
        if (setTimeoutId) {
            clearTimeout(setTimeoutId);
        }
        setTimeoutId = setTimeout(function () {
            fn.apply(this, arguments);
            setTimeoutId = null;
        }, time)
    }
   }
}