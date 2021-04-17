"use strict";


/* Определение устройства */ 

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Androis/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPAd|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   Responsive: function () {
      return navigator.userAgent.match(/Responsive/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows() ||
         isMobile.Responsive());
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');

   let menuArrows = document.querySelectorAll('.menu__arrow');
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener("click", function (e) {
            menuArrow.parentElement.classList.toggle('_active');
         });
      }
   }
} else {
   document.body.classList.add('_pc');
};

/* *******************
   Нажатие на бургер
******************* */

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   const menuBody = document.querySelector('.nav__ul');
   iconMenu.addEventListener("click", function(e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
};