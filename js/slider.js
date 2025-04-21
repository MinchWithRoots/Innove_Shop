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
        700: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        // 790: {
        //     slidesPerView: 2,
        //     spaceBetween: 10,
        // },


        800: {
            slidesPerView: 3,
            spaceBetween: 10,
        },

        

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
        900: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        1000: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        1078: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },

    Freemode: {
        enabled: true
    },
});