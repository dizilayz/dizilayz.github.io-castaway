
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.gallery__right',
        prevEl: '.gallery__left',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction', 
        formatFractionCurrent: function (number) {
            return number; 
        },
        formatFractionTotal: function (number) {
            return number; 
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                ' / ' +
                '<span class="' + totalClass + '"></span>';
        },
    },
});