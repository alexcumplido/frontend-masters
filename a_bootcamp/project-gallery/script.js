let currentySelected = 0;
let images = document.querySelectorAll('.gallery-img');
const btnPrevious = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

btnPrevious.addEventListener('click', function () {

    images[currentySelected].classList.remove("active");
    currentySelected--;
    images[currentySelected].classList.add("active");

    btnNext.removeAttribute("disabled");
    if (currentySelected === 0) {
        btnPrevious.setAttribute("disabled", true);
    }
})

btnNext.addEventListener('click', function () {

    images[currentySelected].classList.remove("active");
    currentySelected++;
    images[currentySelected].classList.add("active");

    btnPrevious.removeAttribute("disabled");
    if (currentySelected === images.length - 1) {
        btnNext.setAttribute("disabled", true);
    }
});



