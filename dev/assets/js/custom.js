window.addEventListener("load", function(event) {
    //https://developer.mozilla.org/ru/docs/Web/API/Window/load_event
    const btnBurger = document.querySelector('.btn-burger')
    const mobileContainer = document.querySelector('.mobile-container')
    const linkBack = document.querySelector('.history-back')

    function historyBack() {
        linkBack.addEventListener('click', function() {
            window.history.back()
        })
    }

    const toggleMobileMenu = () => {
        mobileContainer.classList.toggle('show')
        btnBurger.classList.toggle('active')
    }

    btnBurger.addEventListener('click', toggleMobileMenu)


    const bannerSlider = new Swiper('.banner-slider', {
        slidesPerView: 2,
        speed: 700,
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    const carouselWeekly = new Swiper('.carousel-weekly', {
        speed: 700,
        spaceBetween: 40,
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.weekly-button-next',
            prevEl: '.weekly-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 40,
                centeredSlides: true,
            },
            // when window width is >= 768
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: true,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: true,
            }
        }
    });


    document.querySelector('.wiget') ? installWiget() : null;
    document.querySelector('.tabs') ? installTabs() : null;
    linkBack ? historyBack() : null;
})