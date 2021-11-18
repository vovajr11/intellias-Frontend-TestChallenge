const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const link = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("open");
  link.forEach((link) => {
    link.classList.toggle("fade");
  });
});
