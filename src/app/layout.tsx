import Footer from '@/components/layout/Footer';

import '../styles/globals.scss';
import styles from './layout.module.scss';

export const metadata = {
  title: 'Back Dog Blues Band',
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
        <div className={`${styles.wrapper} container`}>
          <header>
          </header>
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
