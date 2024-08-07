import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="social">
          {socialLinks.map(item => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <Image width={36} height={36} src={item.src} alt={item.name} />
            </Link>
          ))}
        </div>
        <div className="copy">
          <span>&copy; {year} Black Dog Blues Band</span>
          <span>
            &copy; photo by{' '}
            <Link
              href="https://www.instagram.com/oscar_silva95/"
              target="_blank"
              rel="noreferrer"
            >
              @oscar_silva95
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  {
    name: 'instagram',
    href: 'https://www.instagram.com/blackdog.bluesband/',
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
