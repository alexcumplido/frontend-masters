const accordionItems = document.querySelectorAll('.accordion__item');
const accordionTitles = document.querySelectorAll(".accordion-title");
const accordionText = document.querySelectorAll('.accordion-text');
const arrows = document.querySelectorAll('.arrow');
let currentActive = null;

for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener(('click'), function () {
        if (currentActive === null) {
            accordionTitles[i].classList.add("title-active");
            accordionText[i].classList.add("show");
            arrows[i].classList.add("arrow-rotate");
            currentActive = i;
        } else if (currentActive === i) {
            accordionTitles[i].classList.remove("title-active");
            accordionText[currentActive].classList.remove("show");
            arrows[i].classList.remove("arrow-rotate");
            currentActive = null;
        } else {
            accordionTitles[currentActive].classList.remove("title-active");
            accordionText[currentActive].classList.remove("show");
            arrows[currentActive].classList.remove("arrow-rotate");
            accordionTitles[i].classList.add("title-active");
            accordionText[i].classList.add("show");
            arrows[i].classList.add("arrow-rotate");
            currentActive = i;
        }
    });
}