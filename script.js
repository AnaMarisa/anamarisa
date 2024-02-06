document.addEventListener("DOMContentLoaded", function () {
  const navbarNav = document.querySelector(".navbar-links");
  const hamburger = document.querySelector("#hamburger-menu");

  hamburger.onclick = () => {
    // console.log("Hamburger Clicked");
    navbarNav.classList.toggle("active");
  };

  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
});
