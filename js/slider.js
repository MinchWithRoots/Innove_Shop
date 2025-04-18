const swiper = new Swiper('.swiper', {
    slidesPerView: 0.5,
    spaceBetween: 10,
    initialSlide: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    breakpoints: {
        700: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1078: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    }
});

const swiper2 = new Swiper('.swiper-2', {
    slidesPerView: 2,
    spaceBetween: 10,

    initialSlide:0,
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
    centeredSlides: true,
});