import Image from 'next/image';
import Link from 'next/link';

import type { Photo } from '@/utils/getFlickrPhotos';

type Props = {
  items: Photo[];
};

export default function FlickrGallery({ items }: Props) {
  return (
    <div className="flickr-gallery">
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          aria-label={item.title}
        >
          <Image src={item.src} width={120} height={90} alt="" />
        </Link>
      ))}
    </div>
  );
}
