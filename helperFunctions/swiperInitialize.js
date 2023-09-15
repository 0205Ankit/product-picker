import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const slidesPerView = () => {
  if (window.innerWidth < 600) {
    return 1;
  } else if (window.innerWidth < 1100 && window.innerWidth >= 600) {
    return 2;
  } else if (window.innerWidth < 1600 && window.innerWidth >= 1100) {
    return 4;
  } else if (window.innerWidth < 2200 && window.innerWidth >= 1600) {
    return 5;
  } else {
    return 6;
  }
};

export const swiper = () => {
  const swiperInstance = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: slidesPerView(),
    slidesPerGroup: 1,
    spaceBetween: 30,
  });

  document.getElementById("next_button").addEventListener("click", function () {
    swiperInstance.slideNext();
  });

  document.getElementById("prev_button").addEventListener("click", function () {
    swiperInstance.slidePrev();
  });
};
