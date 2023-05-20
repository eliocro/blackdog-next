import useSWRImmutable from 'swr/immutable';

type Photo = {
  title: string;
  href: string;
  src: string;
};

type Data = {
  title: string;
  link: string;
  media: {
    m: string;
  };
}[];

const fetcher = async (path: string) => {
  const res = await fetch(path);
  const data: Data = await res.json();

  return data.map<Photo>(item => ({
    title: item.title,
    href: item.link,
    src: item.media.m,
  }));
};

export default function useFlickrPhotos() {
  const query = useSWRImmutable('/api/photos/flickr', fetcher);
  return {
    ...query,
    photos: query.data || [],
  };
}
