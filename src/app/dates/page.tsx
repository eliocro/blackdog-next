import { Metadata } from 'next';
import CloseButton from '@/components/layout/CloseButton';

export const metadata: Metadata = {
  title: 'Live Dates',
};

export default function DatesPage() {
  return (
    <main>
      <CloseButton />
      <div>
        <h1>Live Dates</h1>
      </div>
    </main>
  );
}
