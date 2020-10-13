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
  spaceBetween: 5,
  slidesPerView: 3,
  centeredSlides: false,
  watchOverflow: true,	
  loop: true,
  loopedSlides: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
