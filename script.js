// Mobile navigation toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu after clicking a link for better UX.
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Contact form validation (front-end only)
const form = document.getElementById('contact-form');
const statusText = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    // Reset previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    statusText.textContent = '';

    let isValid = true;

    if (!name.value.trim() || name.value.trim().length < 2) {
      nameError.textContent = 'Please enter at least 2 characters for your name.';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      messageError.textContent = 'Your message must be at least 10 characters long.';
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Simulated success response (no backend for static sites)
    statusText.textContent = 'Thanks! Your message has been validated successfully.';
    form.reset();
  });
}

// Auto-update footer year
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
