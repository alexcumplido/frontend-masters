
const buttonsGroup = document.querySelector(".ratings__btn-group");
const btnGroup = document.querySelectorAll(".btn-rating");
const btnSubmit = document.querySelector(".btn-submit");
const modalRating = document.querySelector(".rating");
const modalRatingThankyou = document.querySelector(".rating-thankyou");
let rate = 0;

for (let i = 0; i < btnGroup.length; i++) {
    btnGroup[i].addEventListener('click', function (event) {
        rateButton(event);
    })
}

function rateButton(event) {
    if (event.target.innerText) {
        if (rate === 0) {
            rate = parseInt(event.target.innerText);
            event.target.classList.add("btn-rating-active");
        } else {
            btnGroup.forEach(function (button) {
                if (parseInt(button.innerText) === rate) {
                    button.classList.remove("btn-rating-active");
                }
            });
            event.target.classList.add("btn-rating-active");
            rate = parseInt(event.target.innerText);
        }
    }
}

















