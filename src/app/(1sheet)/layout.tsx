import { Metadata } from 'next';

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
      <body className="onesheet-layout">{children}</body>
    </html>
  );
}
