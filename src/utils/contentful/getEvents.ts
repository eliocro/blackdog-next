import { Document } from '@contentful/rich-text-types';
import client from './client';

export type Event = {
  title: string;
  location: string;
  date: string;
  description?: Document;
};

export default async function getEvents(limit = 1, skip = 0) {
  const events = await client.getEntries({
    content_type: 'event',
    select: 'fields',
    'fields.date[gte]': getTodayDate(),
    order: 'fields.date',
    limit,
    skip,
  });
  return events.items.map((item: any) => item.fields) as Event[];
}

const getTodayDate = () => {
  const ts = new Date();
  ts.setHours(0);
  ts.setMinutes(0);
  ts.setSeconds(0);
  ts.setMilliseconds(0);
  return ts.toISOString();
}
