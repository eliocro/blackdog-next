const ENDPOINT =
  'https://api.flickr.com/services/feeds/photos_public.gne?id=84277882@N05&format=json&nojsoncallback=1';

type Data = {
  title: string;
  link: string;
  description: string;
  modified: string;
  generator: string;
  items: {
    title: string;
    link: string;
    media: { m: string };
    date_taken: string;
    description: string;
    published: string;
    author: string;
    author_id: string;
    tags: string;
  }[];
};

export type Photo = {
  title: string;
  link: string;
  src: string;
};

export async function getFlickrPhotos(limit = 10) {
  const res = await fetch(ENDPOINT, { next: { revalidate: 86400 } });
  const { items }: Data = await res.json();

  const photos = items.slice(0, limit).map<Photo>(item => {
    const { title, link, media } = item;
    return { title, link, src: media.m };
  });

  return photos;
}
