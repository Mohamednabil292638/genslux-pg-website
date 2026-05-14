/**
 * Gens PG - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const links = document.querySelectorAll('.nav-links li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });

    // 2. Sticky Navbar scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }
        });
    }

    // 3. Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. WhatsApp Inquiry Form Submission
    const inquiryForm = document.querySelector('.contact-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default HTTP submission
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const roomType = document.getElementById('room_type').value;
            const message = document.getElementById('message').value.trim();
            
            // JS Validation
            if (!name || !phone || !roomType) {
                alert('Please fill out your Name, Phone Number, and select a Room Type.');
                return;
            }
            
            // Construct formatted WhatsApp message
            const waNumber = '917010676960';
            const waText = `New PG Inquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nRoom Type: ${roomType}\nMessage: ${message}`;
            
            // Create WhatsApp URL
            const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;
            
            // Open in new tab
            window.open(waUrl, '_blank');
        });
    }

    // 5. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.room-card, .room-detailed-card, .amenity-card, .feature-card, .contact-card, .masonry-item, .gallery-item, .why-us-content, .about-split-layout');
    
    if (revealElements.length > 0) {
        // Initial setup
        revealElements.forEach(el => el.classList.add('reveal'));

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const revealPoint = 50;

            revealElements.forEach(el => {
                const revealTop = el.getBoundingClientRect().top;
                if (revealTop < windowHeight - revealPoint) {
                    el.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Trigger once on load
    }

    // 6. Scroll To Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
