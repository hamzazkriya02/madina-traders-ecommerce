import './globals.css';

export const metadata = {
  title: 'Madina Traders - Pesticide & Agri Solutions',
  description: 'Trusted pesticide, herbicide, fungicide and fertilizer solutions for Pakistani farmers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}