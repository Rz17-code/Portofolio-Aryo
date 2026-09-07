import { jsPDF } from 'jspdf';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

export function generateCV(language = 'id') {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const { profile, journey, projects, education, certifications } = PORTFOLIO_CONFIG;
  const isEn = language === 'en';

  const translate = (val) => (typeof val === 'object' ? val[language] || val.id : val);

  // Page Dimensions & Offsets
  const margin = 18;
  const pageWidth = 210;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Primary Palette
  const darkInk = [23, 32, 31];
  const mutedText = [100, 110, 106];
  const accentGreen = [8, 122, 99];
  const lineSeparator = [220, 225, 222];

  // Helper function to draw divider lines
  const drawLine = () => {
    doc.setDrawColor(...lineSeparator);
    doc.setLineWidth(0.3);
    doc.line(margin, y, margin + contentWidth, y);
    y += 5;
  };

  // Helper function to check page overflow
  const checkPageOverflow = (heightNeeded = 15) => {
    if (y + heightNeeded > 280) {
      doc.addPage();
      y = margin;
    }
  };

  // --- HEADER SECTION ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...darkInk);
  doc.text(profile.fullName, margin, y);
  y += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(...accentGreen);
  doc.text(translate(profile.title), margin, y);
  y += 6;

  doc.setFontSize(9);
  doc.setTextColor(...mutedText);
  const contactText = `${profile.email}  |  ${profile.phone}  |  ${profile.location}  |  LinkedIn: linkedin.com/in/rozindarharyosalam`;
  doc.text(contactText, margin, y);
  y += 7;

  drawLine();

  // --- EXECUTIVE SUMMARY ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...accentGreen);
  doc.text(isEn ? 'EXECUTIVE SUMMARY' : 'RINGKASAN EKSEKUTIF', margin, y);
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...darkInk);
  const summaryLines = doc.splitTextToSize(translate(profile.leadText), contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.5 + 4;

  drawLine();

  // --- WORK EXPERIENCE ---
  checkPageOverflow(30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...accentGreen);
  doc.text(isEn ? 'PROFESSIONAL EXPERIENCE' : 'PENGALAMAN KERJA', margin, y);
  y += 6;

  journey.forEach((job) => {
    checkPageOverflow(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...darkInk);
    doc.text(translate(job.role), margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...mutedText);
    const periodText = isEn ? job.date.replace('Sekarang', 'Present').replace('Okt', 'Oct') : job.date;
    doc.text(periodText, margin + contentWidth, y, { align: 'right' });
    y += 4.5;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...accentGreen);
    doc.text(job.company, margin, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...darkInk);
    const descLines = doc.splitTextToSize(translate(job.description), contentWidth);
    doc.text(descLines, margin, y);
    y += descLines.length * 4 + 2;

    job.highlights.forEach((hl) => {
      checkPageOverflow(10);
      const hlText = `• ${translate(hl)}`;
      const hlLines = doc.splitTextToSize(hlText, contentWidth - 4);
      doc.text(hlLines, margin + 2, y);
      y += hlLines.length * 4;
    });

    y += 4;
  });

  drawLine();

  // --- SELECTED PROJECTS ---
  checkPageOverflow(30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...accentGreen);
  doc.text(isEn ? 'FEATURED PROJECTS' : 'PROYEK UNGGULAN', margin, y);
  y += 6;

  projects.forEach((proj) => {
    checkPageOverflow(20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...darkInk);
    doc.text(translate(proj.title), margin, y);
    y += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...darkInk);
    const projDesc = doc.splitTextToSize(translate(proj.description), contentWidth);
    doc.text(projDesc, margin, y);
    y += projDesc.length * 4 + 2;

    if (proj.tools) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(...mutedText);
      doc.text(`Tools: ${proj.tools.join(', ')}`, margin, y);
      y += 5;
    }
  });

  drawLine();

  // --- EDUCATION & CERTIFICATIONS ---
  checkPageOverflow(25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...accentGreen);
  doc.text(isEn ? 'EDUCATION & CERTIFICATIONS' : 'PENDIDIKAN & SERTIFIKASI', margin, y);
  y += 6;

  education.forEach((edu) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...darkInk);
    doc.text(`${translate(edu.degree)} - ${edu.institution}`, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...mutedText);
    doc.text(`${edu.date} (${edu.gpa})`, margin + contentWidth, y, { align: 'right' });
    y += 5;
  });

  certifications.forEach((cert) => {
    checkPageOverflow(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...darkInk);
    doc.text(`${translate(cert.title)} - ${cert.provider}`, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...mutedText);
    doc.text(cert.date, margin + contentWidth, y, { align: 'right' });
    y += 5;
  });

  // Save PDF
  doc.save(`CV_Rozindar_Haryo_Salam_${language.toUpperCase()}.pdf`);
}
