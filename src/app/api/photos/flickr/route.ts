import { NextResponse } from 'next/server';

const FLICKR_URL =
  'https://api.flickr.com/services/feeds/photos_public.gne?id=84277882@N05&format=json&nojsoncallback=1';

export async function GET() {
  try {
    const res = await fetch(FLICKR_URL);
    const data = await res.json();
    return NextResponse.json(data.items, {
      headers: {
        'Cache-Control': 'public, max-age=0, s-maxage=86400',
      },
    });
  } catch (err) {
    return NextResponse.json(
      {
        error: 500,
        message: err instanceof Error ? err.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
