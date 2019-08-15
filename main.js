var modernSlider = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 20,
	speed:800,
    centeredSlides: false,
    mousewheel: false,
});

modernSlider.on('slideChange', function () {
    TweenMax.to('.reveal', .2, {
        y: '-50px',
    })
    TweenMax.to('.swiper-slide', .5, {
        scale: .95,
    })
});


modernSlider.on('slideChangeTransitionEnd', function () {
    TweenMax.to('.reveal', 0, {
        y: '50px',
    })
    TweenMax.to('.reveal', .2, {
        y: 0,
        delay: .5,
    })
    TweenMax.to('.swiper-slide-active .port-text', 0, {
        autoAlpha: 1,
    })
    TweenMax.to('.swiper-slide-next .port-text', 0, {
        autoAlpha: 0,
    })
    
    TweenMax.to('.swiper-slide-prev .port-text', 0, {
        autoAlpha: 0,
    })
    TweenMax.to('.swiper-slide-active', .5, {
        scale: 1,
        ease: Power4.easeOut,
    })
});

TweenMax.to('.swiper-slide-next .port-text', 4, {
    autoAlpha: 0,
})

TweenMax.to('.swiper-slide-prev .port-text', 4, {
    autoAlpha: 0, ease: Power4.easeInOut,
})

TweenMax.to('.swiper-slide-active', 0, {
    scale: 1,
})

TweenMax.to('.swiper-slide', 0, {
    scale: .95,
})
