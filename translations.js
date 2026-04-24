/**
 * Sistema de Traducción Profesional - Khabala Portfolio
 */

const translations = {
    es: {
        nav: {
            portfolio: "PORTAFOLIO",
            aboutMe: "Sobre Mí",
            experience: "Experiencia",
            projects: "Proyectos",
            skills: "Habilidades",
            languages: "Idiomas",
            education: "Educación",
            contact: "Contacto"
        },
        hero: {
            subtitle: "Desarrollador de Software",
            khabalaBtn: "PROYECTOS +"
        },
        about: {
            title: "SOBRE MÍ",
            text1: "Ingeniero en Desarrollo de Software especializado en arquitecturas Full Stack con una base sólida en soporte técnico y redes. Experto en transformar necesidades de negocio en soluciones técnicas escalables, desde sistemas GIS agrícolas hasta ERPs gubernamentales. Enfocado en la optimización de procesos mediante automatización, con gran capacidad de adaptación y aprendizaje de nuevas tecnologías."
        },
        exp: {
            title: "EXPERIENCIA",
            job1: {
                date: "Junio 2025 – Abril 2026 | Nayarit, México",
                position: "Desarrollador Full Stack",
                company: "Villa Drone",
                description: "Sistema web de gestión agrícola para automatizar aplicaciones con drones según ciclos fenológicos de cultivos.",
                metric: "Tiempo Real",
                achievements: [
                    "Lideré el desarrollo e implementación de un sistema web para la gestión de operaciones agrícolas con drones (UAV), centralizando clientes, parcelas, vuelos y control financiero.",
                    "Diseñé y estructuré la arquitectura cliente-servidor utilizando PHP, JS y bases de datos relacionales.",
                    "Construí módulos clave: CRM de productores, gestión geográfica de parcelas (GIS) y motor de logística para programación de vuelos",
                    "Integré mapas interactivos con Leaflet para visualización y gestión de parcelas agrícolas en tiempo real.",
                    "Desarrolló dashboards operativos con métricas en tiempo real e integración de API climática para optimizar la toma de decisiones en campo.",
                    "Implementé diseño responsivo y optimización para uso en dispositivos móviles, asegurando rendimiento en entornos de baja conectividad.",
                    "Procesé y estructuré datos para generación de reportes automatizados (PDF), mejorando trazabilidad y control de operaciones.",
                    "Optimicé la experiencia de usuario mediante consumo de APIs con AJAX/Fetch, logrando una interacción fluida sin recargas."
                ]
            },
            job2: {
                date: "Mayo 2024 – Agosto 2024 | Nayarit, México",
                position: "Ingeniero de Software de Sistemas | Especialista en ERP e Inventarios",
                company: "C.R.E.A.N - Gobierno del Estado de Nayarit",
                description: "ERP corporativo de alto impacto para la administración centralizada de inventarios estatales. Implementa una arquitectura modular con control de stock inteligente, auditoría automatizada y herramientas de análisis técnico.",
                metric: "Sistema ERP",
                achievements: [
                    "Implementé módulos especializados con control de stock, reglas de negocio y gestión independiente por área.",
                    "Construí sistema CRUD con validaciones avanzadas y control de permisos por módulo, asegurando integridad y trazabilidad de datos.",
                    "Diseñé dashboard con métricas clave y alertas automáticas de stock mínimo para mejorar la toma de decisiones.",
                    "Automaticé la generación de reportes institucionales en PDF, reduciendo procesos manuales de auditoría.",
                    "Implementé sistema de búsqueda y filtros avanzados, optimizando la consulta y seguimiento histórico de inventarios."
                ]
            },
            job3: {
                date: "Febrero 2024 – Presente",
                position: "Desarrollador Full Stack",
                company: "Fórmula Deportiva",
                description: "Arquitectura integral de una plataforma deportiva en producción con cobertura de más de 9 ligas internacionales.",
                metric: "Producción Live",
                achievements: [
                    "Desarrollo de sistema que cubre más de 9 ligas internacionales con actualización automatizada de datos en tiempo real.",
                    "Construí una API REST con Node.js y Express, integrando base de datos MySQL y frontend en React 18 con diseño responsivo.",
                    "Implementé autenticación segura con JWT y panel administrativo para gestión de contenido y usuarios.",
                    "Desarrolló funcionalidades clave: tablas dinámicas, sistema de quinielas y optimización SEO masiva.",
                    "Plataforma actualmente activa con enfoque en monetización mediante tráfico web y crecimiento constante de usuarios."
                ]
            }
        },
        projectsSection: {
            title: "PROYECTOS Y LOGROS",
            projects: {
                qonvertir: {
                    description: "Plataforma web profesional de conversión de archivos con 6 herramientas: generador QR, PDF tools, compresor de imágenes, conversor de formatos, generador de contraseñas y contador de texto. Sin registro, 100% gratis.",
                    metric: "Plataforma Live"
                },
                calcumas: {
                    description: "Suite completa de 4 calculadoras profesionales: científica con funciones avanzadas, IMC y calorías, salario neto con ISR 2024 para México, y préstamos con tabla de amortización. Optimizada con SEO y PWA.",
                    metric: "Plataforma Live"
                },
                naiya: {
                    description: "Asistente de IA que traduce en tiempo real entre voz, texto y lenguaje de señas, incluyendo lenguas indígenas mexicanas. Utiliza procesamiento de lenguaje natural para eliminar barreras comunicativas y promover la inclusión.",
                    metric: "Aplicación Móvil IA"
                },
                formulaDeportiva: {
                    description: "Plataforma deportiva integral con cobertura de 9+ ligas internacionales. Sistema Full Stack con API REST, autenticación JWT, quinielas dinámicas y optimización SEO de alto tráfico.",
                    metric: "Plataforma Live"
                },
                villaDrone: {
                    description: "Sistema experto de gestión agrícola diseñado para optimizar aplicaciones aéreas con drones mediante el seguimiento de ciclos fenológicos. Centraliza la operatividad técnica y financiera con datos geográficos y climáticos.",
                    metric: "Sistema Agrícola"
                },
                crean: {
                    description: "ERP corporativo de alto impacto para la administración centralizada de inventarios estatales. Implementa una arquitectura modular con control de stock inteligente, auditoría automatizada y herramientas de análisis técnico.",
                    metric: "Sistema ERP"
                },
                adplus: {
                    description: "Proyecto educativo donde desarrollé varios videojuegos para estudiantes. Ahora evolucionado con Unity y React.",
                    metric: "Aplicación Móvil"
                },
                mirugo: {
                    description: "Plataforma web donde los usuarios pueden adquirir cuentas de streaming a precios accesibles. Incluye una aplicación propia estilo Netflix para ver películas, series y anime. Actualmente en fase MVP funcional.",
                    metric: "MVP Beta"
                },
                blockcortex: {
                    description: "Sistema híbrido que combina IA centralizada con descentralización Blockchain. Incluye sistema de monedero virtual para el ecosistema colaborativo.",
                    metric: "IA & Wallet"
                }
            },
            events: {
                hackathon2024: "Hackathon 2024",
                hackathon2025: "Hackathon 2025",
                expociencia2025: "Expociencia 2025"
            }
        },
        skills: {
            title: "HABILIDADES TÉCNICAS",
            frontend: "FRONTEND",
            backend: "BACKEND",
            databases: "BASE DE DATOS",
            otherTools: "OTRAS HERRAMIENTAS"
        },
        softSkills: {
            title: "HABILIDADES BLANDAS"
        },
        languagesSection: {
            title: "IDIOMAS",
            learning: "En aprendizaje",
            native: "Nativo"
        },
        educationSection: {
            title: "EDUCACIÓN"
        },
        contactSection: {
            title: "CONTACTO",
            text: "¿Tienes un proyecto en mente? ¿Quieres colaborar? No dudes en contactarme a través de cualquiera de estos medios.",
            form: {
                name: "Nombre",
                email: "Email",
                subject: "Asunto",
                message: "Mensaje",
                send: "Enviar Mensaje",
                success: "¡Mensaje enviado con éxito!",
                error: "Hubo un error al enviar el mensaje. Intenta de nuevo."
            }
        },
        khabala: {
            nav: {
                all: "Todos",
                web: "Páginas Web",
                systems: "Sistemas",
                apps: "Apps + Videojuegos",
                ai: "IA"
            },
            hero: {
                title: "Proyectos +",
                bio: "Portafolio Extendido de Soluciones y Logros",
                quote: "El éxito no es el final, el fracaso no es fatal: es el valor para continuar lo que cuenta.",
                stats: {
                    projects: "Desarrollados",
                    upcoming: "Próximos"
                }
            },
            grid: {
                title: "PROYECTOS Y LOGROS"
            },
            projectDetails: {
                viewGallery: "Ver galería"
            },
            upcoming: {
                title: "PRÓXIMOS PROYECTOS"
            }
        }
    },
    en: {
        nav: {
            portfolio: "PORTFOLIO",
            aboutMe: "About Me",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            languages: "Languages",
            education: "Education",
            contact: "Contact"
        },
        hero: {
            subtitle: "Software Developer",
            khabalaBtn: "PROJECTS +"
        },
        about: {
            title: "ABOUT ME",
            text1: "Software Development Engineer specialized in Full Stack architectures with a solid foundation in technical support and networking. Expert in transforming business needs into scalable technical solutions, from agricultural GIS systems to government ERPs. Focused on process optimization through automation, with a great capacity for adaptation and learning new technologies."
        },
        exp: {
            title: "EXPERIENCE",
            job1: {
                date: "Jun 2025 – Apr 2026 | Nayarit, Mexico",
                position: "Full Stack Developer | Systems & Data Focus",
                company: "Villa Drone",
                description: "Expert agricultural management system designed to optimize aerial drone applications through phenological cycle tracking. Centralizes technical and financial operations with geographic and climatic data.",
                metric: "Agricultural System",
                achievements: [
                    "Led the development and implementation of a web system for agricultural drone (UAV) operations management, centralizing clients, plots, flights, and financial control.",
                    "Designed and structured the client-server architecture using PHP, JS, and relational databases.",
                    "Built key modules: producer CRM, geographic plot management (GIS), and logistics engine for flight scheduling.",
                    "Integrated interactive maps with Leaflet for real-time visualization and management of agricultural plots.",
                    "Developed operational dashboards with real-time metrics and weather API integration to optimize field decision-making.",
                    "Implemented responsive design and optimization for mobile use, ensuring performance in low-connectivity environments.",
                    "Processed and structured data for automated report generation (PDF), improving traceability and operations control.",
                    "Optimized user experience by consuming APIs with AJAX/Fetch, achieving fluid interaction without reloads."
                ]
            },
            job2: {
                date: "May 2024 – Aug 2024 | Nayarit, Mexico",
                position: "Systems Software Engineer | ERP & Inventory Specialist",
                company: "C.R.E.A.N - Nayarit State Government",
                description: "High-impact corporate ERP for centralized state inventory management. Implements a modular architecture with intelligent stock control, automated auditing, and technical analysis tools.",
                metric: "ERP System",
                achievements: [
                    "Implemented specialized modules with stock control, business rules, and independent area management.",
                    "Built a CRUD system with advanced validations and module-specific permission control, ensuring data integrity and traceability.",
                    "Designed a dashboard with key metrics and automatic minimum stock alerts to improve decision-making.",
                    "Automated the generation of institutional PDF reports, reducing manual audit processes.",
                    "Implemented advanced search and filtering systems, optimizing the query and historical tracking of inventories."
                ]
            },
            job3: {
                date: "February 2024 – Present | Nayarit, Mexico",
                position: "Full Stack Architect | Founder & Lead Developer",
                company: "Fórmula Deportiva",
                description: "Designed and implemented the integral architecture of a high-traffic sports platform in production, publicly available.",
                metric: "Live Platform",
                achievements: [
                    "Development of a system covering more than 9 international leagues with automated real-time data updates.",
                    "Built a REST API with Node.js and Express, integrating MySQL database and React 18 frontend with responsive design.",
                    "Implemented secure JWT authentication and an administrative panel for content and user management.",
                    "Developed key features: dynamic tables, pool systems (quinielas), and massive SEO optimization.",
                    "Platform currently active with a focus on monetization through web traffic and steady user growth."
                ]
            }
        },
        projectsSection: {
            title: "PROJECTS & ACHIEVEMENTS",
            projects: {
                qonvertir: {
                    description: "Professional file conversion web platform with 6 tools: QR generator, PDF tools, image compressor, format converter, password generator, and text counter. No registration required, 100% free.",
                    metric: "Live Platform"
                },
                calcumas: {
                    description: "Complete suite of 4 professional calculators: scientific with advanced functions, BMI and calories, net salary with 2024 ISR for Mexico, and loans with amortization table. Optimized with SEO and PWA.",
                    metric: "Live Platform"
                },
                naiya: {
                    description: "AI assistant that translates in real-time between voice, text, and sign language, including Mexican indigenous languages. Uses natural language processing to eliminate communication barriers and promote inclusion.",
                    metric: "AI Mobile App"
                },
                formulaDeportiva: {
                    description: "Comprehensive sports platform with coverage of 9+ international leagues. Full Stack system with REST API, JWT authentication, dynamic pools, and high-traffic SEO optimization.",
                    metric: "Live Platform"
                },
                villaDrone: {
                    description: "Expert agricultural management system designed to optimize aerial drone applications through phenological cycle tracking. Centralizes technical and financial operations with geographic and climatic data.",
                    metric: "Agricultural System"
                },
                crean: {
                    description: "High-impact corporate ERP for centralized state inventory management. Implements a modular architecture with intelligent stock control, automated auditing, and technical analysis tools.",
                    metric: "ERP System"
                },
                adplus: {
                    description: "Educational project where I developed several video games for students. Now evolved with Unity and React.",
                    metric: "Mobile Application"
                },
                mirugo: {
                    description: "Web platform where users can purchase streaming accounts at affordable prices. Includes its own Netflix-style app for watching movies, series, and anime. Currently in functional MVP phase.",
                    metric: "MVP Beta"
                },
                blockcortex: {
                    description: "Hybrid system combining centralized AI with Blockchain decentralization. Includes virtual wallet system for the collaborative ecosystem.",
                    metric: "AI & Wallet"
                }
            },
            events: {
                hackathon2024: "Hackathon 2024",
                hackathon2025: "Hackathon 2025",
                expociencia2025: "Expociencia 2025"
            }
        },
        skills: {
            title: "TECHNICAL SKILLS",
            frontend: "FRONTEND",
            backend: "BACKEND",
            databases: "DATABASES",
            otherTools: "OTHER TOOLS"
        },
        softSkills: {
            title: "SOFT SKILLS"
        },
        languagesSection: {
            title: "LANGUAGES",
            learning: "In progress",
            native: "Native"
        },
        educationSection: {
            title: "EDUCATION"
        },
        contactSection: {
            title: "CONTACT",
            text: "Have a project in mind? Want to collaborate? Don't hesitate to contact me through any of these channels.",
            form: {
                name: "Name",
                email: "Email",
                subject: "Subject",
                message: "Message",
                send: "Send Message",
                success: "Message sent successfully!",
                error: "There was an error sending the message. Please try again."
            }
        },
        khabala: {
            nav: {
                all: "All",
                web: "Websites",
                systems: "Systems",
                apps: "Apps + Games",
                ai: "AI"
            },
            hero: {
                title: "Projects +",
                bio: "Extended Portfolio of Solutions and Achievements",
                quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                stats: {
                    projects: "Developed",
                    upcoming: "Upcoming"
                }
            },
            grid: {
                title: "PROJECTS & ACHIEVEMENTS"
            },
            projectDetails: {
                viewGallery: "View Gallery"
            },
            upcoming: {
                title: "UPCOMING PROJECTS"
            }
        }
    }
};

/**
 * Función para cambiar el idioma
 */
function updateLanguage(lang) {
    const langData = translations[lang];
    if (!langData) return;

    // Guardar preferencia
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;

    // Buscar todos los elementos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = key.split('.').reduce((obj, k) => (obj && obj[k]) ? obj[k] : null, langData);

        if (text) {
            // Si el elemento tiene un icono (<i>), lo preservamos
            const icon = el.querySelector('i');
            if (icon) {
                el.innerHTML = '';
                el.appendChild(icon);
                el.appendChild(document.createTextNode(' ' + text));
            } else {
                el.textContent = text;
            }
        }
    });

    // Actualizar texto del botón selector
    updateLangButton(lang);

    // Actualizar galerías si el script de galerías está presente
    if (typeof window.updateProjectGalleries === 'function') {
        window.updateProjectGalleries();
    }
}

function updateLangButton(lang) {
    const btnText = document.querySelector('#lang-button .lang-text');
    const btnFlag = document.querySelector('#lang-button .flag');
    if (btnText && btnFlag) {
        if (lang === 'es') {
            btnText.textContent = 'EN';
            btnFlag.textContent = '🇺🇸';
        } else {
            btnText.textContent = 'ES';
            btnFlag.textContent = '🇪🇸';
        }
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('portfolio_lang') || 'es';
    updateLanguage(savedLang);

    const langBtn = document.getElementById('lang-button');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'es' ? 'en' : 'es';
            updateLanguage(newLang);
        });
    }
});

// Mantener compatibilidad con galerías existentes si es necesario
window.getCurrentLanguage = () => document.documentElement.lang || 'es';