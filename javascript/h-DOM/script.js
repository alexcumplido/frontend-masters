const button = document.querySelector(".btn");
// button.addEventListener('click', function () {
//     alert("Hey you made a click!!!!");
// });

// const input = document.querySelector(".input-user");
// const output = document.querySelector(".output");
// input.addEventListener('keyup', function () {
//     output.innerText = input.value;
// });

// const targets = document.querySelectorAll(".js-target");

const list = document.querySelector(".list");

for (let i = 0; i < 2; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = "List item created via DOM";
    listItem.style.border = "1px solid red";
    listItem.style.width = "50%";
    list.appendChild(listItem);
}






