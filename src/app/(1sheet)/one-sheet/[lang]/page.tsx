import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import getOneSheet from '@/utils/contentful/getOneSheet';
import PrintButton from '@/components/PrintButton';

type Props = {
  params: { lang: 'en' | 'pt' };
};

export default async function OneSheet({ params: { lang } }: Props) {
  const { body, image } = await getOneSheet(lang);
  const content = documentToReactComponents(body);

  const img = image && (
    <figure>
      <Image
        src={image.url.replace(/^\/\//, 'https://')}
        width={image.details.image.width}
        height={image.details.image.height}
        alt=""
        priority
      />
      <figcaption>
        &copy; {PHOTO_BY[lang]}{' '}
        <Link
          href="https://www.instagram.com/ne_prosto_lisa/"
          target="_blank"
          rel="noreferrer"
        >
          @ne_prosto_lisa
        </Link>
      </figcaption>
    </figure>
  );

  const contentArray = Array.from(content as Iterable<ReactNode>);
  const paragraphs = img ? contentArray.toSpliced(1, 0, img) : contentArray;

  return (
    <div className="container one-sheet-page">
      <header>
        <Link href="/">
          <Image
            src="/images/logo-full.png"
            width={341}
            height={156}
            alt=""
            priority
          />
          <h1 className="visually-hidden">Black Dog Blues Band</h1>
        </Link>
      </header>
      <section>{...paragraphs}</section>
      <footer>
        <PrintButton lang={lang} />
      </footer>
    </div>
  );
}

const PHOTO_BY = {
  en: 'photo by',
  pt: 'foto por',
};
