
// navbar actions 
$(document).ready(function () {
    
    $('.open-menu').click(function () {
        $('.mobile-navbar-menulists').addClass('toogleopen');
        $('.open-menu').addClass('hidden')
        $('.close-menu').removeClass('hidden')
    })
    $('.close-menu').click(function () {
        $('.mobile-navbar-menulists').removeClass('toogleopen');
        $('.close-menu').addClass('hidden')
        $('.open-menu').removeClass('hidden')
    })


    // submenu 
    $('.primarynav-item').hover(function () {
        $(this).find('.sub-menu').css('visibility', 'visible');
    }, function () {
        $(this).find('.sub-menu').css('visibility', 'hidden');
        
    })

})





const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000
    },
    speed: 1000,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        enabled: false,
    },

    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
});