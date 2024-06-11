
// navbar actions 
$(document).ready(function () {
    

    $("#service-cards-slider").owlCarousel({
        margin: 30,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576:{
                items:2,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            }
        }
    });



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



// Swiper js properties 
// Hero page carousel 
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000
    },
    speed: 1000,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        enabled: false,
    },

    scrollbar: {
    el: '.swiper-scrollbar',
    },
});


// service cards swiper 
const service_swiper = new Service_swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});