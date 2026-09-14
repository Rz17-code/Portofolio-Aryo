'use client';

import { useState } from 'react';

const copy = {
  header: { id: "Kirim Pesan Langsung", en: "Send a Direct Message", zh: "发送直接留言" },
  sub: { id: "Isi formulir di bawah ini untuk mendiskusikan peluang kerja sama, rekrutmen, atau konsultasi.", en: "Fill out the form below to discuss opportunities or consultation.", zh: "填写下方表格与我讨论合作机会或咨询。" },
  nameLabel: { id: "Nama Lengkap", en: "Full Name", zh: "姓名" },
  namePlaceholder: { id: "Masukkan nama Anda", en: "Enter your full name", zh: "请输入您的姓名" },
  emailLabel: { id: "Alamat Email", en: "Email Address", zh: "电子邮箱" },
  emailPlaceholder: { id: "email@contoh.com", en: "email@example.com", zh: "email@example.com" },
  subjectLabel: { id: "Subjek", en: "Subject", zh: "主题" },
  subjectPlaceholder: { id: "Topik diskusi / Rekrutmen", en: "Topic / Recruitment", zh: "主题/招聘咨询" },
  messageLabel: { id: "Pesan", en: "Message", zh: "留言内容" },
  messagePlaceholder: { id: "Tuliskan pesan Anda di sini...", en: "Type your message here...", zh: "在此输入您的留言..." },
  submitBtn: { id: "Kirim Pesan", en: "Send Message", zh: "发送留言" },
  submittingBtn: { id: "Mengirim...", en: "Sending...", zh: "发送中..." },
  successTitle: { id: "✓ Pesan Terkirim!", en: "✓ Message Sent!", zh: "✓ 留言已发送！" },
  successDesc: { id: "Terima kasih telah menghubungi. Pesan Anda telah dicatat.", en: "Thank you for reaching out. Your message has been received.", zh: "感谢您的联系，您的留言已成功提交。" },
  sendAnother: { id: "Kirim Pesan Lainnya", en: "Send Another Message", zh: "发送另一条留言" }
};

export default function ContactForm({ language = 'id', onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const translate = (obj) => (typeof obj === 'object' ? obj[language] || obj.id : obj);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onShowToast) {
        onShowToast(language === 'en' ? '✓ Message submitted successfully!' : '✓ Pesan berhasil terkirim!');
      }
    }, 700);
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
      )}
    </div>
  );
}
