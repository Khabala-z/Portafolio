// Navegación móvil
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animación del botón hamburguesa
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
});

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Reset botón hamburguesa
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Animación de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elementos a animar
const animateElements = document.querySelectorAll('.project-card, .skill-badge, .stat-card, .timeline-item, .contact-card, .about-card, .language-card');

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Efecto parallax suave en el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.4}px)`;
        hero.style.opacity = 1 - (scrolled / 800);
    }
});

// Animación del avatar en hover
const avatar = document.querySelector('.avatar-placeholder');
if (avatar) {
    avatar.addEventListener('mouseenter', () => {
        avatar.style.transform = 'scale(1.05) rotate(5deg)';
    });
    
    avatar.addEventListener('mouseleave', () => {
        avatar.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Contador animado para stats
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value === 2025 ? value : value + '+';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Observer para stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                const finalValue = parseInt(statNumber.textContent);
                statNumber.textContent = '0';
                animateValue(statNumber, 0, finalValue, 2000);
                statNumber.classList.add('animated');
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});

// Resaltar enlace activo en navegación
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Preloader (opcional)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Efecto de brillo en hover para project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Log de bienvenida en consola
console.log('%c¡Hola! 👋', 'font-size: 20px; font-weight: bold; color: #8b5cf6;');
console.log('%cGracias por visitar mi portafolio', 'font-size: 14px; color: #a78bfa;');
console.log('%c¿Quieres trabajar juntos? Contáctame en: perezverdin2004g@gmail.com', 'font-size: 12px; color: #9ca3af;');

// Función para copiar email al clipboard
function copyEmail() {
    const email = 'perezverdin2004g@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        // Mostrar notificación temporal
        const notification = document.createElement('div');
        notification.textContent = '✓ Email copiado al portapapeles';
        notification.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-weight: 700;
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    });
}

// Añadir funcionalidad de copiar email
const emailCard = document.querySelector('.contact-card[href^="mailto"]');
if (emailCard) {
    emailCard.addEventListener('click', (e) => {
        e.preventDefault();
        copyEmail();
    });
}

// Performance optimization - Lazy load images cuando las añadas
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

// Observar todas las imágenes con data-src
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

console.log('%c✨ Portfolio cargado exitosamente', 'font-size: 12px; color: #10b981; font-weight: bold;');

// ========================================
// GALERÍA DE IMÁGENES - SISTEMA COMPLETO
// ========================================

// Datos de proyectos con sus imágenes
// ========================================
// GALERÍA DE IMÁGENES - SISTEMA COMPLETO
// ========================================

// Datos de proyectos con sus imágenes
const projectGalleries = {
    'qonvertir': {
        title: 'QONVERTIR',
        images: [
            {
                src: 'Img/galleries/qonvertir/qonvertir.png',
                caption: 'Página principal con todas las herramientas'
            },
            {
                src: 'Img/galleries/qonvertir/qon.png',
                caption: 'Generador de códigos QR'
            },
            {
                src: 'Img/galleries/qonvertir/qon2.png',
                caption: 'Herramientas PDF'
            },
            {
                src: 'Img/galleries/qonvertir/qon3.png',
                caption: 'Compresor de Imagenes'
            },
        ]
    },
    'calcumas': {
        title: 'CALCUMAS',
        images: [
            {
                src: 'Img/galleries/calcumas/calcumas.png',
                caption: 'Página de inicio con las 4 calculadoras'
            },
            {
                src: 'Img/galleries/calcumas/cal4.png',
                caption: 'Calculadora científica'
            },
            {
                src: 'Img/galleries/calcumas/cal.png',
                caption: 'Calculadora de IMC y calorías'
            },
            {
                src: 'Img/galleries/calcumas/cal2.png',
                caption: 'Calculadora de salario neto México'
            },
            {
                src: 'Img/galleries/calcumas/cal3.png',
                caption: 'Calculadora de Prestamos'
            }
        ]
    },
    'naiya': {
        title: 'Naiya: La voz que une culturas',
        images: [
            {
                src: 'Img/galleries/naiya/naiya.png',
                caption: 'Pantalla principal'
            },
            {
                src: 'Img/galleries/naiya/nai2.png',
                caption: 'Comunidad'
            },
            {
                src: 'Img/galleries/naiya/nai3.png',
                caption: 'Notas'
            },
            {
                src: 'Img/galleries/naiya/nai4.png',
                caption: 'Estudio'
            },
            {
                src: 'Img/galleries/naiya/nai5.png',
                caption: 'Ajuste'
            }
        ]
    },
    'ad-plus': {
        title: 'AD+ - Proyecto de Videojuegos',
        images: []
    },
    'mirugo': {
        title: 'MIRUGO - Streaming Platform',
        images: [
               {
                src: 'Img/galleries/mirugo/mirugo.png',
                caption: 'Página principal de Inicio'
            },
            {
                src: 'Img/galleries/mirugo/mir3.png',
                caption: 'Inicio de Sesion'
            },
            {
                src: 'Img/galleries/mirugo/mir2.png',
                caption: 'Creador de Perfiles'
            },
            {
                src: 'Img/galleries/mirugo/mir4.png',
                caption: 'Catálogo de contenido'
            },
            {
                src: 'Img/galleries/mirugo/mir5.png',
                caption: 'Reproductor de video'
            }
        ]
    },
    'blockcortex': {
        title: 'BLOCKCORTEX - IA Híbrida con Blockchain',
        images: []
    },
     'villadrone': {
        title: 'Villa Drone - Sistema Agrícola',
        images: [
            {
                src: 'Img/galleries/villadrone/villadrone.png',
                caption: 'Dashboard principal con métricas'
            }
        ]
    
    },
    'crean': {
        title: 'C.R.E.A.N - Sistema de Inventarios',
        images: []
    }
};

// Estado de la galería
let currentGallery = null;
let currentImageIndex = 0;

// Elementos del DOM
const galleryModal = document.getElementById('galleryModal');
const galleryTitle = document.getElementById('galleryTitle');
const galleryImage = document.getElementById('galleryImage');
const galleryCaption = document.getElementById('galleryCaption');
const galleryThumbnails = document.getElementById('galleryThumbnails');
const galleryClose = document.querySelector('.gallery-close');
const galleryPrev = document.querySelector('.gallery-prev');
const galleryNext = document.querySelector('.gallery-next');

// Abrir galería
document.querySelectorAll('.gallery-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const projectId = btn.getAttribute('data-project');
        openGallery(projectId);
    });
});

function openGallery(projectId) {
    currentGallery = projectGalleries[projectId];
    
    if (!currentGallery || currentGallery.images.length === 0) {
        showNoImagesModal();
        return;
    }
    
    currentImageIndex = 0;
    galleryTitle.textContent = currentGallery.title;
    
    updateGalleryImage();
    createThumbnails();
    
    galleryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateGalleryImage() {
    const image = currentGallery.images[currentImageIndex];
    galleryImage.src = image.src;
    galleryImage.alt = image.caption;
    galleryCaption.textContent = image.caption;
    
    document.querySelectorAll('.gallery-thumbnail').forEach((thumb, index) => {
        if (index === currentImageIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

function createThumbnails() {
    galleryThumbnails.innerHTML = '';
    
    currentGallery.images.forEach((image, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'gallery-thumbnail';
        if (index === 0) thumb.classList.add('active');
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.caption;
        
        thumb.appendChild(img);
        thumb.addEventListener('click', () => {
            currentImageIndex = index;
            updateGalleryImage();
        });
        
        galleryThumbnails.appendChild(thumb);
    });
}

function closeGallery() {
    galleryModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentGallery = null;
    currentImageIndex = 0;
}

if (galleryClose) {
    galleryClose.addEventListener('click', closeGallery);
}

if (galleryModal) {
    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            closeGallery();
        }
    });
}

if (galleryPrev) {
    galleryPrev.addEventListener('click', () => {
        if (!currentGallery) return;
        
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = currentGallery.images.length - 1;
        }
        updateGalleryImage();
    });
}

if (galleryNext) {
    galleryNext.addEventListener('click', () => {
        if (!currentGallery) return;
        
        currentImageIndex++;
        if (currentImageIndex >= currentGallery.images.length) {
            currentImageIndex = 0;
        }
        updateGalleryImage();
    });
}

document.addEventListener('keydown', (e) => {
    if (!galleryModal || !galleryModal.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeGallery();
    } else if (e.key === 'ArrowLeft') {
        galleryPrev.click();
    } else if (e.key === 'ArrowRight') {
        galleryNext.click();
    }
});

if (galleryImage) {
    galleryImage.addEventListener('load', () => {
        galleryImage.style.animation = 'none';
        setTimeout(() => {
            galleryImage.style.animation = 'fadeIn 0.3s ease';
        }, 10);
    });
}

// Modal de No Imágenes
function showNoImagesModal() {
    const noImagesModal = document.getElementById('noImagesModal');
    noImagesModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeNoImagesModal() {
    const noImagesModal = document.getElementById('noImagesModal');
    noImagesModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
    const noImagesClose = document.getElementById('noImagesClose');
    const noImagesOk = document.getElementById('noImagesOk');
    const noImagesModal = document.getElementById('noImagesModal');

    if (noImagesClose) {
        noImagesClose.addEventListener('click', closeNoImagesModal);
    }

    if (noImagesOk) {
        noImagesOk.addEventListener('click', closeNoImagesModal);
    }

    if (noImagesModal) {
        noImagesModal.addEventListener('click', (e) => {
            if (e.target === noImagesModal) {
                closeNoImagesModal();
            }
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && noImagesModal && noImagesModal.classList.contains('active')) {
            closeNoImagesModal();
        }
    });
});