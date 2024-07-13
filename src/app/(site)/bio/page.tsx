import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import getPage from '@/utils/contentful/getPage';
import CloseButton from '@/components/CloseButton';

export const metadata: Metadata = {
  title: 'Biography',
};

export default async function BioPage() {
  const page = await getPage('biography');

  return (
    <main>
      <CloseButton />
      <div className="bio-page">
        <h1>Biography</h1>
        <figure>
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

        <footer>
          <h2>1-Sheet</h2>
          <Link href="/one-sheet/en">
            <Image src="/images/1sheet.jpg" width={100} height={130} alt="" />
            English
          </Link>
          <Link href="/one-sheet/pt">
            <Image src="/images/1sheet.jpg" width={100} height={130} alt="" />
            Português
          </Link>
        </footer>
      </div>
    </main>
  );
}
