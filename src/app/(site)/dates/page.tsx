import { Metadata } from 'next';

import getEvents from '@/utils/contentful/getEvents';

import CloseButton from '@/components/CloseButton';
import EventList from '@/components/EventList';
import Pagination from '@/components/Pagination';

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
  const { items, count } = await getEvents(LIMIT, skip);

  return (
    <main>
      <CloseButton />
      <div>
        <h1>Live Dates</h1>
        <EventList items={items} />
        <Pagination page={page} count={count} limit={LIMIT} />
      </div>
    </main>
  );
}
