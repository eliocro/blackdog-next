import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import getPage from '@/utils/contentful/getPage';
import CloseButton from '@/components/CloseButton';

import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Biography',
};

export default async function BioPage() {
  const page = await getPage('biography');

  return (
    <main>
      <CloseButton />
      <div>
        <h1>Biography</h1>
        <figure className={styles.image}>
          <Image
            src="/images/insta-b.jpg"
            width={256}
            height={320}
            quality={85}
            alt=""
            priority
          />
          <figcaption>
            &copy; photo by{' '}
            <Link
              href="https://www.instagram.com/barreirinhabarcafe/"
              target="_blank"
              rel="noreferrer"
            >
              @barreirinhabarcafe
            </Link>
          </figcaption>
        </figure>
        {documentToReactComponents(page.body)}

        <h2>1-Sheet</h2>
        <Link className={styles.sheet} href="/one-sheet/en">
          <Image width={100} height={130} src="/images/1sheet.jpg" alt="" />
          English
        </Link>
        <Link className={styles.sheet} href="/one-sheet/pt">
          <Image width={100} height={130} src="/images/1sheet.jpg" alt="" />
          Português
        </Link>
      </div>
    </main>
  );
}
