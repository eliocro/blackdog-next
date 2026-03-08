import { Metadata } from 'next';

import Footer from '@/components/layout/Footer';
import MainMenu from '@/components/layout/MainMenu';
import MainLogo from '@/components/layout/MainLogo';
import Background from '@/components/layout/Background';

import '@/styles/index.scss';

export const metadata: Metadata = {
  title: {
    absolute: 'Black Dog Blues Band',
    template: '%s | Black Dog Blues Band',
  },
  description: 'Black Dog Blues Band, a blues band from Madeira, Portugal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="BUILD_DATE" content={new Date().toISOString()} />
      </head>
      <body className="site-layout">
        <Background />
        <div className="container">
          <header className="site-header">
            <MainLogo />
            <MainMenu />
          </header>
          <div id="main-content">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
