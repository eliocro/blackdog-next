import { Metadata } from 'next';
import clsx from 'clsx';

import Background from '@/components/Background';
import Footer from '@/components/Footer';
import MainMenu from '@/components/MainMenu';
import MainLogo from '@/components/MainLogo';
import PathMarker from '@/components/PathMarker';

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
      <body className={styles.body}>
        <Background />
        <PathMarker />
        <div className={clsx(styles.container, 'container')}>
          <header>
            <MainLogo />
            <MainMenu />
          </header>
          <div>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
