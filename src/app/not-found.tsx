import { Metadata } from 'next';
import CloseButton from '@/components/layout/CloseButton';

export const metadata: Metadata = {
  title: 'Not found',
};

export default function NotFoundPage() {
  return (
    <main>
      <CloseButton />
      <div>
        <h1>Not found</h1>
      </div>
    </main>
  );
}
