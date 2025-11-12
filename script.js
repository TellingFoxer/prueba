// Side navigation: botón en esquina y menú que aparece al hacer click o hover
const menuBtn = document.querySelector('.menu-btn');
const sideNav = document.querySelector('.side-nav');
const closeBtn = document.querySelector('.close-btn');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

function openSideNav() {
    if (!sideNav) return;
    sideNav.classList.add('active');
    sideNav.setAttribute('aria-hidden', 'false');
}

function closeSideNav() {
    if (!sideNav) return;
    sideNav.classList.remove('active');
    sideNav.setAttribute('aria-hidden', 'true');
}

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        sideNav.classList.toggle('active');
        const open = sideNav.classList.contains('active');
        sideNav.setAttribute('aria-hidden', String(!open));
    });

    // Abrir con hover (opcional): pasar el mouse por encima del botón abre el menú
    menuBtn.addEventListener('mouseenter', () => openSideNav());

    // Cerrar cuando el ratón sale del menú
    if (sideNav) {
        sideNav.addEventListener('mouseleave', () => closeSideNav());
    }
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => closeSideNav());
}

// Close side nav when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSideNav();
    });
});

document.querySelector('.cta-button').addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Cambiar estilo del botón de menú al hacer scroll (sutil)
const menuButton = document.querySelector('.menu-btn');
window.addEventListener('scroll', () => {
    if (!menuButton) return;
    if (window.scrollY > 50) {
        menuButton.style.backdropFilter = 'blur(8px)';
        menuButton.style.boxShadow = '0 6px 20px rgba(0,0,0,0.6)';
    } else {
        menuButton.style.backdropFilter = 'blur(6px)';
        menuButton.style.boxShadow = 'none';
    }
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--highlight-color)';
        } else {
            link.style.color = 'var(--text-color)';
        }
    });
});

// Intersection Observer para animaciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar tarjetas de proyectos
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Observar categorías de habilidades
document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
});

// Observar estadísticas
document.querySelectorAll('.stat').forEach(stat => {
    observer.observe(stat);
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Gracias por tu mensaje. Te contactaré pronto.');
        contactForm.reset();
    });
}


// Animación de contador de estadísticas
function animateCounters() {
    const stats = document.querySelectorAll('.stat h3');
    
    const observerStats = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text);
                const duration = 2000;
                const increment = number / (duration / 50);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        target.textContent = text;
                        clearInterval(timer);
                    } else {
                        target.textContent = Math.floor(current) + '+';
                    }
                }, 50);
                
                observerStats.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => {
        observerStats.observe(stat);
    });
}

animateCounters();

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('Portfolio loaded successfully! 🚀');
