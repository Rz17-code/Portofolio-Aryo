'use client';

const copy = {
  headerTitle: { id: "Sertifikasi & Kredensial Profesional", en: "Professional Certifications & Credentials", zh: "专业认证与资格证书" },
  headerSub: { id: "Daftar sertifikasi resmi terverifikasi dari Certiport (Pearson VUE), Microsoft, BI Inspira, dan MySkill.", en: "Official verified certifications from Certiport (Pearson VUE), Microsoft, BI Inspira, and MySkill.", zh: "来自 Certiport (Pearson VUE)、微软、BI Inspira 和 MySkill 的官方验证证书。" },
  verifyLabel: { id: "Verifikasi Kredensial", en: "Verify Credential", zh: "验证证书" },
  allTab: { id: "Semua Sertifikasi", en: "All Certifications", zh: "所有证书" },
  taxTab: { id: "Keuangan & Perpajakan", en: "Finance & Taxation", zh: "财务与税务" },
  techTab: { id: "Data & IT Specialist", en: "Data & IT Specialist", zh: "数据与 IT 专家" },
  closeBtn: { id: "Tutup Sertifikasi", en: "Close Certifications", zh: "关闭证书" }
};

export default function CertificationsModal({ language = 'id', certifications = [], onClose }) {
  const translate = (obj) => (typeof obj === 'object' ? obj[language] || obj.id : obj);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="tax-modal-content cert-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="modal-badge">📜 Kredensial Resmi Terverifikasi ({certifications.length})</span>
            <h2>{translate(copy.headerTitle)}</h2>
            <p className="modal-subtitle">{translate(copy.headerSub)}</p>
          </div>
          <button className="modal-close-btn" type="button" onClick={onClose} aria-label="Tutup modal">×</button>
        </div>

        {/* Modal Body: Certification Cards Grid */}
        <div className="tax-modal-body cert-modal-body">
          <div className="cert-cards-grid">
            {certifications.map((cert) => {
              const isCertiport = cert.credentialId.includes('Certiport') || cert.credentialId.includes('verify.certiport.com') || cert.credentialId.includes('ID:');
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
                </article>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <span>✅ Seluruh kredensial dapat diverifikasi secara independen melalui portal resmi penerbit.</span>
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
