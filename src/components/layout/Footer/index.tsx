import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import styles from './footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.social}>
          {socialLinks.map(item => (
            <Link key={item.name} href={item.href} target="_blank">
              <Image width={36} height={36} src={item.src} alt={item.name} />
            </Link>
          ))}
        </div>
        <div className={styles.copy}>
          <span>&copy; 2016 - {year} Black Dog Blues Band</span>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  {
    name: 'instagram',
    href: 'https://www.instagram.com/blackdog.bluesband',
    src: '/images/social/instagram.svg',
  },
  {
    name: 'facebook',
    href: 'https://www.facebook.com/blackdogbluesband',
    src: '/images/social/facebook.svg',
  },
  {
    name: 'youtube',
    href: 'https://www.youtube.com/user/blackdogbluesband/',
    src: '/images/social/youtube.svg',
  },
  {
    name: 'soundcloud',
    href: 'https://www.soundcloud.com/blackdogbluesband',
    src: '/images/social/soundcloud.svg',
  },
  {
    name: 'flickr',
    href: 'https://www.flickr.com/photos/84277882@N05/',
    src: '/images/social/flickr.svg',
  },
  {
    name: 'myspace',
    href: 'https://www.myspace.com/blackdogbluesband',
    src: '/images/social/myspace.svg',
  },
];
