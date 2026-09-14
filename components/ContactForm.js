'use client';

import { useState } from 'react';

const copy = {
  header: { id: "Kirim Pesan Langsung Ke Email", en: "Send Direct Message to Email", zh: "直接发送邮件" },
  sub: { id: "Pesan akan langsung terkirim secara otomatis ke inbox haryosalam3@gmail.com.", en: "Messages will be delivered automatically to haryosalam3@gmail.com inbox.", zh: "留言将自动发送至 haryosalam3@gmail.com 邮箱。" },
  nameLabel: { id: "Nama Lengkap", en: "Full Name", zh: "姓名" },
  namePlaceholder: { id: "Masukkan nama Anda", en: "Enter your full name", zh: "请输入您的姓名" },
  emailLabel: { id: "Alamat Email Anda", en: "Your Email Address", zh: "您的电子邮箱" },
  emailPlaceholder: { id: "email@contoh.com", en: "email@example.com", zh: "email@example.com" },
  subjectLabel: { id: "Subjek", en: "Subject", zh: "主题" },
  subjectPlaceholder: { id: "Topik diskusi / Rekrutmen", en: "Topic / Recruitment", zh: "主题/招聘咨询" },
  messageLabel: { id: "Pesan", en: "Message", zh: "留言内容" },
  messagePlaceholder: { id: "Tuliskan pesan Anda di sini...", en: "Type your message here...", zh: "在此输入您的留言..." },
  submitBtn: { id: "🚀 Kirim Pesan Ke Inbox Email", en: "🚀 Send Message to Inbox Email", zh: "🚀 发送至邮箱" },
  mailtoBtn: { id: "✉️ Kirim via Email App / Gmail", en: "✉️ Send via Email App / Gmail", zh: "✉️ 通过邮件客户端发送" },
  successTitle: { id: "✓ Pesan Terkirim!", en: "✓ Message Sent!", zh: "✓ 留言已发送！" },
  successDesc: { id: "Terima kasih! Pesan Anda telah diteruskan ke haryosalam3@gmail.com. Silakan periksa inbox / spam email Anda untuk konfirmasi aktivasi FormSubmit pertama kali.", en: "Thank you! Your message has been routed to haryosalam3@gmail.com.", zh: "感谢！您的留言已发送至 haryosalam3@gmail.com。" },
  sendAnother: { id: "Kirim Pesan Lainnya", en: "Send Another Message", zh: "发送另一条留言" }
};

export default function ContactForm({ language = 'id', onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const translate = (obj) => (typeof obj === 'object' ? obj[language] || obj.id : obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const emailSubject = encodeURIComponent(formData.subject ? `[Portofolio] ${formData.subject}` : `Pesan Portofolio dari ${formData.name || 'Pengunjung'}`);
  const emailBody = encodeURIComponent(
    `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}\n\n---\nDikirim via Portofolio Rozindar Haryo Salam`
  );
  const mailtoUrl = `mailto:haryosalam3@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="contact-form-card">
      <form
        action="https://formsubmit.co/haryosalam3@gmail.com"
        method="POST"
        className="contact-form"
        onSubmit={() => {
          if (onShowToast) {
            onShowToast(language === 'en' ? '🚀 Sending message to haryosalam3@gmail.com...' : '🚀 Mengirim pesan ke haryosalam3@gmail.com...');
          }
        }}
      >
        {/* FormSubmit Configuration */}
        <input type="hidden" name="_subject" value={formData.subject ? `[Portofolio Web] ${formData.subject}` : `Pesan Portofolio Baru dari ${formData.name || 'Pengunjung'}`} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

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

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button className="submit-form-btn" type="submit">
            {translate(copy.submitBtn)} &rarr;
          </button>
          <a href={mailtoUrl} className="cv-btn" style={{ textDecoration: 'none' }}>
            {translate(copy.mailtoBtn)} &rarr;
          </a>
        </div>
      </form>
    </div>
  );
}
