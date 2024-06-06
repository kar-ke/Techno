
const swiper = new Swiper('.swiper', {

    // autoplay: {
    //     delay: 3000,
    // },
    speed: 1000,
    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});