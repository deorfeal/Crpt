// import Swiper from './node_modules/swiper/bundle';

// import './node_modules/swiper//css/bundle';

// new Swiper('.recalls-swiper', {
//     slidesPerView: 3,
//     loop: true,
//     initialSlide: 0,
//     navigation: {
//         prevEl: '.recalls-swiper-button-prev',
//         nextEl: '.recalls-swiper-button-next',
//     },
// });

new Swiper('.recalls-swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 50,
    navigation: {
        prevEl: '.recalls-swiper-button-prev',
        nextEl: '.recalls-swiper-button-next',
    },
    breakpoints: {
        301: {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 50,
        },
        651: {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 50,
        },
        951: {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 50,
        },
    }
});

$(function () {

    $('.header-user-nav-btn').on('click', function (event) {
        $('.header-user-nav').toggleClass('header-user-nav--active');
        // $(this).toggleClass('header-top-lang--active');
    });

    $('.header__btn').on('click', function (event) {
        $('.header').toggleClass('header--active');
        $('.body').toggleClass('body--active');
        // $(this).toggleClass('header-top-lang--active');
    });
})

// $(function () {
//     var mixer = mixitup('.draws-info__inner', {
//         load: {
//             filter: '.draw'
//         },
//         animation: {
//             enable: false
//         },
//     });
// })

var containerEl1 = document.querySelector('[data-ref="container-1"]');
var containerEl2 = document.querySelector('[data-ref="container-2"]');

var config = {
    controls: {
        scope: 'local'
    },
    load: {
        filter: '.item-first',
    },
    animation: {
        effects: 'fade scale(0%)',
        duration: 0,
    },
};
var confiG = {
    controls: {
        scope: 'local'
    },
    load: {
        filter: '.item-first',
    },
    animation: {
        effects: 'fade scale(0%)',
        duration: 0,
    },
};

var confiGG = {
    controls: {
        scope: 'local'
    },
    load: {
        filter: '.item-first',
    }
};

var mixer1 = mixitup(containerEl1, config);
var mixer1 = mixitup(containerEl2, confiG);

// new Swiper('.catalog-first-swiper', {
//     slidesPerView: 6,
//     loop: true,
//     initialSlide: 0,
//     navigation: {
//         prevEl: '.catalog-first-swiper-button-prev',
//         nextEl: '.catalog-first-swiper-button-next',
//     },
//     breakpoints: {
//         301: {
//             slidesPerView: 2.2,
//             centeredSlides: true,
//             initialSlide: 1,
//             slidesPerGroup: 1,
//             loopedSlides: 6,
//         },
//         501: {
//             slidesPerView: 2.5,
//             centeredSlides: true,
//             initialSlide: 1,
//             slidesPerGroup: 1,
//             loopedSlides: 6,
//         },
//         951: {
//             slidesPerView: 3.2,
//             centeredSlides: true,
//             initialSlide: 1,
//             slidesPerGroup: 1,
//             loopedSlides: 6,
//         },
//         1051: {
//             slidesPerView: 3.5,
//             centeredSlides: true,
//             initialSlide: 1,
//             slidesPerGroup: 1,
//             loopedSlides: 6,
//         },
//         1201: {
//             slidesPerView: 4,
//             centeredSlides: true,
//             initialSlide: 1,
//             slidesPerGroup: 1,
//             loopedSlides: 6,
//         },
//         1701: {
//             centeredSlides: false,
//             slidesPerView: 6,
//             initialSlide: 0,
//         }
//     }
// });