const navButton = document.querySelector(".nav__button");
const mobileNav = document.querySelector(".mobile__nav");
const body = document.body;

const toggleMobileNav = () => {
  mobileNav.classList.toggle("mobile__nav-active");
  navButton.classList.toggle("nav__button-close");
  body.classList.toggle("no-scroll");
};

// Клик по кнопке
navButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMobileNav();
});

// Клик за пределами навигации
window.addEventListener("click", function () {
  if (body.classList.contains("no-scroll")) {
    toggleMobileNav();
  }
});

// Остановка клика внутри открытой мобильной навигации
mobileNav.addEventListener("click", function (event) {
  event.stopPropagation();
});
