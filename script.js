/* script.js */
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);

  const scrollBtn = document.querySelector(".scroll-top-btn");
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

AOS.init();
