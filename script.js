const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const links = document.querySelectorAll(".nav a");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});
