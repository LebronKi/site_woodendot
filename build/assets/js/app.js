const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween:10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});