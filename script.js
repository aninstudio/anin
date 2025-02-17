document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Effect
const sections = document.querySelectorAll('.content h2, .content p, .content ul li');

window.addEventListener('scroll', function() {
    sections.forEach(sec => {
        const sectionTop = sec.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            sec.style.opacity = '1';
            sec.style.transform = 'translateY(0)';
        }
    });
});

// Apply initial animation properties
sections.forEach(sec => {
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(50px)';
    sec.style.transition = 'all 0.6s ease-out';
});
