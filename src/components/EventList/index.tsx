import clsx from 'clsx';
import type { Event } from '@/utils/getCalendarEvents';

import styles from './eventlist.module.scss';

type Props = {
  items: Event[];
  narrow?: boolean;
};

export default function EventList({ items, narrow }: Props) {
  return (
    <ul className={clsx(styles.list, { [styles.narrow]: narrow })}>
      {items.map((item, idx) => (
        <li key={idx}>
          <h3>{item.summary}</h3>
          {item.location && <address>{item.location}</address>}
          <time dateTime={item.start?.toISOString()}>
            {item.start?.toLocaleString('en-GB', DATE_FORMAT)}
          </time>
          {item.description && !narrow && (
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
