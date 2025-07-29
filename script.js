// Toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');

    function toggleMenu() {
        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none';
            menuButton.setAttribute('aria-expanded', 'false');
        } else {
            navLinks.style.display = 'block';
            menuButton.setAttribute('aria-expanded', 'true');
        }
    }
    menuButton.addEventListener('click', toggleMenu);

    // Reset navigation on resize to ensure correct display
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 600) {
            navLinks.style.display = '';
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });

    // Carousel functionality (manual control)
    let slideIndex = 0;
    showSlide(slideIndex);

    document.querySelector('.prev').addEventListener('click', function() {
        showSlide(slideIndex - 1);
    });
    document.querySelector('.next').addEventListener('click', function() {
        showSlide(slideIndex + 1);
    });

    function showSlide(n) {
        const slides = document.querySelectorAll('.carousel .slides img');
        if (n < 0) { slideIndex = slides.length - 1; }
        else if (n >= slides.length) { slideIndex = 0; }
        else { slideIndex = n; }
        slides.forEach((slide, i) => {
            slide.style.display = (i === slideIndex ? 'block' : 'none');
        });
    }

    // Form validation on submit
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        if (!name || !email) {
            alert('Please fill in both name and email.');
            e.preventDefault();
            return;
        }
        const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            e.preventDefault();
            return;
        }
    });

    // Smooth scroll for "Learn More" button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
});
