import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import getPage from '@/utils/contentful/getPage';
import getCalendarEvents from '@/utils/getCalendarEvents';

import Button from '@/components/Button';
import FlickrGallery from '@/components/FlickrGallery';
import CloseButton from '@/components/CloseButton';
import EventList from '@/components/EventList';

import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const page = await getPage('home');
  const { events } = await getCalendarEvents(4);

  return (
    <main>
      <CloseButton />
      <div>
        <h1 className="visually-hidden">Home</h1>
        <div className={styles.block}>
          <div className={styles.flex}>
            <div>
              <h2>Biography</h2>
              <figure>
                <Image
                  src="/images/insta-a.jpg"
                  width={327}
                  height={206}
                  quality={85}
                  alt=""
                  priority
                />
                <figcaption>
                  &copy; photo by{' '}
                  <Link
                    href="https://www.instagram.com/ne_prosto_lisa/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @ne_prosto_lisa
                  </Link>
                </figcaption>
              </figure>
              {documentToReactComponents(page.body)}
              <Button href="/bio">Read more</Button>
            </div>
            <div>
              <h2>Next Dates</h2>
              <EventList items={events} narrow />
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
