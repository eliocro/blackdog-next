'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

export default function MainMenu() {
  const pathname = usePathname();
  return (
    <nav className="main-menu">
      <ul>
        {navLinks.map((item, idx) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <li key={idx}>
              <Link
                className={clsx({ 'is-active': isActive })}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/bio', label: 'Biography' },
  { href: '/dates', label: 'Live Dates' },
  { href: '/media', label: 'Media' },
  { href: '/contacts', label: 'Contacts' },
];
