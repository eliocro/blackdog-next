import { ReactNode } from 'react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import getOneSheet from '@/utils/contentful/getOneSheet';
import PrintButton from '@/components/Button/PrintButton';
import styles from './page.module.scss';

type Props = {
  params: { lang: 'en' | 'pt' };
};

export default async function OneSheet({ params: { lang } }: Props) {
  const { body, image } = await getOneSheet(lang);
  const content = documentToReactComponents(body);

  const img = image && (
    <Image
      className={styles.image}
      src={image.url.replace(/^\/\//, 'https://')}
      width={image.details.image.width}
      height={image.details.image.height}
      alt=""
      priority
    />
  );

  const contentArray = Array.from(content as Iterable<ReactNode>);
  const paragraphs = img ? contentArray.toSpliced(1, 0, img) : contentArray;

  return (
    <>
      <Image
        className={styles.logo}
        src="/images/logo-full.png"
        width={341}
        height={156}
        alt=""
        priority
      />
      <section>{...paragraphs}</section>
      <footer className={styles.footer}>
        <PrintButton lang={lang} />
      </footer>
    </>
  );
}
