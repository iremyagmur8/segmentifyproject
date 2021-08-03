swiperTabsNav = new Swiper('.swiper-tabs-nav', {
    spaceBetween: 0,
    slidesPerView: 2,
    loop: false,
    loopedSlides: 5,
    autoHeight: true,
    resistanceRatio: 0,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

// Swiper Content
swiperTabsContent = new Swiper('.swiper-tabs-content', {
    spaceBetween: 0,
    loop:false,
    autoHeight: true,
    longSwipes: true,
    resistanceRatio: 0, // Disable First and Last Swiper
    watchOverflow: true,
    loopedSlides: 5,
    thumbs: {
        swiper: swiperTabsNav,
    },
});