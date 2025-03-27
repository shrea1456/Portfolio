// script.js

// Toggle the navbar menu on small screens (Mobile)
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle 'active' class on navbar
});

// Smooth scroll effect for navigation links
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent the default link behavior

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,  // Small offset to account for fixed header
            behavior: 'smooth'  // Smooth scroll effect
        });
    });
});
