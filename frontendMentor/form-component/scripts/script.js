const regexFullName = /^[a-z ,.'-]+$/i;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//regexPass 8 characters, at least 1 letter and 1 number:

const inputFirstName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');
const inputEmail = document.getElementById('emailAdress');
const inputPassword = document.getElementById('password');
const inputErrors = document.querySelectorAll('.span-error');
const submitButton = document.querySelector('.btn-submit');
const form = document.querySelector('form');

function validateInputs() {
    debugger;
    let validation = false;
    validation = (regexFullName.test(inputFirstName.value)) ? true : false;
    validation = (regexFullName.test(inputLastName.value)) ? true : false;
    validation = (regexEmail.test(inputEmail.value)) ? true : false;
    validation = (regexEmail.test(inputPassword.value)) ? true : false;
    return validation;
}

form.addEventListener('submit', function (event) {
    if (!validateInputs()) {
        event.preventDefault();
    }
})



// Add eventListeners to stored inputs
// Prevent default behaviour of submitted button
// if user input validation mismatch
// if mismatch show error message in certain inputs
// if user input does not mismatch proceed with submitting
//         if does not mismatch show success message

