// const dayOfWeek = document.querySelector('.week1-day');
// dayOfWeek.addEventListener('click', function){
//     dayOfWeek.classList.add(".active")
// }

$('.menu__btn').on('click', function() {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
});

$('.menu__list-link').on('click', function() {
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');
});