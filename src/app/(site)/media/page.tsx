import { Metadata } from 'next';
import Image from 'next/image';

import { getFlickrPhotos } from '@/utils/getFlickrPhotos';
import FlickrGallery from '@/components/FlickrGallery';
import CloseButton from '@/components/CloseButton';
import LinkButton from '@/components/LinkButton';

export const metadata: Metadata = {
  title: 'Media',
};

export default function MediaPage() {
  return (
    <main>
      <CloseButton />
      <div className="media-page">
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
    <section>
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
        rel="noreferrer"
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
    </section>
  );
}

function Music() {
  return (
    <section>
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
        rel="noreferrer"
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
    </section>
  );
}

async function Photos() {
  const photos = await getFlickrPhotos(15);
  return (
    <section>
      <h2>Photos</h2>
      <FlickrGallery items={photos} />
      <LinkButton
        href="https://www.flickr.com/photos/84277882@N05/"
        target="_blank"
        rel="noreferrer"
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
    </section>
  );
}
