const hamburger = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector(".mobile-menu-close");
const mobileNav = document.querySelector(".nav-container");

hamburger.addEventListener("click", function () {
  mobileNav.classList.add("open");
});

hamburgerClose.addEventListener("click", function () {
  mobileNav.classList.remove("open");
});

const shippingHeader = document.querySelector(".shipping-tax");
const shippingTitle = document.querySelector(".shipping-tax p");
const countrySelect = document.querySelector(".select");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");

shippingHeader.addEventListener("click", function () {
  countrySelect.classList.toggle("open");
  shippingTitle.classList.toggle("open");
  openIcon.classList.toggle("hide");
  closeIcon.classList.toggle("show");
});
