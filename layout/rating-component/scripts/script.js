// User rate via button

//// Add event Listener once clicked add .class
//// Create array for number of rates
//// Once clicked push identifier to array

//// Submit only possible if just one rate selected
// Add event that submits only if there is one rate
// If not display an alert message
// Once submited display none main card and turn on thankyou

const btnGroup = document.querySelectorAll(".btn-rating");
const btnSubmit = document.querySelector(".btn-submit");
const modalRating = document.querySelector(".rating");
const modalRatingThankyou = document.querySelector(".rating-thankyou");
let rates = [];

btnGroup.forEach(function (btn) {
    btn.addEventListener('click', function (event) {

        if (rates.indexOf(event.target.innexText) === 0) {
            event.target.classList.remove('btn-rating-active');
            rates.pop();
        } else {
            event.target.classList.add("btn-rating-active");
            rates.push(Number(event.target.innerText));
        }

        console.log(event);
        console.log(rates);
        console.log(rates.length);


    });

});

/*
    1. User clicks rate button
        If rate exist 
            This rate is removed from array rates
            This button
        

*/
