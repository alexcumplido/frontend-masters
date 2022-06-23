let accordionItems = document.querySelectorAll('.accordion__item');
let accordionText = document.querySelectorAll('.accordion-text');
let currentActive = null;

accordionItems.forEach(function (item) {
    item.addEventListener(('click'), function (event) {

        let eventId = parseInt(event.target.id);
        if (currentActive === null) {
            accordionText[eventId].classList.add("show");
            currentActive = eventId;
        } else {
            accordionText[eventId].classList.remove("show");
            accordionText[eventId].classList.add("show");
            currentActive = eventId;
        }
    })
});