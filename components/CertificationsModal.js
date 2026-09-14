'use client';

import { useState } from 'react';

const copy = {
  headerTitle: { id: "Sertifikasi & Dokumen Kredensial Resmi", en: "Official Certifications & PDF Credentials", zh: "官方认证与 PDF 资格证书" },
  headerSub: { id: "Daftar sertifikasi resmi terverifikasi lengkap dengan pratinjau dokumen PDF dari Certiport (Pearson VUE), Microsoft, BI Inspira, dan MySkill.", en: "Official verified certifications with full PDF previews from Certiport (Pearson VUE), Microsoft, BI Inspira, and MySkill.", zh: "来自 Certiport (Pearson VUE)、微软、BI Inspira 和 MySkill 的官方验证证书与 PDF 预览。" },
  verifyLabel: { id: "Verifikasi Kredensial", en: "Verify Credential", zh: "验证证书" },
  viewPdfLabel: { id: "📄 Buka PDF Resmi ↗", en: "📄 Open Official PDF ↗", zh: "📄 打开官方 PDF ↗" },
  previewPdfLabel: { id: "🔍 Pratinjau Dokumen", en: "🔍 PDF Preview", zh: "🔍 PDF 预览" },
  closeBtn: { id: "Tutup Sertifikasi", en: "Close Certifications", zh: "关闭证书" }
};

export default function CertificationsModal({ language = 'id', certifications = [], onClose }) {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const translate = (obj) => (typeof obj === 'object' ? obj[language] || obj.id : obj);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="tax-modal-content cert-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="modal-badge">📜 Dokumen & Kredensial Terverifikasi ({certifications.length})</span>
            <h2>{translate(copy.headerTitle)}</h2>
            <p className="modal-subtitle">{translate(copy.headerSub)}</p>
          </div>
          <button className="modal-close-btn" type="button" onClick={onClose} aria-label="Tutup modal">×</button>
        </div>

        {/* Selected Fullscreen PDF Preview Sub-view if active */}
        {selectedPdf ? (
          <div className="pdf-full-viewer-container">
            <div className="pdf-viewer-bar">
              <span>📄 Dokumen PDF: <strong>{translate(selectedPdf.title)}</strong></span>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href={selectedPdf.pdfUrl} target="_blank" rel="noreferrer" className="cv-btn">
                  ⬇ Unduh PDF
                </a>
                <button className="cv-btn" type="button" onClick={() => setSelectedPdf(null)}>
                  ✕ Kembali ke Daftar
                </button>
              </div>
            </div>
            <iframe
              src={`${selectedPdf.pdfUrl}#toolbar=1`}
              className="pdf-iframe-full"
              title={translate(selectedPdf.title)}
            />
          </div>
        ) : (
          /* Main Cards Grid */
          <div className="tax-modal-body cert-modal-body">
            <div className="cert-cards-grid">
              {certifications.map((cert) => {
                const certIdMatch = cert.credentialId.match(/ID:\s*([A-Za-z0-9-]+)/);
                const certCode = certIdMatch ? certIdMatch[1] : null;

                return (
                  <article className="cert-modal-card" key={tTitle(cert.title)}>
                    <div className="cert-card-header">
                      <div className="cert-icon-badge">
                        {cert.provider.includes('Microsoft') ? '🪟' : cert.provider.includes('Certiport') ? '🌐' : cert.provider.includes('MySkill') ? '🚀' : '⚖️'}
                      </div>
                      <div className="cert-meta-info">
                        <span className="cert-provider">{cert.provider}</span>
                        <span className="cert-date">📅 {cert.date}</span>
                      </div>
                    </div>

                    <h3 className="cert-title">{translate(cert.title)}</h3>

                    <div className="cert-credential-box">
                      <span className="cert-id-tag">🔑 {cert.credentialId}</span>
                      {certCode && (
                        <a
                          href="https://verify.certiport.com"
                          target="_blank"
                          rel="noreferrer"
                          className="cert-verify-link"
                        >
                          {translate(copy.verifyLabel)} ↗
                        </a>
                      )}
                    </div>

                    {/* PDF Certificate Embed / Action Buttons */}
                    {cert.pdfUrl ? (
                      <div className="cert-pdf-action-box">
                        <iframe
                          src={`${cert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                          className="cert-pdf-thumbnail"
                          title={translate(cert.title)}
                        />
                        <div className="cert-pdf-buttons">
                          <button
                            type="button"
                            className="cert-pdf-btn primary"
                            onClick={() => setSelectedPdf(cert)}
                          >
                            {translate(copy.previewPdfLabel)}
                          </button>
                          <a
                            href={cert.pdfUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="cert-pdf-btn"
                          >
                            {translate(copy.viewPdfLabel)}
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="cert-pdf-action-box fallback">
                        <span className="fallback-note">📜 Sertifikat Resmi Terverifikasi oleh {cert.provider}</span>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="modal-footer">
          <span>✅ Seluruh kredensial & sertifikat PDF resmi dapat diunduh dan diverifikasi secara langsung.</span>
          <button className="cv-btn" type="button" onClick={onClose}>{translate(copy.closeBtn)}</button>
        </div>
      </div>
    </div>
  );
}

function tTitle(titleObj) {
  if (typeof titleObj === 'string') return titleObj;
  return titleObj.id || titleObj.en || '';
}
