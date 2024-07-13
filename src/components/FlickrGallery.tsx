'use client';

import Image from 'next/image';
import Link from 'next/link';

import useFlickrPhotos from '@/hooks/useFlickrPhotos';

type Props = {
  count: number;
};

export default function FlickrGallery({ count }: Props) {
  const { photos } = useFlickrPhotos();
  return (
    <div className="flickr-gallery">
      {photos.slice(0, count).map((photo, idx) => (
        <Link key={idx} href={photo.href} title={photo.title} target="_blank">
          <Image src={photo.src} width={120} height={90} alt={photo.title} />
        </Link>
      ))}
    </div>
  );
}
