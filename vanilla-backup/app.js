document.addEventListener('DOMContentLoaded', () => {
    // --- Safe check for config existence ---
    const config = typeof PORTFOLIO_CONFIG !== 'undefined' ? PORTFOLIO_CONFIG : {
        profile: { fullName: "Rozindar Haryo Salam", shortName: "ROZINDAR", title: {id:"Akuntansi",en:"Accounting"}, badgeText: {id:"Aktif",en:"Active"}, leadText: {id:"Fin",en:"Fin"}, email: "contact@example.com", location: "Indonesia", socials: { linkedin: "#", github: "#", twitter: "#" } },
        stats: [],
        skills: [],
        journey: [],
        simulatorDefaults: { baseRevenue: 3000000, expectedGrowth: 10, operatingMargin: 20 },
        translations: {}
    };

    // --- State Management: Active Language ---
    let currentLang = localStorage.getItem('portfolio-lang') || 'id';

    // Helper to get text based on current language
    function getTxt(field) {
        if (!field) return '';
        if (typeof field === 'object') {
            return field[currentLang] || field['id'] || '';
        }
        return field;
    }

    // Bind language switcher buttons
    const btnLangId = document.getElementById('btn-lang-id');
    const btnLangEn = document.getElementById('btn-lang-en');

    if (btnLangId && btnLangEn) {
        btnLangId.addEventListener('click', () => {
            if (currentLang !== 'id') {
                currentLang = 'id';
                localStorage.setItem('portfolio-lang', 'id');
                updateLanguageState();
            }
        });

        btnLangEn.addEventListener('click', () => {
            if (currentLang !== 'en') {
                currentLang = 'en';
                localStorage.setItem('portfolio-lang', 'en');
                updateLanguageState();
            }
        });
    }

    // --- State Management: Theme Toggle ---
    const btnThemeToggle = document.getElementById('btn-theme-toggle');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (btnThemeToggle) btnThemeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-theme');
        if (btnThemeToggle) btnThemeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

    if (btnThemeToggle) {
        btnThemeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
            btnThemeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        });
    }

    // Refresh dynamic text on the page
    function updateLanguageState() {
        // Toggle active button style
        if (btnLangId && btnLangEn) {
            if (currentLang === 'id') {
                btnLangId.classList.add('active');
                btnLangEn.classList.remove('active');
            } else {
                btnLangEn.classList.add('active');
                btnLangId.classList.remove('active');
            }
        }

        renderDynamicTexts();
        calculateFinancials(); // Re-trigger charts so labels and axes translate
        calculateRatios(); // Re-trigger ratio calculations to translate interpretations
    }

    // Dynamic rendering of texts
    function renderDynamicTexts() {
        // Logo
        const logoLink = document.getElementById('logo-link');
        if (logoLink) {
            logoLink.innerHTML = `<span class="logo-accent">$</span>${config.profile.shortName}<span class="logo-light">.ANALYTICS</span>`;
        }

        // Navigation
        const linkHero = document.getElementById('link-hero');
        const linkExpertise = document.getElementById('link-expertise');
        const linkDashboard = document.getElementById('link-dashboard');
        const linkProjects = document.getElementById('link-projects');
        const linkEducation = document.getElementById('link-education');
        const linkJourney = document.getElementById('link-journey');
        const linkContact = document.getElementById('link-contact');

        if (linkHero) linkHero.textContent = getTxt(config.translations.navHome);
        if (linkExpertise) linkExpertise.textContent = getTxt(config.translations.navExpertise);
        if (linkDashboard) linkDashboard.textContent = getTxt(config.translations.navDemo);
        if (linkProjects) linkProjects.textContent = getTxt(config.translations.navProjects);
        if (linkEducation) linkEducation.textContent = getTxt(config.translations.navEducation);
        if (linkJourney) linkJourney.textContent = getTxt(config.translations.navJourney);
        if (linkContact) linkContact.textContent = getTxt(config.translations.navContact);

        // Hero Profile elements
        const heroBadgeText = document.getElementById('hero-badge-text');
        if (heroBadgeText) heroBadgeText.textContent = getTxt(config.profile.badgeText);

        const mainHeroTitle = document.getElementById('main-hero-title');
        if (mainHeroTitle) {
            mainHeroTitle.innerHTML = `${config.profile.fullName} <br><span class="gradient-text">${getTxt(config.profile.title)}</span>`;
        }

        const heroLeadText = document.getElementById('hero-lead-text');
        if (heroLeadText) heroLeadText.textContent = getTxt(config.profile.leadText);

        const btnExploreDashboard = document.getElementById('btn-explore-dashboard');
        if (btnExploreDashboard) {
            btnExploreDashboard.innerHTML = `${getTxt(config.translations.heroBtnDemo)} <i class="fa-solid fa-chart-line icon-right"></i>`;
        }

        const btnDownloadCvHero = document.getElementById('btn-download-cv-hero');
        if (btnDownloadCvHero) {
            btnDownloadCvHero.innerHTML = `${getTxt(config.translations.cvText)} <i class="fa-solid fa-download icon-right"></i>`;
        }

        const labelCvHeader = document.getElementById('label-cv-header');
        if (labelCvHeader) {
            labelCvHeader.textContent = getTxt(config.translations.cvTextShort);
        }

        const btnGetInTouch = document.getElementById('btn-get-in-touch');
        if (btnGetInTouch) {
            btnGetInTouch.innerHTML = `${getTxt(config.translations.heroBtnConnect)} <i class="fa-solid fa-arrow-right icon-right"></i>`;
        }

        // Section Headers
        const labelSubExpertise = document.getElementById('label-sub-expertise');
        const labelTitleExpertise = document.getElementById('label-title-expertise');
        if (labelSubExpertise) labelSubExpertise.textContent = getTxt(config.translations.subExpertise);
        if (labelTitleExpertise) labelTitleExpertise.textContent = getTxt(config.translations.titleExpertise);

        const labelSubDemo = document.getElementById('label-sub-demo');
        const labelTitleDemo = document.getElementById('label-title-demo');
        const labelDescDemo = document.getElementById('label-desc-demo');
        if (labelSubDemo) labelSubDemo.textContent = getTxt(config.translations.subDemo);
        if (labelTitleDemo) labelTitleDemo.textContent = getTxt(config.translations.titleDemo);
        if (labelDescDemo) labelDescDemo.textContent = getTxt(config.translations.descDemo);

        const labelSubProjects = document.getElementById('label-sub-projects');
        const labelTitleProjects = document.getElementById('label-title-projects');
        if (labelSubProjects) labelSubProjects.textContent = getTxt(config.translations.subProjects);
        if (labelTitleProjects) labelTitleProjects.textContent = getTxt(config.translations.titleProjects);

        const labelSubEducation = document.getElementById('label-sub-education');
        const labelTitleEducation = document.getElementById('label-title-education');
        const labelEduAcademic = document.getElementById('label-edu-academic');
        const labelEduCerts = document.getElementById('label-edu-certs');
        if (labelSubEducation) labelSubEducation.textContent = getTxt(config.translations.subEducation);
        if (labelTitleEducation) labelTitleEducation.textContent = getTxt(config.translations.titleEducation);
        if (labelEduAcademic) labelEduAcademic.textContent = getTxt(config.translations.eduAcademic);
        if (labelEduCerts) labelEduCerts.textContent = getTxt(config.translations.eduCerts);

        const labelSubJourney = document.getElementById('label-sub-journey');
        const labelTitleJourney = document.getElementById('label-title-journey');
        if (labelSubJourney) labelSubJourney.textContent = getTxt(config.translations.subJourney);
        if (labelTitleJourney) labelTitleJourney.textContent = getTxt(config.translations.titleJourney);

        const labelSubContact = document.getElementById('label-sub-contact');
        const labelTitleContact = document.getElementById('label-title-contact');
        if (labelSubContact) labelSubContact.textContent = getTxt(config.translations.subContact);
        if (labelTitleContact) labelTitleContact.textContent = getTxt(config.translations.titleContact);

        // Sidebar Simulator Labels
        const labelSimHeader = document.getElementById('label-sim-header');
        const labelSimSub = document.getElementById('label-sim-sub');
        const labelSimRevenue = document.getElementById('label-sim-revenue');
        const labelSimGrowth = document.getElementById('label-sim-growth');
        const labelSimOpex = document.getElementById('label-sim-opex');
        const labelSimReset = document.getElementById('label-sim-reset');

        if (labelSimHeader) labelSimHeader.textContent = getTxt(config.translations.simHeader);
        if (labelSimSub) labelSimSub.textContent = getTxt(config.translations.simSub);
        if (labelSimRevenue) labelSimRevenue.textContent = getTxt(config.translations.simRevenue);
        if (labelSimGrowth) labelSimGrowth.textContent = getTxt(config.translations.simGrowth);
        if (labelSimOpex) labelSimOpex.textContent = getTxt(config.translations.simMargin);
        if (labelSimReset) labelSimReset.textContent = getTxt(config.translations.simReset);

        // Simulator Window Tab Labels
        const labelTabForecast = document.getElementById('label-tab-forecast');
        const labelTabCapital = document.getElementById('label-tab-capital');
        const labelChartTitle = document.getElementById('label-chart-title');
        const labelChartDesc = document.getElementById('label-chart-desc');
        const labelLegendRev = document.getElementById('label-legend-rev');
        const labelLegendNet = document.getElementById('label-legend-net');
        const labelCapitalTitle = document.getElementById('label-capital-title');
        const labelCapitalDesc = document.getElementById('label-capital-desc');
        const labelDonutOperating = document.getElementById('label-donut-operating');
        const labelTabRatios = document.getElementById('label-tab-ratios');
        const labelRatiosTitle = document.getElementById('label-ratios-title');
        const labelRatiosDesc = document.getElementById('label-ratios-desc');
        const labelCalcCa = document.getElementById('label-calc-ca');
        const labelCalcCl = document.getElementById('label-calc-cl');
        const labelCalcNi = document.getElementById('label-calc-ni');
        const labelCalcRev = document.getElementById('label-calc-rev');
        const labelRatioCurrent = document.getElementById('label-ratio-current');
        const labelRatioProfit = document.getElementById('label-ratio-profit');

        if (labelTabForecast) labelTabForecast.textContent = getTxt(config.translations.simTabForecast);
        if (labelTabCapital) labelTabCapital.textContent = getTxt(config.translations.simTabCapital);
        if (labelTabRatios) labelTabRatios.textContent = getTxt(config.translations.simTabRatios);
        if (labelChartTitle) labelChartTitle.textContent = getTxt(config.translations.simChartTitle);
        if (labelChartDesc) labelChartDesc.textContent = getTxt(config.translations.simChartDesc);
        if (labelLegendRev) labelLegendRev.textContent = getTxt(config.translations.simLegendRev);
        if (labelLegendNet) labelLegendNet.textContent = getTxt(config.translations.simLegendNet);
        if (labelCapitalTitle) labelCapitalTitle.textContent = getTxt(config.translations.simCapitalTitle);
        if (labelCapitalDesc) labelCapitalDesc.textContent = getTxt(config.translations.simCapitalDesc);
        if (labelDonutOperating) labelDonutOperating.textContent = getTxt(config.translations.donutOperatingMargin);
        if (labelRatiosTitle) labelRatiosTitle.textContent = getTxt(config.translations.ratiosTitle);
        if (labelRatiosDesc) labelRatiosDesc.textContent = getTxt(config.translations.ratiosDesc);
        if (labelCalcCa) labelCalcCa.textContent = getTxt(config.translations.calcCa);
        if (labelCalcCl) labelCalcCl.textContent = getTxt(config.translations.calcCl);
        if (labelCalcNi) labelCalcNi.textContent = getTxt(config.translations.calcNi);
        if (labelCalcRev) labelCalcRev.textContent = getTxt(config.translations.calcRev);
        if (labelRatioCurrent) labelRatioCurrent.textContent = getTxt(config.translations.ratioCurrent);
        if (labelRatioProfit) labelRatioProfit.textContent = getTxt(config.translations.ratioProfit);

        // Contact Form Labels
        const labelFormName = document.getElementById('label-form-name');
        const labelFormEmail = document.getElementById('label-form-email');
        const labelFormSubject = document.getElementById('label-form-subject');
        const labelFormMessage = document.getElementById('label-form-message');
        const btnSubmitForm = document.getElementById('btn-submit-form');
        const labelFormSuccessHeader = document.getElementById('label-form-success-header');
        const labelFormSuccessDesc = document.getElementById('label-form-success-desc');
        const btnCloseSuccess = document.getElementById('btn-close-success');

        if (labelFormName) labelFormName.textContent = getTxt(config.translations.formName);
        if (labelFormEmail) labelFormEmail.textContent = getTxt(config.translations.formEmail);
        if (labelFormSubject) labelFormSubject.textContent = getTxt(config.translations.formSubject);
        if (labelFormMessage) labelFormMessage.textContent = getTxt(config.translations.formMessage);
        if (btnSubmitForm) {
            btnSubmitForm.innerHTML = `${getTxt(config.translations.formSubmit)} <i class="fa-solid fa-paper-plane icon-right"></i>`;
        }
        if (labelFormSuccessHeader) labelFormSuccessHeader.textContent = getTxt(config.translations.formSuccessHeader);
        if (labelFormSuccessDesc) labelFormSuccessDesc.textContent = getTxt(config.translations.formSuccessDesc);
        if (btnCloseSuccess) btnCloseSuccess.textContent = getTxt(config.translations.formSuccessClose);

        // Stats Grid
        const statsContainer = document.getElementById('stats-container');
        if (statsContainer && config.stats.length > 0) {
            statsContainer.innerHTML = config.stats.map(s => `
                <div class="stat-card glass-card">
                    <div class="stat-icon"><i class="fa-solid ${s.icon}"></i></div>
                    <div class="stat-number-wrapper">
                        ${s.prefix || ''}<span class="stat-number" data-target="${s.target}">0</span>${s.suffix || ''}
                    </div>
                    <p class="stat-label">${getTxt(s.label)}</p>
                </div>
            `).join('');
        }

        // Re-observe stats count-up after re-rendering
        const statNumbers = document.querySelectorAll('.stat-number');
        if (statsContainer && statNumbers.length > 0) {
            const countUp = () => {
                statNumbers.forEach((num) => {
                    const target = +num.getAttribute('data-target');
                    const duration = 1200;
                    const stepTime = 20;
                    const totalSteps = duration / stepTime;
                    const increment = target / totalSteps;
                    let current = 0;
                    let step = 0;
        
                    const timer = setInterval(() => {
                        current += increment;
                        step++;
                        if (step >= totalSteps) {
                            num.textContent = target;
                            clearInterval(timer);
                        } else {
                            num.textContent = Math.floor(current);
                        }
                    }, stepTime);
                });
            };
            countUp();
        }

        // Skills Grid
        const expertiseContainer = document.getElementById('expertise-container');
        if (expertiseContainer && config.skills.length > 0) {
            expertiseContainer.innerHTML = config.skills.map(s => `
                <div class="expertise-card glass-card hover-glow">
                    <div class="card-icon"><i class="fa-solid ${s.icon}"></i></div>
                    <h3>${getTxt(s.title)}</h3>
                    <p>${getTxt(s.description)}</p>
                </div>
            `).join('');
        }

        // Projects Grid
        const projectsContainer = document.getElementById('projects-container');
        if (projectsContainer && config.projects && config.projects.length > 0) {
            projectsContainer.innerHTML = config.projects.map(p => `
                <div class="project-card glass-card hover-glow">
                    <div class="project-header">
                        <div class="card-icon"><i class="fa-solid ${p.icon}"></i></div>
                        <span class="project-metric">${getTxt(p.metric)}</span>
                    </div>
                    <span class="project-category">${getTxt(p.category)}</span>
                    <h3>${getTxt(p.title)}</h3>
                    <p>${getTxt(p.description)}</p>
                    <ul class="project-tags">
                        ${p.tags.map(tag => `<li>${tag}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
        }

        // Academic Education Grid
        const eduAcademicContainer = document.getElementById('education-academic-container');
        if (eduAcademicContainer && config.education && config.education.length > 0) {
            eduAcademicContainer.innerHTML = config.education.map(e => `
                <div class="education-card glass-card hover-glow">
                    <span class="edu-date">${e.date}</span>
                    <h3>${getTxt(e.degree)}</h3>
                    <p class="edu-institution">${e.institution}</p>
                    <span class="edu-gpa">${e.gpa}</span>
                </div>
            `).join('');
        }

        // Certifications Grid
        const eduCertsContainer = document.getElementById('education-certs-container');
        if (eduCertsContainer && config.certifications && config.certifications.length > 0) {
            eduCertsContainer.innerHTML = config.certifications.map(c => `
                <div class="education-card glass-card hover-glow">
                    <span class="edu-date">${c.date}</span>
                    <h3>${getTxt(c.title)}</h3>
                    <p class="edu-institution">${c.provider}</p>
                    <span class="edu-credential">${c.credentialId}</span>
                </div>
            `).join('');
        }

        // Journey Timeline
        const timelineContainer = document.getElementById('timeline-container');
        if (timelineContainer && config.journey.length > 0) {
            timelineContainer.innerHTML = config.journey.map(j => `
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">${j.date}</div>
                    <div class="timeline-card glass-card">
                        <h3>${getTxt(j.role)}</h3>
                        <p class="timeline-company">${j.company}</p>
                        <p>${getTxt(j.description)}</p>
                        <ul class="timeline-tags">
                            ${j.tags.map(tag => `<li>${tag}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `).join('');
        }

        // Contact info cards
        const contactInfoContainer = document.getElementById('contact-info-container');
        if (contactInfoContainer) {
            contactInfoContainer.innerHTML = `
                <div class="info-card glass-card">
                    <div class="info-icon"><i class="fa-solid fa-envelope"></i></div>
                    <div>
                        <h4>${getTxt(config.translations.infoEmail)}</h4>
                        <p>${config.profile.email}</p>
                    </div>
                </div>
                <div class="info-card glass-card">
                    <div class="info-icon"><i class="fa-solid fa-location-dot"></i></div>
                    <div>
                        <h4>${getTxt(config.translations.infoLocation)}</h4>
                        <p>${config.profile.location}</p>
                    </div>
                </div>
                <div class="info-card glass-card">
                    <div class="info-icon"><i class="fa-solid fa-shield-halved"></i></div>
                    <div>
                        <h4>${getTxt(config.translations.infoIntegrity)}</h4>
                        <p>${getTxt(config.translations.infoIntegrityDesc)}</p>
                    </div>
                </div>
            `;
        }

        // Footer copyright
        const footerCopyright = document.getElementById('footer-copyright');
        if (footerCopyright) {
            footerCopyright.innerHTML = `&copy; 2026 ${config.profile.fullName}. All rights reserved. Created with absolute precision.`;
        }

        // Footer Socials
        const footerSocialsContainer = document.getElementById('footer-socials-container');
        if (footerSocialsContainer) {
            footerSocialsContainer.innerHTML = `
                <a href="${config.profile.socials.linkedin}" aria-label="LinkedIn" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="${config.profile.socials.github}" aria-label="GitHub" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="${config.profile.socials.twitter}" aria-label="Twitter" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            `;
        }
    }


    // --- Canvas Background Animation (Adjusted for Light Mode) ---
    const canvas = document.getElementById('canvas-bg');
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = (canvas.width = window.innerWidth);
        height = (canvas.height = window.innerHeight);
    });

    const particles = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 25000));
    const connectionDistance = 130;
    const mouse = { x: null, y: null, radius: 150 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.radius = Math.random() * 2 + 1;
            // Soft slate-gray/sage nodes for light mode
            this.color = Math.random() > 0.5 ? 'rgba(15, 23, 42, 0.08)' : 'rgba(11, 80, 56, 0.12)';
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            if (mouse.x !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.hypot(dx, dy);

                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x -= (dx / dist) * force * 0.5;
                    this.y -= (dy / dist) * force * 0.5;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p) => {
            p.update();
            p.draw();
        });

        // Darker connections with lower opacity for light background
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.hypot(dx, dy);

                if (dist < connectionDistance) {
                    const alpha = (1 - dist / connectionDistance) * 0.06;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(15, 23, 42, ${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animateParticles);
    }
    animateParticles();


    // --- Interactive Financial Dashboard & Scenario Modeler ---
    const rangeRev = document.getElementById('range-revenue');
    const rangeGrowth = document.getElementById('range-growth');
    const rangeOpex = document.getElementById('range-opex');

    const valRev = document.getElementById('val-revenue');
    const valGrowth = document.getElementById('val-growth');
    const valOpex = document.getElementById('val-opex');

    const btnReset = document.getElementById('btn-reset-simulator');
    const tabButtons = document.querySelectorAll('.dash-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    const forecastChart = document.getElementById('forecast-chart');
    const allocationPie = document.getElementById('allocation-pie');
    const pieCenterValue = document.getElementById('pie-center-value');
    const pieLabelsList = document.getElementById('pie-labels-list');
    const chartTooltip = document.getElementById('chart-tooltip');

    // Initialize inputs from config
    if (rangeRev && rangeGrowth && rangeOpex) {
        rangeRev.value = config.simulatorDefaults.baseRevenue;
        rangeGrowth.value = config.simulatorDefaults.expectedGrowth;
        rangeOpex.value = config.simulatorDefaults.operatingMargin;
        updateSliderLabels();
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');

            calculateFinancials();
            calculateRatios();
        });
    });

    if (btnReset) {
        btnReset.addEventListener('click', () => {
            rangeRev.value = config.simulatorDefaults.baseRevenue;
            rangeGrowth.value = config.simulatorDefaults.expectedGrowth;
            rangeOpex.value = config.simulatorDefaults.operatingMargin;
            updateSliderLabels();
            calculateFinancials();
        });
    }

    if (rangeRev && rangeGrowth && rangeOpex) {
        [rangeRev, rangeGrowth, rangeOpex].forEach(input => {
            input.addEventListener('input', () => {
                updateSliderLabels();
                calculateFinancials();
            });
        });
    }

    // Bind calculator inputs
    const inputCa = document.getElementById('calc-current-assets');
    const inputCl = document.getElementById('calc-current-liabilities');
    const inputNi = document.getElementById('calc-net-income');
    const inputRev = document.getElementById('calc-revenue');

    if (inputCa && inputCl && inputNi && inputRev) {
        [inputCa, inputCl, inputNi, inputRev].forEach(input => {
            input.addEventListener('input', calculateRatios);
        });
    }

    function formatCurrency(val) {
        if (val >= 1000000) {
            return '$' + (val / 1000000).toFixed(2) + 'M';
        } else if (val >= 1000) {
            return '$' + (val / 1000).toFixed(0) + 'K';
        }
        return '$' + val.toFixed(0);
    }

    function updateSliderLabels() {
        if (valRev && valGrowth && valOpex) {
            valRev.textContent = formatCurrency(+rangeRev.value);
            valGrowth.textContent = rangeGrowth.value + '%';
            valOpex.textContent = rangeOpex.value + '%';
        }
    }

    function calculateFinancials() {
        if (!rangeRev) return;

        const baseRevenue = +rangeRev.value;
        const growthRate = (+rangeGrowth.value) / 100;
        const opexMargin = (+rangeOpex.value) / 100;

        const forecastData = [];
        let currentRev = baseRevenue;
        
        for (let year = 1; year <= 5; year++) {
            currentRev = currentRev * (1 + growthRate);
            const netIncome = currentRev * opexMargin;
            forecastData.push({
                year: currentLang === 'id' ? `Tahun ${year}` : `Year ${year}`,
                revenue: currentRev,
                netIncome: netIncome
            });
        }

        renderLineChart(forecastData);
        renderAllocationPie(opexMargin);
    }

    function calculateRatios() {
        const inputCaEl = document.getElementById('calc-current-assets');
        const inputClEl = document.getElementById('calc-current-liabilities');
        const inputNiEl = document.getElementById('calc-net-income');
        const inputRevEl = document.getElementById('calc-revenue');

        if (!inputCaEl || !inputClEl || !inputNiEl || !inputRevEl) return;

        const ca = +inputCaEl.value || 0;
        const cl = +inputClEl.value || 0;
        const ni = +inputNiEl.value || 0;
        const rev = +inputRevEl.value || 0;

        // Current Ratio
        const currentRatio = cl > 0 ? (ca / cl) : 0;
        const valCurrent = document.getElementById('val-ratio-current');
        if (valCurrent) valCurrent.textContent = currentRatio.toFixed(2) + 'x';

        const descCurrent = document.getElementById('desc-ratio-current');
        if (descCurrent) {
            if (currentRatio >= 2.0) {
                descCurrent.textContent = currentLang === 'id' ? "Likuiditas prima. Mampu melunasi kewajiban jangka pendek dengan aman." : "Excellent liquidity. Capable of safely covering short-term obligations.";
                descCurrent.className = "ratio-interpretation healthy";
            } else if (currentRatio >= 1.0) {
                descCurrent.textContent = currentLang === 'id' ? "Likuiditas memadai, namun perlu dipantau secara rutin." : "Adequate liquidity, but should be monitored regularly.";
                descCurrent.className = "ratio-interpretation warning";
            } else {
                descCurrent.textContent = currentLang === 'id' ? "Risiko likuiditas tinggi. Kewajiban lancar melebihi aset lancar." : "High liquidity risk. Current liabilities exceed current assets.";
                descCurrent.className = "ratio-interpretation danger";
            }
        }

        // Net Profit Margin
        const netProfitMargin = rev > 0 ? (ni / rev) * 100 : 0;
        const valProfit = document.getElementById('val-ratio-profit');
        if (valProfit) valProfit.textContent = netProfitMargin.toFixed(1) + '%';

        const descProfit = document.getElementById('desc-ratio-profit');
        if (descProfit) {
            if (netProfitMargin >= 15.0) {
                descProfit.textContent = currentLang === 'id' ? "Profitabilitas tinggi. Efisiensi operasional sangat kuat." : "High profitability. Strong operational efficiency.";
                descProfit.className = "ratio-interpretation healthy";
            } else if (netProfitMargin >= 5.0) {
                descProfit.textContent = currentLang === 'id' ? "Profitabilitas rata-rata. Perlu optimalisasi struktur biaya." : "Average profitability. Cost structure optimization recommended.";
                descProfit.className = "ratio-interpretation warning";
            } else {
                descProfit.textContent = currentLang === 'id' ? "Profitabilitas rendah. Tekanan biaya operasional tinggi." : "Low profitability. High pressure from operating costs.";
                descProfit.className = "ratio-interpretation danger";
            }
        }
    }

    function renderLineChart(data) {
        if (!forecastChart) return;
        forecastChart.innerHTML = ''; 

        const width = 600;
        const height = 300;
        const padding = { top: 30, right: 30, bottom: 40, left: 60 };

        const xMax = 4;
        const maxVal = Math.max(...data.map(d => d.revenue)) * 1.1;

        const getXPos = (index) => padding.left + (index / xMax) * (width - padding.left - padding.right);
        const getYPos = (val) => height - padding.bottom - (val / maxVal) * (height - padding.top - padding.bottom);

        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.innerHTML = `
            <linearGradient id="revenue-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--accent-emerald)" stop-opacity="0.1"/>
                <stop offset="100%" stop-color="var(--accent-emerald)" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="net-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--accent-gold)" stop-opacity="0.08"/>
                <stop offset="100%" stop-color="var(--accent-gold)" stop-opacity="0"/>
            </linearGradient>
        `;
        forecastChart.appendChild(defs);

        const gridLinesCount = 4;
        for (let i = 0; i <= gridLinesCount; i++) {
            const val = (maxVal / gridLinesCount) * i;
            const y = getYPos(val);

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', padding.left);
            line.setAttribute('y1', y);
            line.setAttribute('x2', width - padding.right);
            line.setAttribute('y2', y);
            line.setAttribute('class', 'chart-grid');
            forecastChart.appendChild(line);

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', padding.left - 12);
            text.setAttribute('y', y + 3);
            text.setAttribute('text-anchor', 'end');
            text.setAttribute('class', 'chart-axis-text');
            text.textContent = formatCurrency(val);
            forecastChart.appendChild(text);
        }

        data.forEach((d, idx) => {
            const x = getXPos(idx);
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', x);
            text.setAttribute('y', height - padding.bottom + 20);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('class', 'chart-axis-text');
            text.textContent = d.year;
            forecastChart.appendChild(text);
        });

        let revPathD = '';
        let revAreaD = `M ${getXPos(0)} ${getYPos(0)} `;
        let netPathD = '';
        let netAreaD = `M ${getXPos(0)} ${getYPos(0)} `;

        data.forEach((d, idx) => {
            const x = getXPos(idx);
            const yRev = getYPos(d.revenue);
            const yNet = getYPos(d.netIncome);

            if (idx === 0) {
                revPathD += `M ${x} ${yRev} `;
                netPathD += `M ${x} ${yNet} `;
            } else {
                revPathD += `L ${x} ${yRev} `;
                netPathD += `L ${x} ${yNet} `;
            }

            revAreaD += `L ${x} ${yRev} `;
            netAreaD += `L ${x} ${yNet} `;
        });

        revAreaD += `L ${getXPos(data.length - 1)} ${height - padding.bottom} L ${getXPos(0)} ${height - padding.bottom} Z`;
        netAreaD += `L ${getXPos(data.length - 1)} ${height - padding.bottom} L ${getXPos(0)} ${height - padding.bottom} Z`;

        const revAreaPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        revAreaPath.setAttribute('d', revAreaD);
        revAreaPath.setAttribute('class', 'chart-area-revenue');
        forecastChart.appendChild(revAreaPath);

        const netAreaPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        netAreaPath.setAttribute('d', netAreaD);
        netAreaPath.setAttribute('class', 'chart-area-net');
        forecastChart.appendChild(netAreaPath);

        const revLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        revLine.setAttribute('d', revPathD);
        revLine.setAttribute('class', 'chart-line-revenue');
        forecastChart.appendChild(revLine);

        const netLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        netLine.setAttribute('d', netPathD);
        netLine.setAttribute('class', 'chart-line-net');
        forecastChart.appendChild(netLine);

        data.forEach((d, idx) => {
            const x = getXPos(idx);
            const yRev = getYPos(d.revenue);
            const yNet = getYPos(d.netIncome);

            const pointRev = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            pointRev.setAttribute('cx', x);
            pointRev.setAttribute('cy', yRev);
            pointRev.setAttribute('r', 4);
            pointRev.setAttribute('class', 'chart-point chart-point-rev');
            bindTooltipEvent(pointRev, x, yRev, `<strong>${getTxt(config.translations.simLegendRev)} (${d.year})</strong><br><span style="color:var(--accent-emerald)">${formatCurrency(d.revenue)}</span>`);
            forecastChart.appendChild(pointRev);

            const pointNet = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            pointNet.setAttribute('cx', x);
            pointNet.setAttribute('cy', yNet);
            pointNet.setAttribute('r', 4);
            pointNet.setAttribute('class', 'chart-point chart-point-net');
            bindTooltipEvent(pointNet, x, yNet, `<strong>${getTxt(config.translations.simLegendNet)} (${d.year})</strong><br><span style="color:var(--accent-gold)">${formatCurrency(d.netIncome)}</span>`);
            forecastChart.appendChild(pointNet);
        });
    }

    function bindTooltipEvent(element, x, y, content) {
        element.addEventListener('mouseenter', () => {
            const svgWidth = element.closest('svg').clientWidth;
            const scaleFactor = svgWidth / 600;

            chartTooltip.innerHTML = content;
            chartTooltip.style.opacity = 1;
            chartTooltip.style.left = (x * scaleFactor + 16) + 'px';
            chartTooltip.style.top = (y * scaleFactor) + 'px';
        });

        element.addEventListener('mouseleave', () => {
            chartTooltip.style.opacity = 0;
        });
    }

    function renderAllocationPie(opexMargin) {
        if (!allocationPie) return;
        allocationPie.innerHTML = ''; 

        const profit = opexMargin; 
        const cogs = 0.40; 
        const expansion = 0.20; 
        const gaVal = 1 - profit - cogs - expansion; 
        
        let categories = [
            { label: getTxt(config.translations.donutCogs), val: cogs, color: 'var(--accent-indigo)' },
            { label: getTxt(config.translations.donutExpansion), val: expansion, color: 'var(--accent-gold)' },
            { label: getTxt(config.translations.donutGa), val: gaVal > 0 ? gaVal : 0, color: '#f43f5e' },
            { label: getTxt(config.translations.donutOperatingMargin), val: profit, color: 'var(--accent-emerald)' }
        ];

        categories = categories.filter(c => c.val > 0);
        
        const total = categories.reduce((sum, c) => sum + c.val, 0);
        categories.forEach(c => c.pct = c.val / total);

        const r = 70;
        const cx = 100;
        const cy = 100;
        const circumference = 2 * Math.PI * r;

        const track = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        track.setAttribute('cx', cx);
        track.setAttribute('cy', cy);
        track.setAttribute('r', r);
        track.setAttribute('class', 'pie-track');
        allocationPie.appendChild(track);

        let accumulatedPct = 0;
        if (pieLabelsList) pieLabelsList.innerHTML = '';

        categories.forEach(cat => {
            const strokeDash = cat.pct * circumference;
            
            const slice = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            slice.setAttribute('cx', cx);
            slice.setAttribute('cy', cy);
            slice.setAttribute('r', r);
            slice.setAttribute('class', 'pie-slice');
            slice.setAttribute('stroke', cat.color);
            slice.style.strokeDasharray = `${strokeDash} ${circumference}`;
            slice.style.strokeDashoffset = -accumulatedPct * circumference;
            
            allocationPie.appendChild(slice);
            
            if (pieLabelsList) {
                const item = document.createElement('div');
                item.className = 'pie-label-item';
                item.innerHTML = `
                    <div class="pie-label-text">
                        <span class="pie-label-color" style="background-color: ${cat.color}"></span>
                        ${cat.label}
                    </div>
                    <div class="pie-label-val">${(cat.pct * 100).toFixed(0)}%</div>
                `;
                pieLabelsList.appendChild(item);
            }

            accumulatedPct += cat.pct;
        });

        if (pieCenterValue) pieCenterValue.textContent = (profit * 100).toFixed(0) + '%';
    }


    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('open')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
            });
        });
    }


    // --- Sticky Header Navigation Active Links ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });


    // --- Contact Form Submission Handling ---
    const contactForm = document.getElementById('portfolio-contact-form');
    const successOverlay = document.getElementById('form-success');
    const closeSuccessBtn = document.getElementById('btn-close-success');

    if (contactForm && successOverlay) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const subject = document.getElementById('form-subject').value;
            const message = document.getElementById('form-message').value;

            if (name && email && subject && message) {
                const submitBtn = document.getElementById('btn-submit-form');
                submitBtn.disabled = true;
                submitBtn.innerHTML = `${getTxt(config.translations.formSubmitting)} <i class="fa-solid fa-spinner fa-spin icon-right"></i>`;

                setTimeout(() => {
                    successOverlay.classList.add('show');
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `${getTxt(config.translations.formSubmit)} <i class="fa-solid fa-paper-plane icon-right"></i>`;
                    contactForm.reset();
                }, 1000);
            }
        });

        closeSuccessBtn.addEventListener('click', () => {
            successOverlay.classList.remove('show');
        });
    }

    // --- CV Blob Mock Download Handler ---
    const resumeData = `
ROZINDAR HARYO SALAM
Accounting & Finance Specialist
Email: rozindar.salam@example.com | Location: Jakarta, Indonesia
LinkedIn: linkedin.com/in/rozindar-haryo-salam

SUMMARY:
Specializing in corporate accounting, financial analysis, and precise ledger management. Dedicated to translating numbers into clear, actionable business insights.

EXPERIENCE:
- PT Solusi Finansial Utama (2024 - Present): Accounting & Finance Specialist
- Aura Capital Corp (2022 - 2024): Junior Finance Associate
- Local Audit Partners (2020 - 2022): Accounting Intern

EDUCATION:
- Universitas Indonesia: Bachelor of Science in Accounting (GPA 3.75 / 4.00)

CERTIFICATIONS:
- Brevet Tax A & B Certification (Ikatan Akuntan Indonesia, 2023)
- Microsoft Office Specialist: Excel Expert (Microsoft, 2022)
`;

    const cvBlob = new Blob([resumeData.trim()], { type: 'text/plain' });
    const cvUrl = URL.createObjectURL(cvBlob);

    const btnCvHero = document.getElementById('btn-download-cv-hero');
    const btnCvHeader = document.getElementById('btn-download-cv-header');
    if (btnCvHero) {
        btnCvHero.href = cvUrl;
        btnCvHero.download = "Rozindar_Haryo_Salam_Resume.txt";
    }
    if (btnCvHeader) {
        btnCvHeader.href = cvUrl;
        btnCvHeader.download = "Rozindar_Haryo_Salam_Resume.txt";
    }

    // --- Startup Initialization ---
    updateLanguageState();
});
