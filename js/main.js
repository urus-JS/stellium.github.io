const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu__list--open');
});

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
});

let swiperimg = new Swiper('.swiper__img', {

  navigation: {
    prevEl: '.out-prev',
    nextEl: '.out-next'
  },

  pagination: {
    el: '.programm__swiper-pagination',
    clickable: true
  },

  slidesPerGroup: 1,
  loop: true,
  speed: 500,
  // watchSlidesProgress: true,

  breakpoints: {
    320:{
      slidesPerView: 1,
    },
    520:{
      slidesPerView: 2,
    },
    992:{
      slidesPerView: 3,
    },
    1110:{
      slidesPerView: 4,
    },
    1440:{
      slidesPerView: 5,
    },
  },
  // autoplay: {
  //   delay: 4000,
  //   stopOnLastSlide: true,
  //   disibleoOnlinteraction: false,
  // }
  
});


let swipertext = new Swiper('.swiper__text', {

  navigation: {
    prevEl: '.out-prev',
    nextEl: '.out-next'
  },

  pagination: {
    el: '.programm__swiper-pagination',
    clickable: true,
  },

  loop: true,
  slidesPerView: 1,
  initialSlide: 2,
  speed: 500,

  thumbs: {
    swiper: swiperimg
  },

  controller: {
    by: 'container'
  }

  // autoplay: {
  //   delay: 4000,
  //   stopOnLastSlide: true,
  //   disibleoOnlinteraction: false,
  // }

});



let swiperleft = new Swiper('.swiper__left', {

  navigation: {
    prevEl: '.pag-prev',
    nextEl: '.pag-next'
  },

  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  slidesPerGroup: 1,
  speed: 500,
  watchSlidesProgress: true,
  direction: 'vertical'

});

let swiperriht = new Swiper('.swiper__riht', {

  navigation: {
    prevEl: '.pag-prev',
    nextEl: '.pag-next'
  },

  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  slidesPerGroup: 1,
  watchSlidesProgress: true,

});

let swiperchannel = new Swiper('.swiper__channel', {

  navigation: {
    prevEl: '.pag-prev',
    nextEl: '.pag-next'
  },

  pagination: {
    el: '.channel__pagination',
    clickable: true,
  },

  slidesPerGroup: 1,
  loop: true,
  speed: 500,
  spaceBetween: 50,

  thumbs: {
    swiper: '.swiper__left',
  },

  thumbs: {
    swiper: '.swiper__riht',
  },


  breakpoints: {
    320:{
      slidesPerView: 1,
    },
    440:{
      slidesPerView: 2,
    },
    650:{
      slidesPerView: 3,
    },
    992:{
      slidesPerView: 4,
    },
    1280:{
      slidesPerView: 5,
      spaceBetween: 30,
    }
  },
  
});




let parthnersLeftSwiper = new Swiper('.parthners__left--swiper', {

  navigation: {
    prevEl: '.stick-prev',
    nextEl: '.stick-next'
  },

  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  slidesPerGroup: 1,
  watchSlidesProgress: true,
  speed: 500,
});

let parthnersRightSwiper = new Swiper('.parthners__right--swiper', {

  navigation: {
    prevEl: '.stick-prev',
    nextEl: '.stick-next'
  },

  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  slidesPerGroup: 1,
  direction: 'vertical',
  watchSlidesProgress: true,
  speed: 500,
});

let parthnersSwiper = new Swiper('.parthners__swiper', {

  navigation: {
    prevEl: '.stick-prev',
    nextEl: '.stick-next'
  },

  slidesPerView: 6,
  loop: true,
  slidesPerGroup: 1,
  speed: 500,

  thumbs: {
    swiper: '.parthners__left--swiper',
  },

  thumbs: {
    swiper: '.parthners__right--swiper',
  },

  breakpoints: {
    120:{
      slidesPerView: 1,
    },
    320:{
      slidesPerView: 2,
    },
    520:{
      slidesPerView: 3,
    },
    992:{
      slidesPerView: 4,
    },
    1110:{
      slidesPerView: 5,
    },
    1280:{
      slidesPerView: 6,
    }
  },

});

