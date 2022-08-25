// const swiperSlider = (() => {
//   const accountantInit = new Swiper('.js-accountant-slider', {
//     slidesPerView: 2,
//     spaceBetween: 20,
//     speed: 800,
//     centerInsufficientSlides: true,
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true,
//     },
//     breakpoints: {
//       768: {
//         spaceBetween: 40,
//         slidesPerView: 3,
//       },
//     },
//   });

//   const init = () => {};

//   return {
//     init,
//   };

// })();

const swiperMain = (() => {
  const accountantInit = new Swiper('.swiper-main', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    autoplay: {
      delay: 1000500,
      disableOnInteraction: false,
    },
    centerInsufficientSlides: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
    },
  });

  const init = () => {};

  return {
    init,
  };

})();

export default swiperMain;
