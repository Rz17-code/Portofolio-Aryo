'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import CanvasBackground from '../components/CanvasBackground';
import ProjectModal from '../components/ProjectModal';
import StatsBar from '../components/StatsBar';
import FinancialSimulator from '../components/FinancialSimulator';
import ContactForm from '../components/ContactForm';
import TaxDepreciationModal from '../components/TaxDepreciationModal';
import CertificationsModal from '../components/CertificationsModal';
import VisitorTracker from '../components/VisitorTracker';
import { generateCV } from '../utils/cvGenerator';

const copy = {
  navExperience: { id: 'Pengalaman', en: 'Experience', zh: '工作经历' },
  navDemo: { id: 'Demo Interaktif', en: 'Live Demo', zh: '互动演示' },
  navProjects: { id: 'Proyek', en: 'Projects', zh: '项目案例' },
  navCertifications: { id: 'Sertifikasi', en: 'Certifications', zh: '专业认证' },
  navContact: { id: 'Kontak', en: 'Contact', zh: '联系方式' },
  contactMe: { id: 'Hubungi saya', en: 'Contact me', zh: '与我联系' },
  copyEmail: { id: 'Salin Email', en: 'Copy Email', zh: '复制邮箱' },
  downloadCV: { id: 'Unduh CV (PDF)', en: 'Download CV (PDF)', zh: '下载简历 (PDF)' },
  location: { id: 'Lokasi', en: 'Location', zh: '工作地点' },
  skills: { id: 'Keahlian', en: 'Skills', zh: '专业技能' },
  education: { id: 'Pendidikan', en: 'Education', zh: '学历背景' },
  careerEyebrow: { id: 'Riwayat karier', en: 'Career history', zh: '职业履历' },
  careerTitle: { id: 'Pengalaman profesional', en: 'Professional experience', zh: '专业工作经验' },
  projectEyebrow: { id: 'Pilihan karya', en: 'Selected work', zh: '精选项目' },
  projectTitle: { id: 'Proyek dan dampak', en: 'Projects and impact', zh: '项目实践与成果' },
  certEyebrow: { id: 'Pengembangan profesional', en: 'Professional development', zh: '职业发展' },
  certTitle: { id: 'Sertifikasi', en: 'Certifications', zh: '专业证书' },
  contactLead: { id: 'Terbuka untuk peran akuntansi, keuangan, dan konsultasi.', en: 'Open to accounting, finance, and consulting opportunities.', zh: "诚求财务、会计及商业咨询相关工作机会。" },
  whatsapp: { id: 'WhatsApp', en: 'WhatsApp', zh: 'WhatsApp 电话' },
  language: { id: 'Bahasa', en: 'Language', zh: '语言选择' },
  lightMode: { id: 'Aktifkan mode terang', en: 'Enable light mode', zh: '切换浅色模式' },
  darkMode: { id: 'Aktifkan mode gelap', en: 'Enable dark mode', zh: '切换深色模式' },
  viewCaseStudy: { id: 'Lihat Detail Studi Kasus →', en: 'View Detailed Case Study →', zh: '查看详细案例研究 →' },
  catAll: { id: 'Semua Proyek', en: 'All Projects', zh: '所有项目' },
  catAccounting: { id: 'Akuntansi & Keuangan', en: 'Accounting & Cash Flow', zh: '会计与现金流' },
  catAnalytics: { id: 'Analisis Data', en: 'Data Analytics', zh: '数据分析' },
  catSoftware: { id: 'Aplikasi & Sistem Web', en: 'Web Apps & Systems', zh: 'Web 应用与系统' },
  taxDemoEyebrow: { id: "Demo Perpajakan & Aset Interaktif", en: "Interactive Tax & Asset Demo", zh: "互动税务与资产演示" },
  taxDemoTitle: { id: "Kalkulator Pajak Indonesia & Penyusutan Fiskal", en: "Indonesian Tax & Depreciation Engine", zh: "印尼税务与折旧计算引擎" },
  taxDemoDesc: { id: "Simulasikan perhitungan PPh Pasal 21 (TER & UU HPP), PPh 22, PPh Final (PP 55/2022), serta Jadwal Penyusutan Aset Tetap berdasarkan PMK 72/2023 secara instan dalam modul Pop-up.", en: "Simulate PPh 21, PPh 22, PPh Final, and Asset Depreciation schedules instantly in a Pop-up modal.", zh: "在弹窗中即时模拟 PPh 21, 22, PPh Final 及资产折旧计划。" },
  openTaxModal: { id: "Buka Kalkulator Pajak & Penyusutan (Pop-up) →", en: "Open Tax & Depreciation Calculator (Pop-up) →", zh: "打开税务与折旧计算器 (弹窗) →" }
};

const translate = (value, language) => (typeof value === 'object' ? value[language] || value.id : value);
const displayDate = (date, language) => {
  if (language === 'zh') {
    return date.replace('Mar 2025 - Sekarang', '2025年3月 - 至今').replace('Okt 2023 - Jul 2024', '2023年10月 - 2024年7月');
  }
  return language === 'en' ? date.replace('Sekarang', 'Present').replace('Okt', 'Oct') : date;
};

function SectionTitle({ eyebrow, title }) {
  return <div className="section-title"><p>{eyebrow}</p><h2>{title}</h2></div>;
}

export default function Home() {
  const [language, setLanguage] = useState('id');
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isTaxModalOpen, setIsTaxModalOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const { profile, stats, skills, journey, projects, education, certifications } = PORTFOLIO_CONFIG;
  const t = (value) => translate(value, language);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.categoryGroup === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language');
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    const frameId = window.requestAnimationFrame(() => {
      if (savedLanguage === 'en' || savedLanguage === 'id' || savedLanguage === 'zh') setLanguage(savedLanguage);
      setDarkMode(savedTheme === 'dark');
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-70px 0px -40% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      revealElements.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId);
    if (targetId === 'demo') {
      setIsTaxModalOpen(true);
    }
    if (targetId === 'certifications') {
      setIsCertModalOpen(true);
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profile.email);
      showToast(language === 'en' ? 'Email copied to clipboard!' : 'Email berhasil disalin ke papan klip!');
    }
  };

  const handleDownloadCV = () => {
    generateCV(language);
    showToast(language === 'en' ? 'CV downloaded successfully!' : 'CV berhasil diunduh dalam format PDF!');
  };

  return (
    <>
      <CanvasBackground />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="toast-container">
          <div className="toast">{toastMessage}</div>
        </div>
      )}

      {/* Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          language={language}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Tax & Asset Depreciation Interactive Modal */}
      {isTaxModalOpen && (
        <TaxDepreciationModal
          language={language}
          onClose={() => setIsTaxModalOpen(false)}
        />
      )}

      {/* Certifications & Official Credentials Pop-up Modal */}
      {isCertModalOpen && (
        <CertificationsModal
          language={language}
          certifications={certifications}
          onClose={() => setIsCertModalOpen(false)}
        />
      )}

      <main className={`portfolio-shell${darkMode ? ' dark-mode' : ''}`}>
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

        <header className="site-header">
          <a className="wordmark" href="#top" onClick={(e) => handleNavClick(e, 'top')} aria-label={profile.fullName}>{profile.shortName}</a>
          <nav aria-label="Primary navigation">
            <a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'experience')}>{t(copy.navExperience)}</a>
            <a href="#demo" className={activeSection === 'demo' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'demo')}>{t(copy.navDemo)}</a>
            <a href="#work" className={activeSection === 'work' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'work')}>{t(copy.navProjects)}</a>
            <a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'certifications')}>{t(copy.navCertifications)}</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'contact')}>{t(copy.navContact)}</a>
          </nav>
          <div className="header-controls">
            <VisitorTracker language={language} />
            <button className="cv-btn" type="button" onClick={handleDownloadCV} title={t(copy.downloadCV)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {t(copy.downloadCV)}
            </button>
            <label className="language-control">
              <span className="sr-only">{t(copy.language)}</span>
              <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label={t(copy.language)}>
                <option value="id">ID</option>
                <option value="en">EN</option>
                <option value="zh">中文</option>
              </select>
            </label>
            <button className="theme-toggle" type="button" onClick={() => setDarkMode((current) => !current)} aria-label={darkMode ? t(copy.lightMode) : t(copy.darkMode)} title={darkMode ? t(copy.lightMode) : t(copy.darkMode)}>
              <span>{darkMode ? '☀' : '◐'}</span>
            </button>
          </div>
        </header>

        <section className="intro reveal" id="top">
          <p className="availability">{t(profile.badgeText)}</p>
          <h1>{profile.fullName}</h1>
          <p className="role">{t(profile.title)}</p>
          <p className="summary">{t(profile.leadText)}</p>
          <div className="intro-links">
            <a className="primary-link" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t(copy.contactMe)} <span aria-hidden="true">&rarr;</span></a>
            <button className="social-pill-btn" type="button" onClick={handleCopyEmail}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>{t(copy.copyEmail)}</span>
            </button>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="social-pill-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6Z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="social-pill-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
          </div>

          {/* Hero Impact Stats Counter Bar */}
          <StatsBar stats={stats} language={language} />
        </section>

        <div className="content-grid">
          <aside className="profile-sidebar reveal">
            <section><p className="side-label">{t(copy.location)}</p><p>{profile.location}</p></section>
            <section><p className="side-label">{t(copy.skills)}</p><ul className="skill-list">{skills.map((skill) => <li key={t(skill.title)}>{t(skill.title)}</li>)}</ul></section>
            <section><p className="side-label">{t(copy.education)}</p>{education.map((item) => <div className="compact-entry" key={item.institution}><strong>{t(item.degree)}</strong><span>{item.institution}</span><span>{item.date}</span></div>)}</section>
            <section><p className="side-label">{t(copy.navCertifications)}</p>{certifications.slice(0, 3).map((item) => <div className="compact-entry" key={item.credentialId}><strong>{t(item.title)}</strong><span>{item.provider}, {item.date}</span></div>)}<button type="button" className="project-card-action" onClick={() => setIsCertModalOpen(true)}>Lihat semua ({certifications.length}) →</button></section>
          </aside>

          <div className="main-content">
            <section id="experience" className="content-section reveal">
              <SectionTitle eyebrow={t(copy.careerEyebrow)} title={t(copy.careerTitle)} />
              <div className="timeline">{journey.map((job) => <article className="timeline-item" key={`${job.company}-${job.date}`}><p className="period">{displayDate(job.date, language)}</p><div><h3>{t(job.role)}</h3><p className="company">{job.company}</p><p className="description">{t(job.description)}</p><ul className="highlights">{job.highlights.map((highlight) => <li key={t(highlight)}>{t(highlight)}</li>)}</ul><ul className="tags" aria-label={t(copy.skills)}>{job.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div>
            </section>

            {/* Financial Simulator & Tax Calculator Interactive Demo Section */}
            <section id="demo" className="content-section reveal">
              <div className="tax-demo-banner">
                <div className="tax-banner-header">
                  <span className="modal-badge">{t(copy.taxDemoEyebrow)}</span>
                  <h3>{t(copy.taxDemoTitle)}</h3>
                  <p>{t(copy.taxDemoDesc)}</p>
                </div>
                <div className="tax-features-pills">
                  <span className="tax-pill">✓ PPh 21 (TER & UU HPP 2021)</span>
                  <span className="tax-pill">✓ PPh Final UMKM 0.5% (PP 55/2022)</span>
                  <span className="tax-pill">✓ PPh 22 & Sewa 10%</span>
                  <span className="tax-pill">✓ Penyusutan Aset (PMK 72/2023)</span>
                </div>
                <button
                  type="button"
                  className="open-tax-modal-btn"
                  onClick={() => setIsTaxModalOpen(true)}
                >
                  {t(copy.openTaxModal)}
                </button>
              </div>

              <div style={{ marginTop: '36px' }}>
                <FinancialSimulator language={language} />
              </div>
            </section>

            <section id="work" className="content-section reveal">
              <SectionTitle eyebrow={t(copy.projectEyebrow)} title={t(copy.projectTitle)} />

              {/* Category Filter Tabs */}
              <div className="project-filter-tabs" role="tablist" aria-label="Filter Proyek">
                <button
                  type="button"
                  className={`filter-btn${selectedCategory === 'all' ? ' active' : ''}`}
                  onClick={() => setSelectedCategory('all')}
                >
                  {t(copy.catAll)} ({projects.length})
                </button>
                <button
                  type="button"
                  className={`filter-btn${selectedCategory === 'accounting' ? ' active' : ''}`}
                  onClick={() => setSelectedCategory('accounting')}
                >
                  {t(copy.catAccounting)}
                </button>
                <button
                  type="button"
                  className={`filter-btn${selectedCategory === 'analytics' ? ' active' : ''}`}
                  onClick={() => setSelectedCategory('analytics')}
                >
                  {t(copy.catAnalytics)}
                </button>
                <button
                  type="button"
                  className={`filter-btn${selectedCategory === 'software' ? ' active' : ''}`}
                  onClick={() => setSelectedCategory('software')}
                >
                  {t(copy.catSoftware)}
                </button>
              </div>

              <div className="project-list">
                {filteredProjects.map((project) => (
                  <article className="project-item" key={t(project.title)}>
                    <div className="project-heading">
                      <p>{t(project.category)}</p>
                      <strong>{t(project.metric)}</strong>
                    </div>
                    <h3>{t(project.title)}</h3>
                    <p className="description">{t(project.description)}</p>
                    <ul className="tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    
                    <button
                      className="project-card-action"
                      type="button"
                      onClick={() => setSelectedProject(project)}
                    >
                      {t(copy.viewCaseStudy)}
                    </button>

                    {project.documentation && (
                      <figure className="project-documentation" onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
                        <Image src={project.documentation.image} alt={t(project.documentation.alt)} width={1860} height={837} sizes="(max-width: 720px) 100vw, 760px" />
                        <figcaption>{t(project.documentation.caption)}</figcaption>
                      </figure>
                    )}
                  </article>
                ))}
              </div>
            </section>

            <section id="certifications" className="content-section reveal">
              <SectionTitle eyebrow={t(copy.certEyebrow)} title={t(copy.certTitle)} />
              <div className="tax-demo-banner">
                <div className="tax-banner-header">
                  <span className="modal-badge">Kredensial Terverifikasi</span>
                  <h3>Daftar Sertifikasi Resmi & Kredensial Terverifikasi</h3>
                  <p>Mencakup Sertifikasi Profesional BI Inspira, Microsoft Office Specialist (Excel Expert & Associate), Certiport (Pearson VUE) IT Specialist Data Analytics & Databases, serta MySkill.id Bootcamp.</p>
                </div>
                <button
                  type="button"
                  className="open-tax-modal-btn"
                  onClick={() => setIsCertModalOpen(true)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                  Buka Modul Sertifikasi & Kredensial Resmi ({certifications.length}) →
                </button>
              </div>
            </section>

            <section id="contact" className="contact-section reveal">
              <p>{t(copy.contactLead)}</p>
              <div className="contact-links-grid">
                <a href={`mailto:${profile.email}`} className="social-pill-btn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>{profile.email}</span>
                </a>
                <button className="social-pill-btn" type="button" onClick={handleCopyEmail}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span>{t(copy.copyEmail)}</span>
                </button>
                <a href={`https://wa.me/62${profile.phone.slice(1)}`} target="_blank" rel="noreferrer" className="social-pill-btn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>{t(copy.whatsapp)}: {profile.phone}</span>
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="social-pill-btn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6Z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="social-pill-btn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>

              {/* Interactive Contact Form */}
              <ContactForm language={language} onShowToast={showToast} />
            </section>
          </div>
        </div>
        <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <span>&copy; {new Date().getFullYear()} {profile.fullName}</span>
          <VisitorTracker language={language} />
        </footer>
      </main>
    </>
  );
}
