jQuery(document).ready(function() {
    (function() {
        // your page initialization code here
        // the DOM will be available here
        AOS.init({
            duration: 750,
            offset: 0, // offset (in px) from the original trigger point
            once: true, // whether animation should happen only once - while scrolling down
            anchorPlacement: 'top-bottom', // define where the AOS animations will be triggered
        });
    })();
});

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


    $('.exchange-column-list__item').on('click', function (event) {
        if (event.currentTarget.parentNode.parentNode.parentNode.id == 1) {
            let listItems = $('.exchange-column-list__item')
            for (let item of listItems) {
                if (item.parentNode.parentNode.parentNode.id == 1) {
                    $(item).removeClass('exchange-column-list__item--active')
                }
                if (item.id == event.currentTarget.id) {
                    if (item.parentNode.parentNode.parentNode.id == 1) {
                        $(item).addClass('exchange-column-list__item--active');
                    }

                    // Убираем во второй колонке такую же валюту 
                    let allListofItems = $('.exchange-column-list__item')
                    $('.exchange-column-list__item--disabled').removeClass('exchange-column-list__item--disabled')

                    for (let oneOfAll of allListofItems) {
                        if (oneOfAll.parentNode.parentNode.parentNode.id == 2) {
                            if (oneOfAll.id == event.currentTarget.id) {
                                $(oneOfAll).addClass('exchange-column-list__item--disabled');
                            }
                        }
                    }
                }
            }

            // Проверка на картинку 
            if (event.currentTarget.id == 1 || event.currentTarget.id == 2 || event.currentTarget.id == 17 || event.currentTarget.id == 18 || event.currentTarget.id == 21 || event.currentTarget.id == 22 || event.currentTarget.id == 23) {
                let srcForElement = 'images/reserves-icon-'
                let srcForElementTwo = event.currentTarget.id
                let srcForElementThree = '.svg'
                let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree

                // Кнопки где отдаете получаете ( их иконки )
                let ourCryptiButton = $('.exchange-column-top__info-crypti')
                for (let item of ourCryptiButton) {
                    if (item.parentNode.parentNode.parentNode.id == 1) {
                        $(item).attr('src', fullSrcForElement);
                    }
                }
                // 

                // Кнопки где данные ( ввод данных )
                let dataIconFirst = $('.exchange-data-box-item__row-img--first')
                $(dataIconFirst).attr('src', fullSrcForElement);
                // 

                // 
            } else {
                let srcForElement = 'images/reserves-icon-'
                let srcForElementTwo = event.currentTarget.id
                let srcForElementThree = '.png'
                let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree

                // Кнопки где отдаете получаете ( их иконки )
                let ourCryptiButton = $('.exchange-column-top__info-crypti')
                for (let item of ourCryptiButton) {
                    if (item.parentNode.parentNode.parentNode.id == 1) {
                        $(item).attr('src', fullSrcForElement);
                    }
                }
                // 

                // Кнопки где данные ( ввод данных )
                let dataIconFirst = $('.exchange-data-box-item__row-img--first')
                $(dataIconFirst).attr('src', fullSrcForElement);
                // 
            }
            // 

            // Добавляем текст в поле ввода данных ( где показывает что отдаем и что получаем )
            let dataReturnLine = $(event.currentTarget).text()
            let ourDataReturnLineResult = dataReturnLine.toString()
            $('.exchange-data-box-item__row-text--first').text(ourDataReturnLineResult)
            // 

            // Добавляем маленькую приставку текста что это за монета в поле вводе данных
            let ourFirstShortWord = $('.exchange-data-box-item__info-text--spfirst')
            let ourListOfShortWords = $('.main-reserves-list__price-digit-text')
            for (let shortWord of ourListOfShortWords) {
                if (shortWord.id == event.currentTarget.id) {
                    let ourLasText = $(shortWord).text()
                    $(ourFirstShortWord).text(ourLasText)
                }
            }
            // 
        }
    });

    $('.exchange-column-list__item').on('click', function (event) {
        if (event.currentTarget.parentNode.parentNode.parentNode.id == 2) {
            let listItems = $('.exchange-column-list__item')
            for (let item of listItems) {
                if (item.parentNode.parentNode.parentNode.id == 2) {
                    $(item).removeClass('exchange-column-list__item--active')
                }
                if (item.id == event.currentTarget.id) {
                    if (item.parentNode.parentNode.parentNode.id == 2) {
                        $(item).addClass('exchange-column-list__item--active');
                    }
                }

                // Убираем в первой колонке такую же валюту 
                let allListofItems = $('.exchange-column-list__item')
                $('.exchange-column-list__item--disabled').removeClass('exchange-column-list__item--disabled')

                for (let oneOfAll of allListofItems) {
                    if (oneOfAll.parentNode.parentNode.parentNode.id == 1) {
                        if (oneOfAll.id == event.currentTarget.id) {
                            $(oneOfAll).addClass('exchange-column-list__item--disabled');
                        }
                    }
                }
            }


            // Поле с заполнением формы ( добавляем в поле нужную валюту )
            let ourMailText = $(event.currentTarget).text()
            let ourMailTextResult = ourMailText.toString()
            $('.exchange-data-form__box-input--first').attr('placeholder', ourMailTextResult.replace(/ /g,'') + ' адрес')
            //    

            // Делаем количество резерва 
            let allOurReserves = $('.main-reserves-list__price-digit')
            for (let item of allOurReserves) {
                if (item.id == event.currentTarget.id) {
                    let ourText = $(item).text()
                    $('.exchange-column-top-row-box__wrapper-text--digits').text(ourText)
                }
            }
            // 

            if (event.currentTarget.id == 1 || event.currentTarget.id == 2 || event.currentTarget.id == 17 || event.currentTarget.id == 18 || event.currentTarget.id == 21) {
                let srcForElement = 'images/reserves-icon-'
                let srcForElementTwo = event.currentTarget.id
                let srcForElementThree = '.svg'
                let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree

                // Кнопки где отдаете получаете ( их иконки )
                let ourCryptiButton = $('.exchange-column-top__info-crypti')
                for (let item of ourCryptiButton) {
                    if (item.parentNode.parentNode.parentNode.id == 2) {
                        $(item).attr('src', fullSrcForElement);
                    }
                }
                // 

                // Кнопки где данные ( ввод данных )
                let dataIconSecond = $('.exchange-data-box-item__row-img--second')
                $(dataIconSecond).attr('src', fullSrcForElement);
                // 

                // Там где вводить емайл иконка
                let emailIcon = $('.exchange-data-form__box-img')
                $(emailIcon).attr('src', fullSrcForElement);
                // 
            } else if (event.currentTarget.id == 22 || event.currentTarget.id == 23) {
                let srcForElement = 'images/reserves-icon-'
                let srcForElementThree = '.svg'
                let fullSrcForElement = srcForElement + '21' + srcForElementThree

                // Кнопки где отдаете получаете ( их иконки )
                let ourCryptiButton = $('.exchange-column-top__info-crypti')
                for (let item of ourCryptiButton) {
                    if (item.parentNode.parentNode.parentNode.id == 2) {
                        $(item).attr('src', fullSrcForElement);
                    }
                }
                // 

                // Кнопки где данные ( ввод данных )
                let dataIconSecond = $('.exchange-data-box-item__row-img--second')
                $(dataIconSecond).attr('src', fullSrcForElement);
                // 

                // Там где вводить емайл иконка
                let emailIcon = $('.exchange-data-form__box-img')
                $(emailIcon).attr('src', fullSrcForElement);
                // 
            } else {
                let srcForElement = 'images/reserves-icon-'
                let srcForElementTwo = event.currentTarget.id
                let srcForElementThree = '.png'
                let fullSrcForElement = srcForElement + srcForElementTwo + srcForElementThree

                // Кнопки где отдаете получаете ( их иконки )
                let ourCryptiButton = $('.exchange-column-top__info-crypti')
                for (let item of ourCryptiButton) {
                    if (item.parentNode.parentNode.parentNode.id == 2) {
                        $(item).attr('src', fullSrcForElement);
                    }
                }
                // 

                // Кнопки где данные ( ввод данных )
                let dataIconSecond = $('.exchange-data-box-item__row-img--second')
                $(dataIconSecond).attr('src', fullSrcForElement);
                // 

                // Там где вводить емайл иконка
                let emailIcon = $('.exchange-data-form__box-img')
                $(emailIcon).attr('src', fullSrcForElement);
                // 
            }

            // Добавляем текст в поле ввода данных ( где показывает что отдаем и что получаем )
            let dataReturnLine = $(event.currentTarget).text()
            let ourDataReturnLineResult = dataReturnLine.toString()
            $('.exchange-data-box-item__row-text--second').text(ourDataReturnLineResult)
            // 

            // Добавляем маленькую приставку текста что это за монета в поле вводе данных
            let ourFirstShortWord = $('.exchange-data-box-item__info-text--spsecond')
            let ourListOfShortWords = $('.main-reserves-list__price-digit-text')
            for (let shortWord of ourListOfShortWords) {
                if (shortWord.id == event.currentTarget.id) {
                    let ourLasText = $(shortWord).text()
                    $(ourFirstShortWord).text(ourLasText)
                }
            }
            // 

        }
    });

    // Меняем количество монет которое хотим отдать в самой правой колонки, привязано до инпута 
    $('.exchange-column-top__info-text--first').on('input', function (event) {
        let valueOfFirstInput = event.currentTarget.value
        $('.exchange-data-box-item__info-text--first').text(valueOfFirstInput)
    });
})

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
