import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import getCalendarEvents from '@/utils/getCalendarEvents';
import { getFlickrPhotos } from '@/utils/getFlickrPhotos';

import LinkButton from '@/components/LinkButton';
import FlickrGallery from '@/components/FlickrGallery';
import CloseButton from '@/components/CloseButton';
import EventList from '@/components/EventList';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const { events } = await getCalendarEvents(4);
  const photos = await getFlickrPhotos(10);

  return (
    <main>
      <CloseButton />
      <div className="home-page">
        <h1 className="visually-hidden">Home</h1>
        <section>
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
          <p>
            Black Dog Blues Band was born in Sao Paulo (Brazil) in 1989. Its
            founder, Daniel Henriques, met Magic Slim, Albert Collins, Buddy
            Guy, Etta James, Koko Taylor, Junior Wells, among many others who
            participated in international festivals of Blues, in São Paulo and
            the Nescafé & Blues...
          </p>
          <LinkButton href="/bio">Read more</LinkButton>
        </section>

        <section>
          <h2>Next Dates</h2>
          <EventList items={events} />
          <LinkButton href="/dates">More dates</LinkButton>
        </section>

        <section>
          <h2>Latest Photos</h2>
          <FlickrGallery items={photos} />
          <LinkButton href="/media">More media</LinkButton>
        </section>
      </div>
    </main>
  );
}
