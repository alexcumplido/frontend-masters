const regexFullName = /^[a-z ,.'-]+$/i;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//regexPass 8 characters, at least 1 letter and 1 number:

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');


const emailAdress = document.getElementById('emailAdress');
const spanError = document.querySelector('.error-emailAdress');
const submitButton = document.querySelector('.btn-submit');
const form = document.querySelector('form');

emailAdress.addEventListener("input", function (event) {
    if (emailAdress.validity.valid) {
        spanError.textContent = ''; // Reset the content of the message
        spanError.className = 'error'; // Reset the visual state of the ;
    } else {
        showError();
    }
})

form.addEventListener('submit', function (event) {
    if (!emailAdress.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (emailAdress.validity.valueMissing) {
        spanError.textContent = 'You need to enter an e-mail address.';
    } else if (emailAdress.validity.typeMismatch) {
        spanError.textContent = 'Entered value needs to be an e-mail address.';
    } else if (emailAdress.validity.tooShort) {
        spanError.textContent = `Email should be at least ${emailAdress.minLength} characters; you entered ${emailAdress.value.length}.`;
    }
    spanError.className = 'error-emailAdress active';
}










// function validateInputs() {
//     let validation = false;
//     validation = (regexFullName.test(firstName.value)) ? true : false;
//     validation = (regexFullName.test(lastName.value)) ? true : false;
//     validation = (regexEmail.test(emailAdress.value)) ? true : false;
//     validation = (regexPass.test(password.value)) ? true : false;
//     return validation;
// }

// form.addEventListener('submit', function (event) {
//     if (!validateInputs()) {
//         event.preventDefault();
//     }
// })

// Add eventListeners to stored inputs
// Prevent default behaviour of submitted button
// if user input validation mismatch
// if mismatch show error message in certain inputs
// if user input does not mismatch proceed with submitting
//         if does not mismatch show success message

