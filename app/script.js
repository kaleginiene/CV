window.addEventListener("load", (event) => {
  const timer = document.querySelectorAll(".typing");
  setTimeout(function () {
    timer.forEach((item) => {
      item.style.opacity = "1";
    });
  }, 2000);
  console.log(timer);
});
