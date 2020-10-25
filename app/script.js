//About-me animation
window.addEventListener("load", (event) => {
  const timer = document.querySelectorAll(".typing");
  setTimeout(function () {
    timer.forEach((item) => {
      item.style.opacity = "1";
    });
  }, 2000);
});

//Swiper initialization

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  loopedSlides: 1,
  spaceBetween: 1,
  centeredSlides: true,
  scrollbar: true,
  allowSlideNext: true,
  allowSlidePrev: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: false,
  },
  breakpoints: {
    480: {
      spaceBetween: 5,
      slidesPerView: 1,
      centeredSlides: true,
      watchOverflow: true,
      loopedSlides: 1,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
    mousewheel: {
      invert: true,
    },
    keyboard: true,
    observer: true,
    observeParents: true,
    parallax: true,
  },
});
