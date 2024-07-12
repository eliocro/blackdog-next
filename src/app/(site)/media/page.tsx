import { Metadata } from 'next';
import Image from 'next/image';

import CloseButton from '@/components/CloseButton';
import LinkButton from '@/components/LinkButton';
import FlickrGallery from '@/components/FlickrGallery';

import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Media',
};

export default function MediaPage() {
  return (
    <main>
      <CloseButton />
      <div>
        <h1 className="visually-hidden">Media</h1>
        <Videos />
        <Music />
        <Photos />
      </div>
    </main>
  );
}

function Videos() {
  return (
    <div className={styles.block}>
      <h2>Videos</h2>
      <iframe
        width="100%"
        height="300"
        style={{ border: 0 }}
        src="https://www.youtube.com/embed/videoseries?list=PLllUBl2D4n6urUmnCCWAJYc-VXTmOUdYK"
      />
      <LinkButton
        href="https://www.youtube.com/user/blackdogbluesband/"
        target="_blank"
        endIcon={
          <Image
            src="/images/social-button/youtube.svg"
            alt=""
            width={24}
            height={24}
          />
        }
        arial-label="More on Youtube"
      >
        More on
      </LinkButton>
    </div>
  );
}

function Music() {
  return (
    <div className={styles.block}>
      <h2>Music</h2>
      <iframe
        width="100%"
        height="300"
        style={{ border: 0 }}
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/94636391&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <LinkButton
        href="https://www.soundcloud.com/blackdogbluesband"
        target="_blank"
        endIcon={
          <Image
            src="/images/social-button/soundcloud.svg"
            alt=""
            width={24}
            height={24}
          />
        }
        arial-label="More on Soundcloud"
      >
        More on
      </LinkButton>
    </div>
  );
}

function Photos() {
  return (
    <div className={styles.block}>
      <h2>Photos</h2>
      <FlickrGallery count={15} />
      <LinkButton
        href="https://www.flickr.com/photos/84277882@N05/"
        target="_blank"
        endIcon={
          <Image
            src="/images/social-button/flickr.svg"
            alt=""
            width={24}
            height={24}
          />
        }
        arial-label="More on Flickr"
      >
        More on
      </LinkButton>
    </div>
  );
}
