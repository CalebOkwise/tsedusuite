import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'TS Edu Suite | School Management Software',
  description: 'TS Edu Suite is a premium school management system for administrators, parents, and students. Request a free demo and streamline school operations.',
  metadataBase: new URL('https://tsedusuite.teamsource.net'),
  openGraph: {
    title: 'TS Edu Suite | School Management Software',
    description: 'Comprehensive school ERP, fee management, attendance, parent portal, and reports in one trusted platform.',
    url: 'https://tsedusuite.teamsource.net',
    siteName: 'TS Edu Suite',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TS Edu Suite | School Management Software',
    description: 'Streamline school operations with TS Edu Suite. Request a free demo today.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
