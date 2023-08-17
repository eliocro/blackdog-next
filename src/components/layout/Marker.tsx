'use client';

import { usePathname } from 'next/navigation';

export default function Marker() {
  const path = usePathname();
  return path === '/' ? null : <div data-pathname={path} />;
}
