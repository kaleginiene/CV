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
  slidesPerGroup: 1,
  scrollbar: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // zoom: true,
  // zoom: {
  //   maxRatio: 2,
  // },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: false,
  },
  breakpoints: {
    480: {
      spaceBetween: 5,
      slidesPerView: 3,
      centeredSlides: false,
      watchOverflow: true,
      loopedSlides: 3,
    },
  },
});
