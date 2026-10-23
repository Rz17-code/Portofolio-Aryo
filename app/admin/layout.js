import './page.css';

export const metadata = {
  title: 'Admin — Portfolio Analytics',
  // Sembunyikan dari mesin pencari
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return children;
}
