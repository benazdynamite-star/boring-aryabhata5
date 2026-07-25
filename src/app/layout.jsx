import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import CreateOSBadge from '@/components/CreateOSBadge';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: "Emmax's Portfolio | Emmanuel Osinoiki",
  description:
    'Emmanuel Osinoiki — Content Writer, Social Media Manager, Sports Media Creative, and Student Leader. Explore my work and connect.',
  keywords: [
    'Emmanuel Osinoiki',
    'Emmax',
    'Content Writer',
    'Social Media Manager',
    'Sports Media Creative',
    'Student Leader',
    'Portfolio',
    'Nigeria',
    'CSL',
    'Brand Promotion',
    'Copywriting',
  ],
  openGraph: {
    title: "Emmax's Portfolio | Emmanuel Osinoiki",
    description:
      'Content Writer • Social Media Manager • Sports Media Creative • Student Leader',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <CreateOSBadge />
      </body>
    </html>
  );
}
