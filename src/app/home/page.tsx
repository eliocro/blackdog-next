import { Metadata } from 'next';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import getPage from '@/utils/contentful/getPage';
import getEvents from '@/utils/contentful/getEvents';

import Button from '@/components/Button';
import FlickrGallery from '@/components/FlickrGallery';
import CloseButton from '@/components/layout/CloseButton';
import EventList from '@/components/EventList';

import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const page = await getPage('home');
  const { items } = await getEvents(4);

  return (
    <main>
      <CloseButton />
      <div>
        <h1 className="visually-hidden">Home</h1>
        <div className={styles.block}>
          <div className={styles.flex}>
            <div>
              <h2>Biography</h2>
              <Image
                src="/images/insta-a.jpg"
                width={327}
                height={206}
                quality={85}
                alt=""
              />
              {documentToReactComponents(page.body)}
              <Button href="/bio">Read more</Button>
            </div>
            <div>
              <h2>Next Dates</h2>
              <EventList items={items} narrow />
              <Button href="/dates">More dates</Button>
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <h2>Latest Photos</h2>
          <FlickrGallery count={10} />
          <Button href="/media">More media</Button>
        </div>
      </div>
    </main>
  );
}
