//Hamburger Nav menu

const toggleButton = document.getElementsByClassName("toggle-button")[0];

const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  navBarLinks.classList.toggle("active");
});

// NAv Links

const homeLink = document.getElementsByClassName("homeLink")[0];

homeLink.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#home").scrollIntoView({
    behavior: "smooth",
  });
  navBarLinks.classList.toggle("active");
});

const acercaLink = document.getElementsByClassName("acercaLink")[0];

acercaLink.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#acerca").scrollIntoView({
    behavior: "smooth",
  });
  navBarLinks.classList.toggle("active");
});

const nuestroCafeLink = document.getElementsByClassName("cafeLink")[0];

nuestroCafeLink.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#nuestroCafe").scrollIntoView({
    behavior: "smooth",
  });
  navBarLinks.classList.toggle("active");
});

const contactosLink = document.getElementsByClassName("contactosLink")[0];

contactosLink.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#contactenos").scrollIntoView({
    behavior: "smooth",
  });
  navBarLinks.classList.toggle("active");
});

//Nav menu  background

const navBackground = document.querySelector(".navbar");

window.onscroll = function () {
  let top = window.scrollY;

  if (top >= 100) {
    navBackground.classList.add("activebar");
  } else {
    navBackground.classList.remove("activebar");
  }
};

//Images appear on scroll

const callback = function (entries) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("is-visible");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function (target) {
  observer.observe(target);
});
