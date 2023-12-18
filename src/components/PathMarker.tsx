'use client';

import { usePathname } from 'next/navigation';

export default function PathMarker() {
  const path = usePathname();
  return path === '/' ? null : <div data-pathname={path} />;
}
