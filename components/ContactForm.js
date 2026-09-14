'use client';

import { useState } from 'react';

const copy = {
  header: { id: "Kirim Pesan Langsung", en: "Send a Direct Message", zh: "发送直接留言" },
  sub: { id: "Isi formulir di bawah ini untuk mengirim email langsung ke haryosalam3@gmail.com.", en: "Fill out the form below to send an email directly to haryosalam3@gmail.com.", zh: "填写下方表格直接发送邮件至 haryosalam3@gmail.com。" },
  nameLabel: { id: "Nama Lengkap", en: "Full Name", zh: "姓名" },
  namePlaceholder: { id: "Masukkan nama Anda", en: "Enter your full name", zh: "请输入您的姓名" },
  emailLabel: { id: "Alamat Email", en: "Email Address", zh: "电子邮箱" },
  emailPlaceholder: { id: "email@contoh.com", en: "email@example.com", zh: "email@example.com" },
  subjectLabel: { id: "Subjek", en: "Subject", zh: "主题" },
  subjectPlaceholder: { id: "Topik diskusi / Rekrutmen", en: "Topic / Recruitment", zh: "主题/招聘咨询" },
  messageLabel: { id: "Pesan", en: "Message", zh: "留言内容" },
  messagePlaceholder: { id: "Tuliskan pesan Anda di sini...", en: "Type your message here...", zh: "在此输入您的留言..." },
  submitBtn: { id: "Kirim Pesan Ke Email", en: "Send Message to Email", zh: "发送邮件" },
  submittingBtn: { id: "Membuka Email Client...", en: "Opening Email Client...", zh: "正在打开邮件客户端..." },
  successTitle: { id: "✉️ Pesan Siap Dikirimskan!", en: "✉️ Message Ready to Send!", zh: "✉️ 邮件准备就绪！" },
  successDesc: { id: "Aplikasi email Anda (Gmail / Outlook) akan terbuka dengan pesan yang sudah terisi otomatis ke haryosalam3@gmail.com.", en: "Your email client (Gmail / Outlook) will open prefilled with your message to haryosalam3@gmail.com.", zh: "您的邮件客户端已预填好给 haryosalam3@gmail.com 的内容。" },
  openEmailBtn: { id: "✉️ Buka / Kirim di Gmail / Email App →", en: "✉️ Open in Email App (Gmail / Outlook) →", zh: "✉️ 在邮件客户端打开 →" },
  sendAnother: { id: "Kirim Pesan Lainnya", en: "Send Another Message", zh: "发送另一条留言" }
};

export default function ContactForm({ language = 'id', onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const translate = (obj) => (typeof obj === 'object' ? obj[language] || obj.id : obj);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    const emailSubject = encodeURIComponent(formData.subject ? `[Portofolio] ${formData.subject}` : `Pesan Portofolio dari ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}\n\n---\nDikirim via Portofolio Rozindar Haryo Salam`
    );

    const link = `mailto:haryosalam3@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    setMailtoUrl(link);

    // Trigger mailto link directly
    window.location.href = link;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onShowToast) {
        onShowToast(language === 'en' ? '✉️ Email client opened!' : '✉️ Aplikasi email telah dibuka!');
      }
    }, 600);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-form-card">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-header">
            <h3>{translate(copy.header)}</h3>
            <p>{translate(copy.sub)}</p>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="contact-name">{translate(copy.nameLabel)} *</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={translate(copy.namePlaceholder)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">{translate(copy.emailLabel)} *</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={translate(copy.emailPlaceholder)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">{translate(copy.subjectLabel)}</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={translate(copy.subjectPlaceholder)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">{translate(copy.messageLabel)} *</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder={translate(copy.messagePlaceholder)}
            />
          </div>

          <button className="submit-form-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? translate(copy.submittingBtn) : translate(copy.submitBtn)} &rarr;
          </button>
        </form>
      ) : (
        <div className="form-success-state">
          <div className="success-icon">✉️</div>
          <h3>{translate(copy.successTitle)}</h3>
          <p>{translate(copy.successDesc)}</p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={mailtoUrl} className="submit-form-btn" style={{ textDecoration: 'none' }}>
              {translate(copy.openEmailBtn)}
            </a>
            <button
              className="cv-btn"
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
              }}
            >
              {translate(copy.sendAnother)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
