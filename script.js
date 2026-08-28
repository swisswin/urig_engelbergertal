// ================================
// NAVIGATION TOGGLE
// ================================

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navToggle.contains(event.target) || navMenu.contains(event.target);
        if (!isClickInside && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// ================================
// CONTACT FORM HANDLING
// ================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const subject = contactForm.querySelector('input[placeholder="Betreff"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Simple validation
            if (name && email && message) {
                // You can add email sending functionality here
                // For now, just show a success message
                alert('Danke für deine Nachricht! Wir werden dich bald kontaktieren.');
                contactForm.reset();
            } else {
                alert('Bitte fülle alle erforderlichen Felder aus.');
            }
        });
    }
});

// ================================
// SMOOTH SCROLL OFFSET FOR FIXED HEADER
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// DYNAMIC YEAR IN FOOTER
// ================================

document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.textContent = `© ${year} URIG ENGELBERGERTAL. Alle Rechte vorbehalten.`;
    }
});
