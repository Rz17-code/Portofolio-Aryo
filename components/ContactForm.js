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
  submitBtn: { id: "Kirim Pesan Ke Inbox Email", en: "Send Message to Inbox Email", zh: "发送至邮箱" },
  waBtn: { id: "Kirim via WhatsApp Direct", en: "Send via WhatsApp Direct", zh: "通过 WhatsApp 发送" },
  sendingToast: { id: "Mengirim pesan ke haryosalam3@gmail.com...", en: "Sending message to haryosalam3@gmail.com...", zh: "正在发送留言至 haryosalam3@gmail.com..." },
  successTitle: { id: "✓ Pesan Terkirim!", en: "✓ Message Sent!", zh: "✓ 留言已发送！" },
  successDesc: { id: "Terima kasih! Pesan Anda telah diteruskan ke haryosalam3@gmail.com.", en: "Thank you! Your message has been routed to haryosalam3@gmail.com.", zh: "感谢！您的留言已发送至 haryosalam3@gmail.com。" },
  sendAnother: { id: "Kirim Pesan Lainnya", en: "Send Another Message", zh: "发送另一条留言" }
};

export default function ContactForm({ language = 'id', onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const translate = (obj) => (typeof obj === 'object' ? obj[language] || obj.id : obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const waText = encodeURIComponent(
    `Halo Rozindar Haryo Salam,\n\nNama: ${formData.name || '-'}\nEmail: ${formData.email || '-'}\nSubjek: ${formData.subject || 'Diskusi Portofolio'}\n\nPesan:\n${formData.message || '-'}`
  );
  const waUrl = `https://wa.me/6281215288361?text=${waText}`;

  return (
    <div className="contact-form-card">
      <form
        action="https://formsubmit.co/haryosalam3@gmail.com"
        method="POST"
        className="contact-form"
        onSubmit={() => {
          if (onShowToast) {
            onShowToast(translate(copy.sendingToast));
          }
        }}
      >
        {/* FormSubmit Configuration */}
        <input type="hidden" name="_subject" value={formData.subject ? `[Portofolio Web] ${formData.subject}` : `Pesan Portofolio Baru dari ${formData.name || 'Pengunjung'}`} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

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
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            {translate(copy.submitBtn)} &rarr;
          </button>
          <a href={waUrl} target="_blank" rel="noreferrer" className="cv-btn" style={{ textDecoration: 'none' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            {translate(copy.waBtn)} &rarr;
          </a>
        </div>
      </form>
    </div>
  );
}
