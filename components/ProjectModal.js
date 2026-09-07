'use client';

import { useEffect } from 'react';
import Image from 'next/image';

const translate = (val, lang) => (typeof val === 'object' ? val[lang] || val.id : val);

export default function ProjectModal({ project, language, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const t = (val) => translate(val, language);
  const isEn = language === 'en';

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <div className="modal-tags">
            <span className="modal-category">{t(project.category)}</span>
            <span className="modal-metric">{t(project.metric)}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </header>

        <div className="modal-body">
          <h2>{t(project.title)}</h2>
          <p className="modal-lead">{t(project.description)}</p>

          {project.documentation && (
            <figure className="modal-figure">
              <Image
                src={project.documentation.image}
                alt={t(project.documentation.alt)}
                width={1200}
                height={600}
                className="modal-image"
              />
              <figcaption>{t(project.documentation.caption)}</figcaption>
            </figure>
          )}

          <div className="modal-sections">
            {project.problem && (
              <div className="modal-section">
                <h3>{isEn ? 'Problem & Background' : 'Latar Belakang & Masalah'}</h3>
                <p>{t(project.problem)}</p>
              </div>
            )}

            {project.solution && (
              <div className="modal-section">
                <h3>{isEn ? 'Solution & Methodology' : 'Solusi & Metodologi'}</h3>
                <p>{t(project.solution)}</p>
              </div>
            )}

            {project.impact && project.impact.length > 0 && (
              <div className="modal-section">
                <h3>{isEn ? 'Business Impact & Results' : 'Dampak Bisnis & Hasil'}</h3>
                <ul className="modal-impact-list">
                  {project.impact.map((item, idx) => (
                    <li key={idx}>
                      <span className="bullet">✓</span>
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.tools && (
              <div className="modal-section">
                <h3>{isEn ? 'Tools & Technologies Used' : 'Tools & Teknologi Digunakan'}</h3>
                <div className="modal-tools-list">
                  {project.tools.map((tool) => (
                    <span className="modal-tool-badge" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <footer className="modal-footer">
          <button className="modal-action-btn" onClick={onClose}>
            {isEn ? 'Close Case Study' : 'Tutup Studi Kasus'}
          </button>
        </footer>
      </div>
    </div>
  );
}
