import ical, { CalendarComponent } from 'ical';

const CALENDAR_URL = process.env.CALENDAR_URL;

export type Event = Pick<
  CalendarComponent,
  'uid' | 'summary' | 'description' | 'location' | 'start' | 'end'
>;

export default async function getCalendarEvents(limit = 1, skip = 0) {
  if (!CALENDAR_URL) return { count: 0, events: [] };

  const res = await fetch(CALENDAR_URL, { next: { revalidate: 3600 } });
  const icsData = await res.text();

  const data = ical.parseICS(icsData);
  const today = getTodayDate();

  const items = Object.values(data)
    .filter(evt => evt.start && evt.start > today)
    .sort((a, b) => (a.start! < b.start! ? -1 : 1));

  const count = items.length;

  const events = items.slice(skip, skip + limit).map<Event>(evt => {
    const { start, end, uid, location, summary, description } = evt;
    return { uid, summary, location, description, start, end };
  });

  return { events, count };
}

const getTodayDate = () => {
  const ts = new Date();
  ts.setHours(0);
  ts.setMinutes(0);
  ts.setSeconds(0);
  ts.setMilliseconds(0);
  return ts;
};
