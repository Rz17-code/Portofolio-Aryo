import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Rozindar Haryo Salam | Finance Officer – Account Payable",
  description: "Portofolio Rozindar Haryo Salam, Finance Officer Account Payable: pencocokan PO, pembayaran vendor, petty cash, rekonsiliasi bank, dan pengelolaan arus kas Rp3–4,5 miliar per bulan.",
  keywords: [
    "Rozindar Haryo Salam",
    "Finance Officer",
    "Account Payable",
    "Finance Staff",
    "Rekonsiliasi Bank",
    "Cash Flow",
    "Petty Cash",
    "Brevet A&B",
    "Microsoft Excel",
    "Google Looker Studio",
    "AppSheet",
    "Cilacap",
    "Portofolio Finance"
  ],
  authors: [{ name: "Rozindar Haryo Salam", url: "https://www.linkedin.com/in/rozindarharyosalam/" }],
  creator: "Rozindar Haryo Salam",
  metadataBase: new URL("https://portofolio-aryo.vercel.app"),
  openGraph: {
    title: "Rozindar Haryo Salam | Finance Officer – Account Payable",
    description: "S1 Akuntansi, Brevet A&B. Account Payable, pembayaran vendor, rekonsiliasi bank, dan arus kas Rp3–4,5 miliar per bulan.",
    url: "https://portofolio-aryo.vercel.app",
    siteName: "Rozindar Haryo Salam Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rozindar Haryo Salam, Finance Officer – Account Payable",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rozindar Haryo Salam | Finance Officer – Account Payable",
    description: "S1 Akuntansi, Brevet A&B. Account Payable, pembayaran vendor, rekonsiliasi bank, dan arus kas Rp3–4,5 miliar per bulan.",
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
  "jobTitle": "Finance Officer – Account Payable",
  "worksFor": {
    "@type": "Organization",
    "name": "PT Bharata Pharmaceutical"
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
    "Accounts Payable",
    "Vendor Payments",
    "Bank Reconciliation",
    "Cash Flow Management",
    "Petty Cash",
    "Taxation & Brevet A/B",
    "Data Analysis",
    "Microsoft Excel",
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

