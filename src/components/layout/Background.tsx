'use client';

const NUM_IMAGES = 4;
const INTERVAL = 1000 * 60 * 60 * 24; // 1 day

export default function Background() {
  const n = (Math.floor(new Date().getTime() / INTERVAL) % NUM_IMAGES) + 1;
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(/images/insta-${n}.jpg)` }}
    />
  );
}
