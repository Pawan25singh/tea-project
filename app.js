// Setup Data
const data = (document.getElementById("data").innerHTML = new Date().getFullYear());
// Setup Nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
// Show nav
navBtn.addEventListener("click", () => {
    navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
    navbar.classList.remove("showNav");
});