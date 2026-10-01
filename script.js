// ===== MOBILE NAVIGATION =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
        if (hamburger) hamburger.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Mobile dropdown toggle
document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.parentElement.classList.toggle('active');
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ===== SCROLL ANIMATIONS =====
function handleScrollAnimations() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(function(el, index) {
        var rect = el.getBoundingClientRect();
        var windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 80) {
            setTimeout(function() {
                el.classList.add('visible');
            }, index * 80);
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(function(question) {
    question.addEventListener('click', function() {
        var item = this.parentElement;
        var isActive = item.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(function(faq) {
            faq.classList.remove('active');
        });

        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===== SMOOTH PAGE TRANSITIONS =====
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 50);
});