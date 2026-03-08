import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

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
      <body className="onesheet-layout">
        <main className="container one-sheet-page">
          <header>
            <Link href="/">
              <Image
                src="/images/logo-full.png"
                width={250}
                height={114}
                alt=""
                priority
              />
              <h1 className="visually-hidden">Black Dog Blues Band</h1>
            </Link>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
