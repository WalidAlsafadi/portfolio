import type { Metadata, Viewport } from 'next';
import { Inter, Newsreader, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { profile } from '@/data/profile';
import { createMetadata } from '@/lib/metadata';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  ...createMetadata({ title: profile.seoTitle, description: profile.metaDescription, path: '/' }),
  applicationName: profile.name,
  creator: profile.name,
  publisher: profile.name,
  category: 'technology',
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#faf9f7' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${mono.variable}`}>
      <body className="min-h-screen antialiased">
        <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 bg-ink px-4 py-2 text-sm text-paper focus:translate-y-0">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
