const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
function increase(btn) {
  let count = btn.previousElementSibling;
  count.innerText = parseInt(count.innerText) + 1;
}

function decrease(btn) {
  let count = btn.nextElementSibling;
  let value = parseInt(count.innerText);
  if (value > 0) {
    count.innerText = value - 1;
  }
}
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
