const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    // initialSlide: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    allowTouchMove: true,
    // centerInsufficientSlides: true,
    // slideToClickedSlide: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    breakpoints: {
        1078: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    }
});

const swiper2 = new Swiper('.swiper-2', {
    slidesPerView: 1,
    spaceBetween: 10,

    // initialSlide:0,
    centeredSlides:true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        1078: {
            slidesPerView: 2,
            spaceBetween: 32,
        }
    },

    Freemode: {
        enabled: true
    },
});