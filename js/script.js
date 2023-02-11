// toggle active
const navbarNav = document.querySelector(".navbar-nav");
// Menu
document.querySelector("#Menu-bar").onclick = () => {
  navbarNav.classList.toggle("active");
};

//menghilangkan menu
const barMenu = document.querySelector("#Menu-bar");
document.addEventListener("click", function (e) {
  if (!barMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
