import Image from 'next/image';

import Button from '@/components/Button';
import FlickrGallery from '@/components/FlickrGallery';
import CloseButton from '@/components/layout/CloseButton';

import styles from './page.module.scss';

export const metadata = {
  title: 'Home | Black Dog Blues Band',
};

export default function HomePage() {
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
              <p>
                Black Dog Blues Band was born in Sao Paulo (Brazil) in 1989. Its
                founder, Daniel Henriques, met Magic Slim, Albert Collins, Buddy
                Guy, Etta James, Koko Taylor, Junior Wells, among many others
                who participated in international festivals of Blues, in São
                Paulo and the Nescafé &amp; Blues...
              </p>
              <Button href="/bio">Read more</Button>
            </div>
            <div>
              <h2>Next Dates</h2>
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
