// ========================================
// FUNCIONES DE APOYO
// ========================================

const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// ========================================
// SISTEMA DE FILTROS
// ========================================

const filterLinks = document.querySelectorAll('.nav-link[data-filter]');
const projectCards = document.querySelectorAll('.project-card-new');

filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Actualizar enlaces activos
        filterLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        const filter = link.getAttribute('data-filter');
        
        // Filtrar proyectos
        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');
            
            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
        
        // Actualizar contador filtrado
        const projectCountEl = document.getElementById('projectCount');
        if (projectCountEl) {
            const visibleCount = Array.from(projectCards).filter(c => c.style.display !== 'none').length;
            const currentValue = parseInt(projectCountEl.textContent) || 0;
            animateValue(projectCountEl, currentValue, visibleCount, 500);
        }
    });
});


// ========================================
// NAVEGACIÓN MÓVIL
// ========================================

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animación del botón hamburguesa
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

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

// ========================================
// ANIMACIÓN DE APARICIÓN AL SCROLL
// ========================================

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
const animateElements = document.querySelectorAll('.project-card-new, .upcoming-card');

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ========================================
// EFECTO PARALLAX EN HERO
// ========================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < 800) {
        heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
        heroContent.style.opacity = 1 - (scrolled / 800);
    }
});

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                // Calcular valor real según el ID
                let finalValue = 0;
                if (statNumber.id === 'projectCount') {
                    finalValue = document.querySelectorAll('.projects-grid .project-card-new').length;
                } else if (statNumber.id === 'upcomingCount') {
                    finalValue = document.querySelectorAll('.upcoming-grid .upcoming-card').length;
                } else {
                    finalValue = parseInt(statNumber.textContent) || 0;
                }
                
                statNumber.textContent = '0';
                animateValue(statNumber, 0, finalValue, 1500);
                statNumber.classList.add('animated');
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// ========================================
// GALERÍA DE IMÁGENES - SISTEMA COMPLETO
// ========================================

// Datos de proyectos con sus imágenes

// Inicializar galerías - se cargará con getProjectGalleries() cuando esté disponible
let projectGalleries = null;

// Función para inicializar/actualizar galerías
function initProjectGalleries() {
    if (typeof getProjectGalleries === 'function') {
        projectGalleries = getProjectGalleries();
        console.log('✓ Galerías Khabala cargadas con traducciones dinámicas');
    } else {
        // Fallback si translations.js aún no está disponible
        console.warn('getProjectGalleries() no disponible, usando datos estáticos');
        loadStaticGalleries();
    }
}

// Fallback: Cargar datos estáticos de galerías
function loadStaticGalleries() {
    projectGalleries = {
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
                src: 'Img/projects/villadrone.png',
                caption: 'Dashboard principal de Villa Drone'
            }
        ]
    },
    'crean': {
        title: 'C.R.E.A.N - Sistema de Inventarios',
        images: [
            {
                src: 'Img/projects/qonvertir.png',
                caption: 'Panel Administrativo (Placeholder)'
            }
        ]
    },
    'formula-deportiva': {
        title: 'Fórmula Deportiva',
        images: [
            {
                src: 'Img/projects/formula.png',
                caption: 'Plataforma Fórmula Deportiva Live'
            }
        ]
    }
};
    };


// Intentar inicializar galerías inmediatamente
initProjectGalleries();

// También reinicializar cuando DOMContentLoaded para asegurar que translations.js esté cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initProjectGalleries();
    });
} else {
    // El DOM ya está listo
    initProjectGalleries();
}

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
        // Mostrar modal personalizado en lugar de alert
        showNoImagesModal();
        return;
    }
    
    currentImageIndex = 0;
    galleryTitle.textContent = currentGallery.title;
    
    // Cargar imagen inicial
    updateGalleryImage();
    
    // Crear thumbnails
    createThumbnails();
    
    // Mostrar modal
    galleryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Nueva función para mostrar modal de no imágenes
function showNoImagesModal() {
    const noImagesModal = document.getElementById('noImagesModal');
    noImagesModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Cerrar modal de no imágenes
function closeNoImagesModal() {
    const noImagesModal = document.getElementById('noImagesModal');
    noImagesModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners para el modal de no imágenes
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
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && noImagesModal && noImagesModal.classList.contains('active')) {
            closeNoImagesModal();
        }
    });
});

function updateGalleryImage() {
    const image = currentGallery.images[currentImageIndex];
    galleryImage.src = image.src;
    galleryImage.alt = image.caption;
    galleryCaption.textContent = image.caption;
    
    // Actualizar thumbnails activos
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

// Cerrar galería
function closeGallery() {
    galleryModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentGallery = null;
    currentImageIndex = 0;
}

if (galleryClose) {
    galleryClose.addEventListener('click', closeGallery);
}

// Cerrar al hacer clic fuera del contenido
if (galleryModal) {
    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            closeGallery();
        }
    });
}

// Navegación de imágenes
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

// Navegación con teclado
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

// Animación de entrada de imágenes
if (galleryImage) {
    galleryImage.addEventListener('load', () => {
        galleryImage.style.animation = 'none';
        setTimeout(() => {
            galleryImage.style.animation = 'fadeIn 0.3s ease';
        }, 10);
    });
}

// Agregar animación CSS
const galleryStyles = document.createElement('style');
galleryStyles.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(galleryStyles);

// ========================================
// EFECTO RIPPLE EN CLICKS
// ========================================

document.querySelectorAll('.btn-primary, .btn-secondary, .gallery-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ========================================
// EASTER EGG - KONAMI CODE
// ========================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
    
    if (konamiCode.join('').includes(konamiPattern.join(''))) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Actualizar contador inicial
document.addEventListener('DOMContentLoaded', () => {
    updateProjectCount();
});

// ========================================
// LOG DE CONSOLA
// ========================================

console.log('%c🚀 KHABALA PROJECTS', 'font-size: 24px; font-weight: bold; color: #8b5cf6; text-shadow: 2px 2px 4px rgba(139, 92, 246, 0.3);');
console.log('%c✨ Portfolio cargado exitosamente', 'font-size: 14px; color: #10b981; font-weight: bold;');
console.log('%c📧 Contacto: perezverdin2004g@gmail.com', 'font-size: 12px; color: #9ca3af;');
console.log('%c💼 ¿Quieres trabajar juntos? ¡Hablemos!', 'font-size: 12px; color: #a78bfa;');

/* ========================================
   MODERN UPGRADES: CURSOR, SPA TRANSITION
   ======================================== */

// 1. Logica del Cursor Personalizado
(function initCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            cursorDot.style.opacity = '1';

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: 'forwards' });
            cursorOutline.style.opacity = '1';
        });

        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card-new');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
                cursorOutline.style.borderColor = 'transparent';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.backgroundColor = 'transparent';
                cursorOutline.style.borderColor = 'var(--primary)';
            });
        });
    }
})();

// 2. Transición SPA de vuelta a casa
(function initSPABack() {
    const backTrigger = document.querySelector('.nav-logo[href="index.html"]');
    const overlay = document.querySelector('.page-transition-overlay');

    if (backTrigger && overlay) {
        backTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.classList.add('active');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 600);
        });
    }

    // Quitar overlay al cargar
    window.addEventListener('load', () => {
        if (overlay) {
            setTimeout(() => overlay.classList.remove('active'), 300);
        }
    });

    // Asegurar que el overlay desaparezca si se navega con el botón de atrás
    window.addEventListener('pageshow', (event) => {
        if (event.persisted && overlay) {
            overlay.classList.remove('active');
        }
    });
})();