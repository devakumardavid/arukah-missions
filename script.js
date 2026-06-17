const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent =
    "Thank you. This demo form is working. Connect it to Google Forms, Airtable, Formspree, or a backend before launch.";
  contactForm.reset();
});
