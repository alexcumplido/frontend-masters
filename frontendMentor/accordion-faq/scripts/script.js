let accordionItems = document.querySelectorAll('.accordion__item');
let accordionText = document.querySelectorAll('.accordion-text');
let currentActive = null;
let eventId;


for (let i = 0; i < accordionItems.length; i++) {

    accordionItems[i].addEventListener(('click'), function () {
        eventId = i;
        if (currentActive === null) {
            accordionText[i].classList.add("show");
            currentActive = i;
        } else if (currentActive === i) {
            accordionText[currentActive].classList.remove("show");
            currentActive = null;
        } else {
            accordionText[currentActive].classList.remove("show");
            accordionText[i].classList.add("show");
            currentActive = i;
        }
    });
}
