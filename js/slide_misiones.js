const swiper_misiones = new Swiper('#slide_misiones', {
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnIteraction: false
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev' 
    }
});