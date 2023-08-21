import { Metadata } from 'next';

import getEvents from '@/utils/contentful/getEvents';
import CloseButton from '@/components/layout/CloseButton';
import EventList from '@/components/EventList';

export const metadata: Metadata = {
  title: 'Live Dates',
};

const LIMIT = 10;

type Props = {
  searchParams: Record<string, string>;
};

export default async function DatesPage({ searchParams }: Props) {
  const page = parseInt(searchParams.page) || 1;
  const skip = (page - 1) * LIMIT;
  const events = await getEvents(LIMIT, skip);

  return (
    <main>
      <CloseButton />
      <div>
        <h1>Live Dates</h1>
        <EventList items={events} />
      </div>
    </main>
  );
}
