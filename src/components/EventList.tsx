import type { Event } from '@/utils/getCalendarEvents';

type Props = {
  items: Event[];
};

export default function EventList({ items }: Props) {
  return (
    <ul className="event-list">
      {items.map((item, idx) => (
        <li key={idx}>
          <h3>{item.summary}</h3>
          {item.location && <address>{item.location}</address>}
          <time dateTime={item.start?.toISOString()}>
            {item.start?.toLocaleString('en-GB', DATE_FORMAT)}
          </time>
          {item.description && (
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
          )}
        </li>
      ))}
    </ul>
  );
}

const DATE_FORMAT: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};
