import './globals.css';

export const metadata = {
  title: 'MolamIA | AI su misura per PMI italiane',
  description: 'Soluzioni di intelligenza artificiale su misura per trasformare processi, dati e competenze in vantaggio competitivo.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
