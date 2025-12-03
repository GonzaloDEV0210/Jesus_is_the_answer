// Swiper para las miniaturas
  const thumbSwiper = new Swiper(".mySwiperThumb", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  // Swiper principal
  const mainSwiper = new Swiper(".mySwiperMain", {
    loop: true,

    spaceBetween: 10,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      type: "fraction", // muestra 1/4
    },

    thumbs: {
      swiper: thumbSwiper,
    },
  });