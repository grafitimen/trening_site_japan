// Меню бургер начало

(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.scrollY > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

// Burger handler 

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
}());

(function () {
    const menuClose = document.querySelector('.header__nav-close');
    const menu = document.querySelector('.header__nav');
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
}());

// Меню бургер конец