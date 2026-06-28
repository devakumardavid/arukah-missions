const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => navLinks.classList.toggle("open"));
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "Thank you. This demo form is ready to connect to Google Forms, Airtable, Formspree, or a backend workflow.";
    contactForm.reset();
  });
}
