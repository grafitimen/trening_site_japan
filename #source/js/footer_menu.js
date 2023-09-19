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
    ulCompany.fadeOut(0);
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
    ulLocations.fadeOut(0);
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
    ulSocial.fadeOut(0);
    closeBtnSocial.hide();
    openBtnSocial.slideDown(0);
  });
});

// футер меню конец
