const swiper_tienda = new Swiper('#slide_tienda', {
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnIteraction: false
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev' 
    },
    breakpoints: {
        550: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    }
});