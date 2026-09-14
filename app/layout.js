import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Rozindar Haryo Salam | Accounting, Finance & Data Analytics Portfolio",
  description: "Portofolio Profesional Rozindar Haryo Salam - Staff Accounting & Finance dengan pengalaman mengelola 5 entitas bisnis, arus kas Rp15-20B/bulan, dan analisis 500.000+ data transaksi.",
  keywords: [
    "Rozindar Haryo Salam",
    "Accounting Staff",
    "Finance Staff",
    "Data Analyst",
    "Laporan Keuangan",
    "Brevet A&B",
    "Google Looker Studio",
    "AppSheet",
    "Cilacap",
    "Portofolio Akuntansi",
    "Financial Controller"
  ],
  authors: [{ name: "Rozindar Haryo Salam", url: "https://www.linkedin.com/in/rozindarharyosalam/" }],
  creator: "Rozindar Haryo Salam",
  metadataBase: new URL("https://portofolio-aryo.vercel.app"),
  openGraph: {
    title: "Rozindar Haryo Salam | Accounting & Finance Portfolio",
    description: "Lulusan S1 Akuntansi berpengalaman dalam Accounting, Finance, dan Data Analysis. Pengelolaan arus kas Rp15-20B/bulan & analisis 500K+ data transaksi.",
    url: "https://portofolio-aryo.vercel.app",
    siteName: "Rozindar Haryo Salam Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rozindar Haryo Salam - Accounting & Finance Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rozindar Haryo Salam | Accounting & Finance Portfolio",
    description: "Lulusan S1 Akuntansi berpengalaman dalam Accounting, Finance, dan Data Analysis.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rozindar Haryo Salam",
  "jobTitle": "Staff Accounting & Finance",
  "worksFor": {
    "@type": "Organization",
    "name": "PT Bharata International Pharmaceutical"
  },
  "url": "https://portofolio-aryo.vercel.app",
  "telephone": "+6281215288361",
  "email": "haryosalam3@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cilacap",
    "addressRegion": "Jawa Tengah",
    "addressCountry": "ID"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Universitas Muhammadiyah Purwokerto"
  },
  "sameAs": [
    "https://www.linkedin.com/in/rozindarharyosalam/",
    "https://www.instagram.com/rozindar.haryo/"
  ],
  "knowsAbout": [
    "Accounting",
    "Financial Reporting",
    "Cash Flow Management",
    "Taxation & Brevet A/B",
    "Data Analysis",
    "Google Looker Studio",
    "AppSheet"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

