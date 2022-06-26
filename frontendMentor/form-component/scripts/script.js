const regexFirstName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
const regexLastName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const form = document.querySelector('.form');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('emailAdress');
const password = document.getElementById('password');

const errorFirstName = document.querySelector('.errorFirstName');
const errorLastName = document.querySelector('.errorLastName');
const errorEmail = document.querySelector('.errorEmail');
const errorPassword = document.querySelector('.errorPassword');
// regexPass 8 characters, at least 1 letter and 1 number:

form.addEventListener('submit', function (event) {
    if (validateFirstName() === false) event.preventDefault();
    if (validateLastName() === false) event.preventDefault();
    if (validateEmail() === false) event.preventDefault();
    if (validatePassword() === false) event.preventDefault();
});

function validateFirstName() {
    let validate = true;
    if (firstName.value === "") {
        validate = false;
        errorFirstName.textContent = 'First Name can not be empty.';
        errorFirstName.classList.add('active');
    } else if (regexFirstName.test(firstName.value) === false) {

        validate = false;
        errorFirstName.textContent = 'First Name can not containt numeric or special values.';
        errorFirstName.classList.add('active');
    } else {
        errorFirstName.textContent = '';
        errorFirstName.classList.remove('active');
    }
    return validate;
}

function validateLastName() {
    let validate = true;
    if (lastName.value === "") {
        validate = false;
        errorLastName.textContent = 'Last Name can not be empty.';
        errorLastName.classList.add('active');
    } else if (regexLastName.test(lastName.value) === false) {

        validate = false;
        errorLastName.textContent = 'Last Name can not containt numeric or special values.';
        errorLastName.classList.add('active');
    } else {
        errorLastName.textContent = '';
        errorLastName.classList.remove('active');
    }
    return validate;
}

function validateEmail() {
    let validate = true;
    if (email.value === "") {
        validate = false;
        errorEmail.textContent = 'Email can not be empty.';
        errorEmail.classList.add('active');
    } else if (regexEmail.test(email.value) === false) {
        validate = false;
        errorEmail.textContent = 'Email need to be a valid email.';
        errorEmail.classList.add('active');
    } else {
        errorEmail.textContent = '';
        errorEmail.classList.remove('active');
    }
    return validate;
}

function validatePassword() {
    let validate = true;
    if (password.value === "") {
        validate = false;
        errorPassword.textContent = 'Password can not be empty.';
        errorPassword.classList.add('active');
    } else if (regexPass.test(password.value) === false) {
        validate = false;
        errorPassword.textContent = 'Password need to be a valid password.';
        errorPassword.classList.add('active');
    } else {
        errorPassword.textContent = '';
        errorPassword.classList.remove('active');
    }
    return validate;
}