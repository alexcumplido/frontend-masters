const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 50,
    effect: "flip",
    slidesPerView: 2,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}); 