'use client';

import styles from './background.module.scss';

const NUM_IMAGES = 3;

export default function Background() {
  const idx =
    (Math.floor(new Date().getTime() / (1000 * 60 * 60 * 24)) % NUM_IMAGES) + 1;
  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(/images/insta-${idx}.jpg)` }}
    ></div>
  );
}
