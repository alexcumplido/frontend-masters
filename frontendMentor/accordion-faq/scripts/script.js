let accordionItems = document.querySelectorAll('.accordion__item');
let accordionText = document.querySelectorAll('.accordion-text');
let currentActive = null;
let eventId;

accordionItems.forEach((item) => {

    item.addEventListener(('click'), function (event) {

        eventId = parseInt(event.currentTarget.id);

        if (currentActive === null) {
            accordionText[eventId].classList.add("show");
            currentActive = eventId;
        } else if (currentActive === eventId) {
            accordionText[currentActive].classList.remove("show");
            currentActive = null;
        } else {
            accordionText[currentActive].classList.remove("show");
            accordionText[eventId].classList.add("show");
            currentActive = eventId;
        }
    });
});
