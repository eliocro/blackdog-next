'use client';

import dynamic from 'next/dynamic';

const NUM_IMAGES = 4;
const INTERVAL = 1000 * 60 * 60 * 24; // 1 day

function Background() {
  const n = (Math.floor(new Date().getTime() / INTERVAL) % NUM_IMAGES) + 1;
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(/images/insta-${n}.jpg)` }}
    />
  );
}

export default dynamic(() => Promise.resolve(Background), { ssr: false });
