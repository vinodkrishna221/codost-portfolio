import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Codost | Turn Local Reputation Into Online Revenue',
    template: '%s | Codost',
  },
  description:
    'Codost helps local Telugu-speaking business owners build a premium online presence and grow their revenue.',
  keywords: ['Web Design', 'Digital Marketing', 'Telugu Business', 'Codost'],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}


