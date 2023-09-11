/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function() {

// футер меню начало

$(function () {
    let menuLi = $('.footer__menu-item');
    // Кнопки Открыть
    let openBtnCompany = $('.footer__menu_open-company');
    let openBtnLocations = $('.footer__menu_open-locations');
    let openBtnSocial = $('.footer__menu_open-social');
    // Кнопки закрыть
    let closeBtnCompany = $('.footer__menu_close-company');
    let closeBtnLocations = $('.footer__menu_close-locations');
    let closeBtnSocial = $('.footer__menu_close-social');
    // Списки
    let ulSocial = $('.footer__menu-social');
    let ulLocations = $('.footer__menu-locations');
    let ulCompany = $('.footer__menu-company');
    
    // Скрыть кнопки close
    closeBtnCompany.hide();
    closeBtnLocations.hide();
    closeBtnSocial.hide();

    // Спрятать списки
    ulSocial.slideUp(0);
    ulLocations.slideUp(0);
    ulCompany.slideUp(0);

    // Сворачивает разворачивает список Company 

    openBtnCompany.click(function () {
        ulCompany.slideDown(600);
        openBtnCompany.hide();
        closeBtnCompany.slideDown(0);
    });

    closeBtnCompany.click(function () {
        ulCompany.slideUp(600);
        closeBtnCompany.hide();
        openBtnCompany.slideDown(0);
    });

    // Сворачивает разворачивает список Locations 

    openBtnLocations.click(function () {
        ulLocations.slideDown(600);
        openBtnLocations.hide();
        closeBtnLocations.slideDown(0);
    });

    closeBtnLocations.click(function () {
        ulLocations.slideUp(600);
        closeBtnLocations.hide();
        openBtnLocations.slideDown(0);
    });


    // Сворачивает разворачивает список Social 

    openBtnSocial.click(function () {
        ulSocial.slideDown(500);
        openBtnSocial.hide();
        closeBtnSocial.slideDown(0);
    });

    closeBtnSocial.click(function () {
        ulSocial.slideUp(500);
        closeBtnSocial.hide();
        openBtnSocial.slideDown(0);
    });


});

// футер меню конец

/***/ }),
/* 2 */
/***/ (function() {

// Скролл шапки начало
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

// Скролл шапки конец

/***/ }),
/* 3 */
/***/ (function() {

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

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _footer_menu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_menu_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scroll_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _scroll_header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scroll_header_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _burger_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _burger_menu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_burger_menu_js__WEBPACK_IMPORTED_MODULE_2__);





}();
/******/ })()
;