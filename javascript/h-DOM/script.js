const button = document.querySelector(".btn");
button.addEventListener('click', function () {
    alert("Hey you made a click!!!!");
});

const input = document.querySelector(".input-user");
const output = document.querySelector(".output");
input.addEventListener('keyup', function () {
    output.innerText = input.value;
});