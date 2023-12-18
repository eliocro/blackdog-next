'use client';

import Button from './Button';

export default function PrintButton({ lang }: { lang?: string }) {
  return (
    <Button onClick={() => window.print()}>
      {lang === 'pt' ? 'Imprimir' : 'Print'}
    </Button>
  );
}
