const navMenu = document.querySelector(".nav-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});