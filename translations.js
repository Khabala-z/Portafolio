const originalTexts = {};

// Traducciones al inglés
const englishTranslations = {
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
        khabalaBtn: "KHABALA PROJECTS"
    },
    about: {
        title: "ABOUT ME",
        text1: "Software Development Engineering student with hands-on experience in web development and enterprise systems through freelance projects. Collaborative, altruistic, and passionate about technology, seeking a job opportunity to grow professionally while contributing my skills to the team.",
        text2: "I specialize in creating innovative digital solutions, combining creativity with solid technical skills."
    },
    exp: {
        title: "EXPERIENCE",
        job1: {
            date: "June 2024 - January 2025 (Ongoing)",
            position: "Full Stack Developer",
            company: "Villa Drone - Freelance Project",
            description: "Agricultural management web system to automate drone applications based on crop phenological cycles. Complete development from requirements analysis, database design, feature implementation (dashboard, calendar, interactive maps, PDF reports), to deployment and ongoing support.",
            achievements: [
                "Dashboard with real-time metrics and application management",
                "Automatic calendar system based on crop cycles",
                "Interactive map with plot geolocation (Leaflet API)",
                "Weekly PDF report generation",
                "Scalable and maintainable MVC architecture"
            ]
        },
        job2: {
            date: "May - August 2024",
            position: "Systems Developer",
            company: "C.R.E.A.N - Nayarit State Government",
            description: "Comprehensive enterprise inventory management system for C.R.E.A.N (Nayarit State Government agency). Complete development of 8 specialized modules for comprehensive company-wide inventory control, implementing scalable architecture, robust business logic, and automated reporting system.",
            achievements: [
                "8 enterprise inventory modules with independent management and stock control",
                "Complete CRUD system with validations and module permissions",
                "Executive dashboard with metrics and minimum stock alerts",
                "Institutional reporting module with PDF export",
                "Search system, advanced filters, and movement traceability"
            ]
        }
    },
    projectsSection: {
        title: "PROJECTS & ACHIEVEMENTS",
        categories: {
            all: "All",
            web: "Web",
            mobile: "Mobile",
            ai: "AI",
            systems: "Systems"
        },
        projects: {
            qonvertir: {
                description: "Professional file conversion web platform with 6 tools: QR generator, PDF tools, image compressor, format converter, password generator, and text counter. No registration required, 100% free.",
                badge: "Website"
            },
            calcumas: {
                description: "Complete suite of 4 professional calculators: scientific with advanced functions, BMI and calories, net salary with 2024 ISR for Mexico, and loans with amortization table. Optimized with SEO and PWA.",
                badge: "Website"
            },
            naiya: {
                description: "AI assistant that translates in real-time between voice, text, and sign language, including Mexican indigenous languages. Uses natural language processing to eliminate communication barriers and promote inclusion.",
                badge: "AI"
            },
            adplus: {
                description: "Educational project where I developed 3 complete video games for fifth-grade students. Includes custom game mechanics, reward system, and progress tracking to make learning fun.",
                badge: "Video Games"
            },
            mirugo: {
                description: "Web platform where users can purchase streaming accounts at affordable prices. Includes a Netflix-style app to watch movies, series, and anime. Currently in functional MVP phase.",
                badge: "App"
            },
            blockcortex: {
                description: "Hybrid system combining centralized AI for everyday tasks with decentralized blockchain-based AI to foster user collaboration. Includes virtual wallet system for the collaborative ecosystem.",
                badge: "AI"
            },
            villadrone: {
                description: "Agricultural management web system to automate drone applications based on crop phenological cycles. Complete development from requirements analysis, database design, feature implementation (dashboard, calendar, interactive maps, PDF reports), to deployment and ongoing support.",
                badge: "System"
            },
            crean: {
                description: "Comprehensive enterprise inventory management system for C.R.E.A.N (Nayarit State Government agency). Complete development of 8 specialized modules for exhaustive company-wide inventory control, implementing scalable architecture, robust business logic, and automated reporting system.",
                badge: "System"
            }
        },
        achievements: {
            hackathon: {
                title: "Hackathon Nayarit 2024",
                date: "November 2024",
                description: "2nd place with BlockCortex, hybrid AI system with blockchain for cryptocurrency price prediction using machine learning.",
                award: "🥈 Second Place"
            },
            expociencias: {
                title: "ExpoCiencias Nayarit 2025",
                date: "March 2025",
                description: "Selected project to represent the state with Naiya, multilingual mobile translation application with artificial intelligence.",
                award: "📱 Selected Project"
            }
        }
    },
    skills: {
        title: "TECHNICAL SKILLS",
        categories: {
            frontend: "Frontend",
            backend: "Backend",
            databases: "Databases",
            tools: "Tools & Others"
        }
    },
    softSkills: {
        title: "SOFT SKILLS",
        teamwork: {
            title: "Teamwork",
            description: "Effective collaboration in multidisciplinary teams, sharing knowledge and supporting colleagues."
        },
        problemSolving: {
            title: "Problem Solving",
            description: "Logical and creative analysis to find efficient solutions to complex technical challenges."
        },
        adaptability: {
            title: "Adaptability",
            description: "Quick learning of new technologies and adaptation to different development environments."
        },
        communication: {
            title: "Communication",
            description: "Ability to convey technical ideas clearly to both technical and non-technical teams."
        },
        criticalThinking: {
            title: "Critical Thinking",
            description: "Objective analysis of information to make informed decisions in software development."
        },
        resultsOriented: {
            title: "Results-Oriented",
            description: "Focus on delivering quality solutions that meet project objectives."
        }
    },
    languagesSection: {
        title: "LANGUAGES",
        spanish: {
            name: "Spanish",
            level: "Native"
        },
        english: {
            name: "English",
            level: "A2",
            learning: "Learning"
        }
    },
    educationSection: {
        title: "EDUCATION",
        degree1: {
            title: "Software Development Engineering",
            institution: "Universidad Tecnológica de la Costa",
            date: "Santiago Ixcuintla, Nayarit 2024 - 2026 (Ongoing)"
        },
        degree2: {
            title: "Associate Degree in Information Technology - Multiplatform Software Development Area",
            institution: "Universidad Tecnológica de la Costa",
            date: "Santiago Ixcuintla, Nayarit  2022 - 2024"
        }
    },
    contactSection: {
        title: "CONTACT",
        text: "Have a project in mind? Want to collaborate? Don't hesitate to contact me through any of these channels.",
        email: "Email",
        phone: "Phone"
    },
    footer: {
        developed: "Developed with 💜 and lots of ☕"
    },
    khabala: {
        nav: {
            back: "KHABALA",
            projects: "PROJECTS",
            all: "All",
            web: "Websites",
            systems: "Systems",
            apps: "Apps + Games",
            ai: "AI"
        },
        hero: {
            title: "Khabala Projects",
            bio: "Innovation in every line of code",
            quote: "Never let anyone tell you that you can't do something, not even me. If you have a dream, you have to pursue it. People who can't do something themselves will tell you that you can't either. If you dream of something, make it happen. Period.",
            stats: {
                projects: "Projects",
                upcoming: "Upcoming"
            }
        },
        projectDetails: {
            viewGallery: "View gallery"
        },
        upcoming: {
            title: "UPCOMING PROJECTS",
            naiya: {
                title: "Naiya",
                description: "Multilingual AI translation mobile app with real-time voice recognition and fluid conversations.",
                status: "In Development"
            },
            horror: {
                title: "Horror Game",
                description: "Psychological horror game for mobile with immersive atmosphere, puzzles, and survival mechanics.",
                status: "In Planning"
            },
            sales: {
                title: "Sales System",
                description: "Complete POS system with inventory control, invoicing, reports, and dashboard for small and medium businesses.",
                status: "In Planning"
            }
        },
        gallery: {
            title: "Project Gallery",
            noImages: {
                title: "Gallery Not Available",
                message: "Images for this project will be available soon.",
                button: "Understood"
            }
        }
    }
};

// Helper para capturar texto
function captureText(selector, key) {
    const el = document.querySelector(selector);
    if (el) {
        originalTexts[key] = el.textContent;
    }
}

// Helper para capturar HTML
function captureHTML(selector, key) {
    const el = document.querySelector(selector);
    if (el) {
        originalTexts[key] = el.innerHTML;
    }
}

// Capturar todos los textos originales del HTML
function captureOriginalTexts() {
    const isKhabala = window.location.pathname.includes('khabala-project');
    
    if (!isKhabala) {
        // INDEX - Capturar textos
        captureText('.logo-text', 'nav_portfolio');
        
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link, i) => {
            originalTexts[`nav_link_${i}`] = link.textContent;
        });
        
        captureText('.hero-subtitle', 'hero_subtitle');
        captureHTML('.btn-khabala', 'hero_btn');
        
        captureHTML('#sobre-mi .section-title', 'about_title');
        document.querySelectorAll('.about-text').forEach((p, i) => {
            originalTexts[`about_text_${i}`] = p.textContent;
        });
        
        captureHTML('#experiencia .section-title', 'exp_title');
        
        document.querySelectorAll('.timeline-item').forEach((item, i) => {
            const prefix = `exp_job${i}`;
            const date = item.querySelector('.timeline-date');
            const title = item.querySelector('.timeline-title');
            const company = item.querySelector('.timeline-company');
            const desc = item.querySelector('.timeline-description');
            
            if (date) originalTexts[`${prefix}_date`] = date.textContent;
            if (title) originalTexts[`${prefix}_title`] = title.textContent;
            if (company) originalTexts[`${prefix}_company`] = company.textContent;
            if (desc) originalTexts[`${prefix}_desc`] = desc.textContent;
            
            item.querySelectorAll('.timeline-achievements li').forEach((li, j) => {
                originalTexts[`${prefix}_ach_${j}`] = li.textContent;
            });
        });
        
        captureHTML('#proyectos .section-title', 'projects_title');
        
        document.querySelectorAll('.filter-btn').forEach((btn, i) => {
            originalTexts[`filter_${i}`] = btn.innerHTML;
        });
        
        // Capturar proyectos - buscar project-card-new o project-card
        let projectCardsCapture = document.querySelectorAll('.project-card-new');
        if (projectCardsCapture.length === 0) {
            projectCardsCapture = document.querySelectorAll('.project-card');
        }
        
        projectCardsCapture.forEach((card, i) => {
            const desc = card.querySelector('.project-description-new') || card.querySelector('.project-description');
            const badge = card.querySelector('.project-badge') || card.querySelector('.project-badge-category');
            if (desc) originalTexts[`project_${i}_desc`] = desc.textContent;
            if (badge) originalTexts[`project_${i}_badge`] = badge.textContent;
        });
        
        document.querySelectorAll('.achievement-card').forEach((card, i) => {
            const prefix = `achievement_${i}`;
            const event = card.querySelector('.achievement-event');
            const date = card.querySelector('.achievement-date');
            const desc = card.querySelector('.achievement-description');
            const award = card.querySelector('.achievement-award');
            
            if (event) originalTexts[`${prefix}_event`] = event.textContent;
            if (date) originalTexts[`${prefix}_date`] = date.textContent;
            if (desc) originalTexts[`${prefix}_desc`] = desc.textContent;
            if (award) originalTexts[`${prefix}_award`] = award.textContent;
        });
        
        captureHTML('#habilidades .section-title', 'skills_title');
        
        // Capturar skills categories - puede ser .skill-category h3 o .skills-category-title
        let skillCatsElements = document.querySelectorAll('.skill-category h3');
        if (skillCatsElements.length === 0) {
            skillCatsElements = document.querySelectorAll('.skills-category-title');
        }
        
        skillCatsElements.forEach((el, i) => {
            originalTexts[`skill_cat_${i}`] = el.textContent;
        });
        
        const softTitle = document.querySelectorAll('.section-title')[4];
        if (softTitle) originalTexts['soft_title'] = softTitle.innerHTML;
        
        document.querySelectorAll('.soft-skill-card').forEach((card, i) => {
            const title = card.querySelector('.soft-skill-title');
            const desc = card.querySelector('.soft-skill-description');
            if (title) originalTexts[`soft_${i}_title`] = title.textContent;
            if (desc) originalTexts[`soft_${i}_desc`] = desc.textContent;
        });
        
        captureHTML('#idiomas .section-title', 'lang_title');
        document.querySelectorAll('.language-card-new').forEach((card, i) => {
            const name = card.querySelector('.language-name-new');
            const level = card.querySelector('.level-badge');
            const learning = card.querySelector('.learning-badge');
            
            if (name) originalTexts[`lang_${i}_name`] = name.textContent;
            if (level) originalTexts[`lang_${i}_level`] = level.textContent;
            if (learning) originalTexts[`lang_${i}_learning`] = learning.innerHTML;
        });
        
        captureHTML('#educacion .section-title', 'edu_title');
        document.querySelectorAll('.education-card').forEach((card, i) => {
            const title = card.querySelector('.education-title');
            const inst = card.querySelector('.education-institution');
            const date = card.querySelector('.education-date');
            
            if (title) originalTexts[`edu_${i}_title`] = title.textContent;
            if (inst) originalTexts[`edu_${i}_inst`] = inst.textContent;
            if (date) originalTexts[`edu_${i}_date`] = date.textContent;
        });
        
        captureHTML('#contacto .section-title', 'contact_title');
        captureText('.contact-text', 'contact_text');
        document.querySelectorAll('.contact-card h3').forEach((h3, i) => {
            originalTexts[`contact_${i}`] = h3.textContent;
        });
        
        const footerPs = document.querySelectorAll('.footer-content p');
        if (footerPs[1]) originalTexts['footer'] = footerPs[1].textContent;
        
    } else {
        // KHABALA - Capturar textos
        captureHTML('.nav-logo span', 'khabala_logo');
        
        document.querySelectorAll('.nav-link').forEach((link, i) => {
            originalTexts[`khabala_nav_${i}`] = link.innerHTML;
        });
        
        captureText('.profile-name', 'khabala_name');
        captureText('.profile-bio', 'khabala_bio');
        captureText('.motivational-quote', 'khabala_quote');
        
        document.querySelectorAll('.stat-label').forEach((stat, i) => {
            originalTexts[`khabala_stat_${i}`] = stat.textContent;
        });
        
        document.querySelectorAll('.gallery-btn span').forEach((btn, i) => {
            originalTexts[`khabala_gallery_${i}`] = btn.textContent;
        });
        
        document.querySelectorAll('.project-description-new').forEach((desc, i) => {
            originalTexts[`khabala_desc_${i}`] = desc.textContent;
        });
        
        document.querySelectorAll('.project-badge-category').forEach((badge, i) => {
            originalTexts[`khabala_badge_${i}`] = badge.innerHTML;
        });
        
        captureHTML('.section-title', 'khabala_upcoming_title');
        
        document.querySelectorAll('.upcoming-card').forEach((card, i) => {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            const status = card.querySelector('.status-badge');
            
            if (h3) originalTexts[`khabala_up_${i}_title`] = h3.textContent;
            if (p) originalTexts[`khabala_up_${i}_desc`] = p.textContent;
            if (status) originalTexts[`khabala_up_${i}_status`] = status.innerHTML;
        });
        
        captureText('#galleryTitle', 'khabala_gallery_title');
        
        const noImg = document.querySelector('.no-images-content');
        if (noImg) {
            const h3 = noImg.querySelector('h3');
            const p = noImg.querySelector('p');
            const btn = noImg.querySelector('#noImagesOk');
            
            if (h3) originalTexts['khabala_noimg_title'] = h3.textContent;
            if (p) originalTexts['khabala_noimg_msg'] = p.textContent;
            if (btn) originalTexts['khabala_noimg_btn'] = btn.textContent;
        }
        
        const footerPs = document.querySelectorAll('.footer-content p');
        if (footerPs[1]) originalTexts['khabala_footer'] = footerPs[1].textContent;
    }
}

// Funciones helper
function setText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
}

function setHTML(selector, html) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
}

// Restaurar textos originales (español)
function restoreOriginalTexts() {
    const isKhabala = window.location.pathname.includes('khabala-project');
    
    if (!isKhabala) {
        // INDEX - Restaurar
        setText('.logo-text', originalTexts['nav_portfolio']);
        
        document.querySelectorAll('.nav-link').forEach((link, i) => {
            if (originalTexts[`nav_link_${i}`]) link.textContent = originalTexts[`nav_link_${i}`];
        });
        
        setText('.hero-subtitle', originalTexts['hero_subtitle']);
        setHTML('.btn-khabala', originalTexts['hero_btn']);
        
        setHTML('#sobre-mi .section-title', originalTexts['about_title']);
        document.querySelectorAll('.about-text').forEach((p, i) => {
            if (originalTexts[`about_text_${i}`]) p.textContent = originalTexts[`about_text_${i}`];
        });
        
        setHTML('#experiencia .section-title', originalTexts['exp_title']);
        
        document.querySelectorAll('.timeline-item').forEach((item, i) => {
            const prefix = `exp_job${i}`;
            const date = item.querySelector('.timeline-date');
            const title = item.querySelector('.timeline-title');
            const company = item.querySelector('.timeline-company');
            const desc = item.querySelector('.timeline-description');
            
            if (date && originalTexts[`${prefix}_date`]) date.textContent = originalTexts[`${prefix}_date`];
            if (title && originalTexts[`${prefix}_title`]) title.textContent = originalTexts[`${prefix}_title`];
            if (company && originalTexts[`${prefix}_company`]) company.textContent = originalTexts[`${prefix}_company`];
            if (desc && originalTexts[`${prefix}_desc`]) desc.textContent = originalTexts[`${prefix}_desc`];
            
            item.querySelectorAll('.timeline-achievements li').forEach((li, j) => {
                if (originalTexts[`${prefix}_ach_${j}`]) li.textContent = originalTexts[`${prefix}_ach_${j}`];
            });
        });
        
        setHTML('#proyectos .section-title', originalTexts['projects_title']);
        
        document.querySelectorAll('.filter-btn').forEach((btn, i) => {
            if (originalTexts[`filter_${i}`]) btn.innerHTML = originalTexts[`filter_${i}`];
        });
        
        // Restaurar proyectos
        let projectCardsRestore = document.querySelectorAll('.project-card-new');
        if (projectCardsRestore.length === 0) {
            projectCardsRestore = document.querySelectorAll('.project-card');
        }
        
        projectCardsRestore.forEach((card, i) => {
            const desc = card.querySelector('.project-description-new') || card.querySelector('.project-description');
            const badge = card.querySelector('.project-badge') || card.querySelector('.project-badge-category');
            if (desc && originalTexts[`project_${i}_desc`]) desc.textContent = originalTexts[`project_${i}_desc`];
            if (badge && originalTexts[`project_${i}_badge`]) badge.textContent = originalTexts[`project_${i}_badge`];
        });
        
        document.querySelectorAll('.achievement-card').forEach((card, i) => {
            const prefix = `achievement_${i}`;
            const event = card.querySelector('.achievement-event');
            const date = card.querySelector('.achievement-date');
            const desc = card.querySelector('.achievement-description');
            const award = card.querySelector('.achievement-award');
            
            if (event && originalTexts[`${prefix}_event`]) event.textContent = originalTexts[`${prefix}_event`];
            if (date && originalTexts[`${prefix}_date`]) date.textContent = originalTexts[`${prefix}_date`];
            if (desc && originalTexts[`${prefix}_desc`]) desc.textContent = originalTexts[`${prefix}_desc`];
            if (award && originalTexts[`${prefix}_award`]) award.textContent = originalTexts[`${prefix}_award`];
        });
        
        setHTML('#habilidades .section-title', originalTexts['skills_title']);
        
        // Restaurar skills categories
        let skillCatsElements = document.querySelectorAll('.skill-category h3');
        if (skillCatsElements.length === 0) {
            skillCatsElements = document.querySelectorAll('.skills-category-title');
        }
        
        skillCatsElements.forEach((el, i) => {
            if (originalTexts[`skill_cat_${i}`]) el.textContent = originalTexts[`skill_cat_${i}`];
        });
        
        const softTitle = document.querySelectorAll('.section-title')[4];
        if (softTitle && originalTexts['soft_title']) softTitle.innerHTML = originalTexts['soft_title'];
        
        document.querySelectorAll('.soft-skill-card').forEach((card, i) => {
            const title = card.querySelector('.soft-skill-title');
            const desc = card.querySelector('.soft-skill-description');
            if (title && originalTexts[`soft_${i}_title`]) title.textContent = originalTexts[`soft_${i}_title`];
            if (desc && originalTexts[`soft_${i}_desc`]) desc.textContent = originalTexts[`soft_${i}_desc`];
        });
        
        setHTML('#idiomas .section-title', originalTexts['lang_title']);
        document.querySelectorAll('.language-card-new').forEach((card, i) => {
            const name = card.querySelector('.language-name-new');
            const level = card.querySelector('.level-badge');
            const learning = card.querySelector('.learning-badge');
            
            if (name && originalTexts[`lang_${i}_name`]) name.textContent = originalTexts[`lang_${i}_name`];
            if (level && originalTexts[`lang_${i}_level`]) level.textContent = originalTexts[`lang_${i}_level`];
            if (learning && originalTexts[`lang_${i}_learning`]) learning.innerHTML = originalTexts[`lang_${i}_learning`];
        });
        
        setHTML('#educacion .section-title', originalTexts['edu_title']);
        document.querySelectorAll('.education-card').forEach((card, i) => {
            const title = card.querySelector('.education-title');
            const inst = card.querySelector('.education-institution');
            const date = card.querySelector('.education-date');
            
            if (title && originalTexts[`edu_${i}_title`]) title.textContent = originalTexts[`edu_${i}_title`];
            if (inst && originalTexts[`edu_${i}_inst`]) inst.textContent = originalTexts[`edu_${i}_inst`];
            if (date && originalTexts[`edu_${i}_date`]) date.textContent = originalTexts[`edu_${i}_date`];
        });
        
        setHTML('#contacto .section-title', originalTexts['contact_title']);
        setText('.contact-text', originalTexts['contact_text']);
        document.querySelectorAll('.contact-card h3').forEach((h3, i) => {
            if (originalTexts[`contact_${i}`]) h3.textContent = originalTexts[`contact_${i}`];
        });
        
        const footerPs = document.querySelectorAll('.footer-content p');
        if (footerPs[1] && originalTexts['footer']) footerPs[1].textContent = originalTexts['footer'];
        
    } else {
        // KHABALA - Restaurar
        setHTML('.nav-logo span', originalTexts['khabala_logo']);
        
        document.querySelectorAll('.nav-link').forEach((link, i) => {
            if (originalTexts[`khabala_nav_${i}`]) link.innerHTML = originalTexts[`khabala_nav_${i}`];
        });
        
        setText('.profile-name', originalTexts['khabala_name']);
        setText('.profile-bio', originalTexts['khabala_bio']);
        setText('.motivational-quote', originalTexts['khabala_quote']);
        
        document.querySelectorAll('.stat-label').forEach((stat, i) => {
            if (originalTexts[`khabala_stat_${i}`]) stat.textContent = originalTexts[`khabala_stat_${i}`];
        });
        
        document.querySelectorAll('.gallery-btn span').forEach((btn, i) => {
            if (originalTexts[`khabala_gallery_${i}`]) btn.textContent = originalTexts[`khabala_gallery_${i}`];
        });
        
        document.querySelectorAll('.project-description-new').forEach((desc, i) => {
            if (originalTexts[`khabala_desc_${i}`]) desc.textContent = originalTexts[`khabala_desc_${i}`];
        });
        
        document.querySelectorAll('.project-badge-category').forEach((badge, i) => {
            if (originalTexts[`khabala_badge_${i}`]) badge.innerHTML = originalTexts[`khabala_badge_${i}`];
        });
        
        setHTML('.section-title', originalTexts['khabala_upcoming_title']);
        
        document.querySelectorAll('.upcoming-card').forEach((card, i) => {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            const status = card.querySelector('.status-badge');
            
            if (h3 && originalTexts[`khabala_up_${i}_title`]) h3.textContent = originalTexts[`khabala_up_${i}_title`];
            if (p && originalTexts[`khabala_up_${i}_desc`]) p.textContent = originalTexts[`khabala_up_${i}_desc`];
            if (status && originalTexts[`khabala_up_${i}_status`]) status.innerHTML = originalTexts[`khabala_up_${i}_status`];
        });
        
        setText('#galleryTitle', originalTexts['khabala_gallery_title']);
        
        const noImg = document.querySelector('.no-images-content');
        if (noImg) {
            const h3 = noImg.querySelector('h3');
            const p = noImg.querySelector('p');
            const btn = noImg.querySelector('#noImagesOk');
            
            if (h3 && originalTexts['khabala_noimg_title']) h3.textContent = originalTexts['khabala_noimg_title'];
            if (p && originalTexts['khabala_noimg_msg']) p.textContent = originalTexts['khabala_noimg_msg'];
            if (btn && originalTexts['khabala_noimg_btn']) btn.textContent = originalTexts['khabala_noimg_btn'];
        }
        
        const footerPs = document.querySelectorAll('.footer-content p');
        if (footerPs[1] && originalTexts['khabala_footer']) footerPs[1].textContent = originalTexts['khabala_footer'];
    }
}

// Traducir a inglés (usa la misma lógica anterior pero con englishTranslations)
function translateToEnglish() {
    const t = englishTranslations;
    const isKhabala = window.location.pathname.includes('khabala-project');
    
    if (!isKhabala) {
        // INDEX EN INGLÉS
        setText('.logo-text', t.nav.portfolio);
        
        const navLinks = document.querySelectorAll('.nav-link');
        if (navLinks[0]) navLinks[0].textContent = t.nav.aboutMe;
        if (navLinks[1]) navLinks[1].textContent = t.nav.experience;
        if (navLinks[2]) navLinks[2].textContent = t.nav.projects;
        if (navLinks[3]) navLinks[3].textContent = t.nav.skills;
        if (navLinks[4]) navLinks[4].textContent = t.nav.languages;
        if (navLinks[5]) navLinks[5].textContent = t.nav.education;
        if (navLinks[6]) navLinks[6].textContent = t.nav.contact;
        
        setText('.hero-subtitle', t.hero.subtitle);
        setHTML('.btn-khabala', `<i class="fas fa-rocket"></i> ${t.hero.khabalaBtn}`);
        
        setHTML('#sobre-mi .section-title', `<span class="title-icon"><i class="fas fa-user"></i></span>${t.about.title}`);
        const aboutTexts = document.querySelectorAll('.about-text');
        if (aboutTexts[0]) aboutTexts[0].textContent = t.about.text1;
        if (aboutTexts[1]) aboutTexts[1].textContent = t.about.text2;
        
        setHTML('#experiencia .section-title', `<span class="title-icon"><i class="fas fa-briefcase"></i></span>${t.exp.title}`);
        
        const timelineItems = document.querySelectorAll('.timeline-item');
        if (timelineItems[0]) {
            setText('.timeline-item:nth-child(1) .timeline-date', t.exp.job1.date);
            setText('.timeline-item:nth-child(1) .timeline-title', t.exp.job1.position);
            setText('.timeline-item:nth-child(1) .timeline-company', t.exp.job1.company);
            setText('.timeline-item:nth-child(1) .timeline-description', t.exp.job1.description);
            const ach1 = timelineItems[0].querySelectorAll('.timeline-achievements li');
            t.exp.job1.achievements.forEach((text, i) => {
                if (ach1[i]) ach1[i].textContent = text;
            });
        }
        
        if (timelineItems[1]) {
            setText('.timeline-item:nth-child(2) .timeline-date', t.exp.job2.date);
            setText('.timeline-item:nth-child(2) .timeline-title', t.exp.job2.position);
            setText('.timeline-item:nth-child(2) .timeline-company', t.exp.job2.company);
            setText('.timeline-item:nth-child(2) .timeline-description', t.exp.job2.description);
            const ach2 = timelineItems[1].querySelectorAll('.timeline-achievements li');
            t.exp.job2.achievements.forEach((text, i) => {
                if (ach2[i]) ach2[i].textContent = text;
            });
        }
        
        setHTML('#proyectos .section-title', `<span class="title-icon"><i class="fas fa-rocket"></i></span>${t.projectsSection.title}`);
        
        const filterBtns = document.querySelectorAll('.filter-btn');
        if (filterBtns[0]) setHTML('.filter-btn:nth-child(1)', `<i class="fas fa-th"></i> ${t.projectsSection.categories.all}`);
        if (filterBtns[1]) setHTML('.filter-btn:nth-child(2)', `<i class="fas fa-globe"></i> ${t.projectsSection.categories.web}`);
        if (filterBtns[2]) setHTML('.filter-btn:nth-child(3)', `<i class="fas fa-mobile-alt"></i> ${t.projectsSection.categories.mobile}`);
        if (filterBtns[3]) setHTML('.filter-btn:nth-child(4)', `<i class="fas fa-brain"></i> ${t.projectsSection.categories.ai}`);
        if (filterBtns[4]) setHTML('.filter-btn:nth-child(5)', `<i class="fas fa-server"></i> ${t.projectsSection.categories.systems}`);
        
        // Buscar project-card o project-card-new
        let projectCards = document.querySelectorAll('.project-card-new');
        if (projectCards.length === 0) {
            projectCards = document.querySelectorAll('.project-card');
        }
        
        const projectKeys = ['qonvertir', 'calcumas', 'naiya', 'adplus', 'mirugo', 'blockcortex', 'villadrone', 'crean'];
        projectCards.forEach((card, i) => {
            const key = projectKeys[i];
            if (t.projectsSection.projects[key]) {
                const desc = card.querySelector('.project-description-new') || card.querySelector('.project-description');
                const badge = card.querySelector('.project-badge') || card.querySelector('.project-badge-category');
                if (desc) desc.textContent = t.projectsSection.projects[key].description;
                if (badge) badge.textContent = t.projectsSection.projects[key].badge;
            }
        });
        
        const achievementCards = document.querySelectorAll('.achievement-card');
        if (achievementCards[0]) {
            setText('.achievement-card:nth-child(1) .achievement-event', t.projectsSection.achievements.hackathon.title);
            setText('.achievement-card:nth-child(1) .achievement-date', t.projectsSection.achievements.hackathon.date);
            setText('.achievement-card:nth-child(1) .achievement-description', t.projectsSection.achievements.hackathon.description);
            setText('.achievement-card:nth-child(1) .achievement-award', t.projectsSection.achievements.hackathon.award);
        }
        if (achievementCards[1]) {
            setText('.achievement-card:nth-child(2) .achievement-event', t.projectsSection.achievements.expociencias.title);
            setText('.achievement-card:nth-child(2) .achievement-date', t.projectsSection.achievements.expociencias.date);
            setText('.achievement-card:nth-child(2) .achievement-description', t.projectsSection.achievements.expociencias.description);
            setText('.achievement-card:nth-child(2) .achievement-award', t.projectsSection.achievements.expociencias.award);
        }
        
        setHTML('#habilidades .section-title', `<span class="title-icon"><i class="fas fa-code"></i></span>${t.skills.title}`);
        
        // Helper para traducir manteniendo el ícono
        function translateWithIcon(element, text) {
            if (!element) return;
            const icon = element.querySelector('i');
            if (icon) {
                element.innerHTML = icon.outerHTML + ' ' + text;
            } else {
                element.textContent = text;
            }
        }
        
        // Buscar skills categories
        let skillCatsElements = document.querySelectorAll('.skill-category h3');
        if (skillCatsElements.length === 0) {
            skillCatsElements = document.querySelectorAll('.skills-category-title');
        }
        
        translateWithIcon(skillCatsElements[0], t.skills.categories.frontend);
        translateWithIcon(skillCatsElements[1], t.skills.categories.backend);
        translateWithIcon(skillCatsElements[2], t.skills.categories.databases);
        translateWithIcon(skillCatsElements[3], t.skills.categories.tools);
        
        // HABILIDADES BLANDAS - Buscar la sección que contiene soft-skills-grid
        const softSkillsGrid = document.querySelector('.soft-skills-grid');
        if (softSkillsGrid) {
            const softSkillsSection = softSkillsGrid.closest('.section');
            if (softSkillsSection) {
                const softTitle = softSkillsSection.querySelector('.section-title');
                if (softTitle) {
                    softTitle.innerHTML = `<span class="title-icon"><i class="fas fa-users"></i></span>${t.softSkills.title}`;
                }
            }
        }
        
        const softCards = document.querySelectorAll('.soft-skill-card');
        const softKeys = ['teamwork', 'problemSolving', 'adaptability', 'communication', 'criticalThinking', 'resultsOriented'];
        softCards.forEach((card, i) => {
            const key = softKeys[i];
            if (t.softSkills[key]) {
                const title = card.querySelector('.soft-skill-title');
                const desc = card.querySelector('.soft-skill-description');
                if (title) title.textContent = t.softSkills[key].title;
                if (desc) desc.textContent = t.softSkills[key].description;
            }
        });
        
        setHTML('#idiomas .section-title', `<span class="title-icon"><i class="fas fa-language"></i></span>${t.languagesSection.title}`);
        const langCards = document.querySelectorAll('.language-card-new');
        if (langCards[0]) {
            setText('.language-card-new:nth-child(1) .language-name-new', t.languagesSection.spanish.name);
            setText('.language-card-new:nth-child(1) .level-badge', t.languagesSection.spanish.level);
        }
        if (langCards[1]) {
            setText('.language-card-new:nth-child(2) .language-name-new', t.languagesSection.english.name);
            setText('.language-card-new:nth-child(2) .level-badge', t.languagesSection.english.level);
            setHTML('.language-card-new:nth-child(2) .learning-badge', `<i class="fas fa-book-reader"></i> ${t.languagesSection.english.learning}`);
        }
        
        setHTML('#educacion .section-title', `<span class="title-icon"><i class="fas fa-graduation-cap"></i></span>${t.educationSection.title}`);
        const eduCards = document.querySelectorAll('.education-card');
        if (eduCards[0]) {
            setText('.education-card:nth-child(1) .education-title', t.educationSection.degree1.title);
            setText('.education-card:nth-child(1) .education-institution', t.educationSection.degree1.institution);
            setText('.education-card:nth-child(1) .education-date', t.educationSection.degree1.date);
        }
        if (eduCards[1]) {
            setText('.education-card:nth-child(2) .education-title', t.educationSection.degree2.title);
            setText('.education-card:nth-child(2) .education-institution', t.educationSection.degree2.institution);
            setText('.education-card:nth-child(2) .education-date', t.educationSection.degree2.date);
        }
        
        setHTML('#contacto .section-title', `<span class="title-icon"><i class="fas fa-envelope"></i></span>${t.contactSection.title}`);
        setText('.contact-text', t.contactSection.text);
        const contactCards = document.querySelectorAll('.contact-card h3');
        if (contactCards[0]) contactCards[0].textContent = t.contactSection.email;
        if (contactCards[1]) contactCards[1].textContent = t.contactSection.phone;
        
        const footerPs = document.querySelectorAll('.footer-content p');
        if (footerPs[1]) footerPs[1].textContent = t.footer.developed;
        
    } else {
        // KHABALA EN INGLÉS
        setHTML('.nav-logo span', `${t.khabala.nav.back}<span class="accent">${t.khabala.nav.projects}</span>`);
        
        const navLinks = document.querySelectorAll('.nav-link');
        if (navLinks[0]) setHTML('.nav-link:nth-child(1)', `<i class="fas fa-th"></i> ${t.khabala.nav.all}`);
        if (navLinks[1]) setHTML('.nav-link:nth-child(2)', `<i class="fas fa-globe"></i> ${t.khabala.nav.web}`);
        if (navLinks[2]) setHTML('.nav-link:nth-child(3)', `<i class="fas fa-laptop-code"></i> ${t.khabala.nav.systems}`);
        if (navLinks[3]) setHTML('.nav-link:nth-child(4)', `<i class="fas fa-mobile-alt"></i> ${t.khabala.nav.apps}`);
        if (navLinks[4]) setHTML('.nav-link:nth-child(5)', `<i class="fas fa-brain"></i> ${t.khabala.nav.ai}`);
        
        setText('.profile-name', t.khabala.hero.title);
        setText('.profile-bio', t.khabala.hero.bio);
        setText('.motivational-quote', t.khabala.hero.quote);
        
        const stats = document.querySelectorAll('.stat-label');
        if (stats[0]) stats[0].textContent = t.khabala.hero.stats.projects;
        if (stats[1]) stats[1].textContent = t.khabala.hero.stats.upcoming;
        
        const galleryBtns = document.querySelectorAll('.gallery-btn span');
        galleryBtns.forEach(btn => btn.textContent = t.khabala.projectDetails.viewGallery);
        
        const projectDescs = document.querySelectorAll('.project-description-new');
        const projectKeys = ['qonvertir', 'calcumas', 'naiya', 'adplus', 'mirugo', 'blockcortex', 'villadrone', 'crean'];
        projectDescs.forEach((desc, i) => {
            const key = projectKeys[i];
            if (t.projectsSection.projects[key]) {
                desc.textContent = t.projectsSection.projects[key].description;
            }
        });
        
        const badges = document.querySelectorAll('.project-badge-category');
        badges.forEach(badge => {
            const icon = badge.querySelector('i');
            const iconHTML = icon ? icon.outerHTML : '';
            
            if (badge.classList.contains('web')) {
                badge.innerHTML = `${iconHTML} Website`;
            } else if (badge.classList.contains('sistema')) {
                badge.innerHTML = `${iconHTML} System`;
            } else if (badge.classList.contains('app')) {
                badge.innerHTML = `${iconHTML} App`;
            } else if (badge.classList.contains('ia')) {
                badge.innerHTML = `${iconHTML} AI`;
            }
        });
        
        setHTML('.section-title', `<i class="fas fa-rocket"></i> ${t.khabala.upcoming.title}`);
        
        const upcomingCards = document.querySelectorAll('.upcoming-card');
        if (upcomingCards[0]) {
            setText('.upcoming-card:nth-child(1) h3', t.khabala.upcoming.naiya.title);
            setText('.upcoming-card:nth-child(1) p', t.khabala.upcoming.naiya.description);
            setHTML('.upcoming-card:nth-child(1) .status-badge', `<i class="fas fa-code"></i> ${t.khabala.upcoming.naiya.status}`);
        }
        if (upcomingCards[1]) {
            setText('.upcoming-card:nth-child(2) h3', t.khabala.upcoming.horror.title);
            setText('.upcoming-card:nth-child(2) p', t.khabala.upcoming.horror.description);
            setHTML('.upcoming-card:nth-child(2) .status-badge', `<i class="fas fa-lightbulb"></i> ${t.khabala.upcoming.horror.status}`);
        }
        if (upcomingCards[2]) {
            setText('.upcoming-card:nth-child(3) h3', t.khabala.upcoming.sales.title);
            setText('.upcoming-card:nth-child(3) p', t.khabala.upcoming.sales.description);
            setHTML('.upcoming-card:nth-child(3) .status-badge', `<i class="fas fa-lightbulb"></i> ${t.khabala.upcoming.sales.status}`);
        }
        
        setText('#galleryTitle', t.khabala.gallery.title);
        setText('.no-images-content h3', t.khabala.gallery.noImages.title);
        setText('.no-images-content p', t.khabala.gallery.noImages.message);
        setText('#noImagesOk', t.khabala.gallery.noImages.button);
        
        const footerPs = document.querySelectorAll('.footer-content p');
        if (footerPs[1]) footerPs[1].textContent = t.footer.developed;
    }
}

// Funciones principales
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'es';
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
}

function changeLanguage(lang) {
    setLanguage(lang);
    
    if (lang === 'es') {
        restoreOriginalTexts();
    } else {
        translateToEnglish();
    }
    
    updateButton(lang);
    
    // Actualizar galerías si están disponibles
    if (typeof window.updateProjectGalleries === 'function') {
        window.updateProjectGalleries();
    }
}

function updateButton(lang) {
    const button = document.getElementById('lang-button');
    if (button) {
        const flag = button.querySelector('.flag');
        const text = button.querySelector('.lang-text');
        
        if (lang === 'es') {
            if (flag) flag.textContent = '🇺🇸';
            if (text) text.textContent = 'EN';
        } else {
            if (flag) flag.textContent = '🇪🇸';
            if (text) text.textContent = 'ES';
        }
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    // CRÍTICO: Primero capturar los textos originales
    captureOriginalTexts();
    
    const currentLang = getCurrentLanguage();
    
    // Si el idioma guardado es inglés, traducir
    if (currentLang === 'en') {
        translateToEnglish();
    }
    
    updateButton(currentLang);
    
    // Event listener
    const button = document.getElementById('lang-button');
    if (button) {
        button.addEventListener('click', () => {
            const current = getCurrentLanguage();
            const newLang = current === 'es' ? 'en' : 'es';
            changeLanguage(newLang);
        });
    }
});

// ========================================
// TRADUCCIONES DE GALERÍAS
// ========================================

const galleryTranslations = {
    es: {
        'qonvertir': {
            title: 'QONVERTIR',
            captions: [
                'Página principal con todas las herramientas',
                'Generador de códigos QR',
                'Herramientas PDF',
                'Compresor de Imagenes'
            ]
        },
        'calcumas': {
            title: 'CALCUMAS',
            captions: [
                'Página de inicio con las 4 calculadoras',
                'Calculadora científica',
                'Calculadora de IMC y calorías',
                'Calculadora de salario neto México',
                'Calculadora de Prestamos'
            ]
        },
        'naiya': {
            title: 'Naiya: La voz que une culturas',
            captions: [
                'Pantalla principal',
                'Comunidad',
                'Notas',
                'Estudio',
                'Ajuste'
            ]
        },
        'ad-plus': {
            title: 'AD+ - Proyecto de Videojuegos',
            captions: []
        },
        'mirugo': {
            title: 'MIRUGO - Streaming Platform',
            captions: [
                'Página principal de Inicio',
                'Inicio de Sesion',
                'Creador de Perfiles',
                'Catálogo de contenido',
                'Reproductor de video'
            ]
        },
        'blockcortex': {
            title: 'BLOCKCORTEX - IA Híbrida con Blockchain',
            captions: []
        },
        'villadrone': {
            title: 'Villa Drone - Sistema Agrícola',
            captions: [
                'Dashboard principal con métricas'
            ]
        },
        'crean': {
            title: 'C.R.E.A.N - Sistema de Inventarios',
            captions: []
        }
    },
    en: {
        'qonvertir': {
            title: 'QONVERTIR',
            captions: [
                'Main page with all tools',
                'QR code generator',
                'PDF tools',
                'Image compressor'
            ]
        },
        'calcumas': {
            title: 'CALCUMAS',
            captions: [
                'Home page with all 4 calculators',
                'Scientific calculator',
                'BMI and calorie calculator',
                'Mexico net salary calculator',
                'Loan calculator'
            ]
        },
        'naiya': {
            title: 'Naiya: The voice that unites cultures',
            captions: [
                'Main screen',
                'Community',
                'Notes',
                'Study',
                'Settings'
            ]
        },
        'ad-plus': {
            title: 'AD+ - Video Games Project',
            captions: []
        },
        'mirugo': {
            title: 'MIRUGO - Streaming Platform',
            captions: [
                'Main home page',
                'Sign in',
                'Profile creator',
                'Content catalog',
                'Video player'
            ]
        },
        'blockcortex': {
            title: 'BLOCKCORTEX - Hybrid AI with Blockchain',
            captions: []
        },
        'villadrone': {
            title: 'Villa Drone - Agricultural System',
            captions: [
                'Main dashboard with metrics'
            ]
        },
        'crean': {
            title: 'C.R.E.A.N - Inventory System',
            captions: []
        }
    }
};

// Rutas de imágenes (no cambian con el idioma)
const projectImagesPaths = {
    'qonvertir': [
        'Img/galleries/qonvertir/qonvertir.png',
        'Img/galleries/qonvertir/qon.png',
        'Img/galleries/qonvertir/qon2.png',
        'Img/galleries/qonvertir/qon3.png'
    ],
    'calcumas': [
        'Img/galleries/calcumas/calcumas.png',
        'Img/galleries/calcumas/cal4.png',
        'Img/galleries/calcumas/cal.png',
        'Img/galleries/calcumas/cal2.png',
        'Img/galleries/calcumas/cal3.png'
    ],
    'naiya': [
        'Img/galleries/naiya/naiya.png',
        'Img/galleries/naiya/nai2.png',
        'Img/galleries/naiya/nai3.png',
        'Img/galleries/naiya/nai4.png',
        'Img/galleries/naiya/nai5.png'
    ],
    'ad-plus': [],
    'mirugo': [
        'Img/galleries/mirugo/mirugo.png',
        'Img/galleries/mirugo/mir3.png',
        'Img/galleries/mirugo/mir2.png',
        'Img/galleries/mirugo/mir4.png',
        'Img/galleries/mirugo/mir5.png'
    ],
    'blockcortex': [],
    'villadrone': [
        'Img/galleries/villadrone/villadrone.png'
    ],
    'crean': []
};

// Función para obtener galerías traducidas
function getProjectGalleries() {
    const currentLang = getCurrentLanguage();
    const translations = galleryTranslations[currentLang];
    const galleries = {};
    
    Object.keys(translations).forEach(projectKey => {
        const imagePaths = projectImagesPaths[projectKey] || [];
        
        galleries[projectKey] = {
            title: translations[projectKey].title,
            images: []
        };
        
        // Combinar rutas con captions traducidos
        translations[projectKey].captions.forEach((caption, i) => {
            if (imagePaths[i]) {
                galleries[projectKey].images.push({
                    src: imagePaths[i],
                    caption: caption
                });
            }
        });
    });
    
    return galleries;
}

// Función para actualizar galerías (llamada cuando cambia el idioma)
window.updateProjectGalleries = function() {
    if (typeof window.projectGalleries !== 'undefined') {
        window.projectGalleries = getProjectGalleries();
    }

};
