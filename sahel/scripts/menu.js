const menuButton = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-btn-icon");
const navBar = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-links");

function toggleNavBar() {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
  navBar.classList.toggle("open");
}

menuButton.addEventListener("click", toggleNavBar);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", toggleNavBar);
});
