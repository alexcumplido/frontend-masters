let screen = document.querySelector(".screen-output");
const btnNumber = document.querySelectorAll(".btn_number");
const btnFunction = document.querySelectorAll(".btn_function");
const btnClear = document.querySelector(".btn_clear");

let divActive = false;
let multActive = false;
let subActive = false;
let addActive = false;

let input = '';
let firstOperand = '';
let operationResult = 0;
screen.innerText = 0;
btnNumber.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        input += event.target.innerText;
        screen.innerText = input;
    });
});

btnFunction.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        if (event.target.className.includes('divide')) {
            storeOperand();
            divActive = true;
        } else if (event.target.className.includes('multiply')) {
            storeOperand();
            multActive = true;
        } else if (event.target.className.includes('subtract')) {
            storeOperand();
            subActive = true;
        } else if (event.target.className.includes('add')) {
            storeOperand();
            addActive = true;
        } else if (event.target.className.includes('result')) {
            result();
        }
    })
});

btnClear.addEventListener('click', function () {
    input = '';
    firstOperand = 0;
    screen.innerText = 0;
})

function storeOperand() {
    divActive = false;
    multActive = false;
    subActive = false;
    addActive = false;
    firstOperand = Number(input);
    input = '';
    screen.innerText = 0;
}

function result() {
    if (divActive) {
        operationResult = firstOperand / Number(input);
        firstOperand = operationResult;
    } else if (multActive) {
        operationResult = firstOperand * Number(input);
        firstOperand = operationResult;
    } else if (subActive) {
        operationResult = firstOperand - Number(input);
        firstOperand = operationResult;
    } else if (addActive) {
        operationResult = firstOperand + Number(input);
        firstOperand = operationResult;
    }
    screen.innerText = operationResult;
}
