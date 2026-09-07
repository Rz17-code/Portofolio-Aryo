import "./globals.css";

export const metadata = {
  title: "Rozindar Haryo Salam | Accounting & Finance",
  description: "Portfolio profesional Rozindar Haryo Salam, spesialis akuntansi dan keuangan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
