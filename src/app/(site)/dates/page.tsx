import { Metadata } from 'next';

import getCalendarEvents from '@/utils/getCalendarEvents';

import CloseButton from '@/components/CloseButton';
import EventList from '@/components/EventList';
import Pagination from '@/components/Pagination';

export const metadata: Metadata = {
  title: 'Live Dates',
};

const LIMIT = 8;

type Props = {
  searchParams: Record<string, string>;
};

export default async function DatesPage({ searchParams }: Props) {
  const page = parseInt(searchParams.page) || 1;
  const skip = (page - 1) * LIMIT;
  const { count, events } = await getCalendarEvents(LIMIT, skip);

  return (
    <main>
      <CloseButton />
      <div>
        <h1>Live Dates</h1>
        <EventList items={events} />
        <Pagination page={page} count={count} limit={LIMIT} />
      </div>
    </main>
  );
}
