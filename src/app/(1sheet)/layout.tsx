import { Metadata } from 'next';
import clsx from 'clsx';

import '@/styles/globals.scss';
import styles from './layout.module.scss';

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
      <body>
        <div className={clsx(styles.container, 'container')}>{children}</div>
      </body>
    </html>
  );
}
