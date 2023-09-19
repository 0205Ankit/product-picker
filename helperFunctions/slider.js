export const slider = () => {
  let counter = 0;
  const slideContainer = document.querySelector(".slider-slide-container");
  const allSlides = document.querySelectorAll(".slider-slide");
  const slide = document.querySelector(".slider-slide");
  const prevButton = document.querySelector("#prev_button");
  const nextButton = document.querySelector("#next_button");

  const slidesPerView = () => {
    if (window.innerWidth < 1000 && window.innerWidth > 800) {
      return 3;
    }
    if (window.innerWidth < 800 && window.innerWidth > 600) {
      return 2;
    }
    if (window.innerWidth < 600) {
      return 1;
    } else {
      return 4;
    }
  };

  const checkCounter = () => {
    if (counter === 0) {
      prevButton.style.display = "none";
    } else {
      prevButton.style.display = "inline-block";
    }

    if (counter === allSlides.length - slidesPerView()) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "inline-block";
    }
  };
  checkCounter();

  nextButton.addEventListener("click", function (e) {
    counter = counter + 1;
    checkCounter();
    slideContainer.style.transform = `translateX(-${
      counter * slide.clientWidth
    }px)`;
  });

  prevButton.addEventListener("click", function (e) {
    counter = counter - 1;
    checkCounter();
    slideContainer.style.transform = `translateX(-${
      counter * slide.clientWidth
    }px)`;
  });
};
