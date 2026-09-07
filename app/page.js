'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import CanvasBackground from '../components/CanvasBackground';
import ProjectModal from '../components/ProjectModal';
import StatsBar from '../components/StatsBar';
import FinancialSimulator from '../components/FinancialSimulator';
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
  viewCaseStudy: { id: 'Lihat Detail Studi Kasus →', en: 'View Detailed Case Study →', zh: '查看详细案例研究 →' }
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
  const [toastMessage, setToastMessage] = useState('');

  const { profile, stats, skills, journey, projects, education, certifications } = PORTFOLIO_CONFIG;
  const t = (value) => translate(value, language);

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
      showToast(language === 'en' ? '✓ Email copied to clipboard!' : '✓ Email berhasil disalin ke papan klip!');
    }
  };

  const handleDownloadCV = () => {
    generateCV(language);
    showToast(language === 'en' ? '📄 CV downloaded successfully!' : '📄 CV berhasil diunduh dalam format PDF!');
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

      <main className={`portfolio-shell${darkMode ? ' dark-mode' : ''}`}>
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
            <button className="cv-btn" type="button" onClick={handleDownloadCV} title={t(copy.downloadCV)}>
              📄 {t(copy.downloadCV)}
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
            <button className="copy-btn" type="button" onClick={handleCopyEmail}>📋 {t(copy.copyEmail)}</button>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          {/* Hero Impact Stats Counter Bar */}
          <StatsBar stats={stats} language={language} />
        </section>

        <div className="content-grid">
          <aside className="profile-sidebar reveal">
            <section><p className="side-label">{t(copy.location)}</p><p>{profile.location}</p></section>
            <section><p className="side-label">{t(copy.skills)}</p><ul className="skill-list">{skills.map((skill) => <li key={t(skill.title)}>{t(skill.title)}</li>)}</ul></section>
            <section><p className="side-label">{t(copy.education)}</p>{education.map((item) => <div className="compact-entry" key={item.institution}><strong>{t(item.degree)}</strong><span>{item.institution}</span><span>{item.date}</span></div>)}</section>
            <section><p className="side-label">{t(copy.navCertifications)}</p>{certifications.map((item) => <div className="compact-entry" key={item.credentialId}><strong>{t(item.title)}</strong><span>{item.provider}, {item.date}</span></div>)}</section>
          </aside>

          <div className="main-content">
            <section id="experience" className="content-section reveal">
              <SectionTitle eyebrow={t(copy.careerEyebrow)} title={t(copy.careerTitle)} />
              <div className="timeline">{journey.map((job) => <article className="timeline-item" key={`${job.company}-${job.date}`}><p className="period">{displayDate(job.date, language)}</p><div><h3>{t(job.role)}</h3><p className="company">{job.company}</p><p className="description">{t(job.description)}</p><ul className="highlights">{job.highlights.map((highlight) => <li key={t(highlight)}>{t(highlight)}</li>)}</ul><ul className="tags" aria-label={t(copy.skills)}>{job.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div>
            </section>

            {/* Financial Simulator / Interactive Demo Section */}
            <section id="demo" className="content-section reveal">
              <FinancialSimulator language={language} />
            </section>

            <section id="work" className="content-section reveal">
              <SectionTitle eyebrow={t(copy.projectEyebrow)} title={t(copy.projectTitle)} />
              <div className="project-list">
                {projects.map((project) => (
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
              <div className="certification-list">{certifications.map((certification) => <article className="certification-item" key={certification.credentialId}><div><h3>{t(certification.title)}</h3><p>{certification.provider}</p></div><div className="credential"><span>{certification.date}</span><span>{certification.credentialId}</span></div></article>)}</div>
            </section>

            <section id="contact" className="contact-section reveal">
              <p>{t(copy.contactLead)}</p>
              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">&rarr;</span></a>
                <button className="copy-btn" type="button" onClick={handleCopyEmail}>📋 {t(copy.copyEmail)}</button>
                <a href={`https://wa.me/62${profile.phone.slice(1)}`} target="_blank" rel="noreferrer">{t(copy.whatsapp)}: {profile.phone} <span aria-hidden="true">&rarr;</span></a>
              </div>
            </section>
          </div>
        </div>
        <footer>&copy; {new Date().getFullYear()} {profile.fullName}</footer>
      </main>
    </>
  );
}
