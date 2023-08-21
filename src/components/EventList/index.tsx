import clsx from 'clsx';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Event } from '@/utils/contentful/getEvents';

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
          <h3>
            <span>{item.title}</span>{' '}
            <span>
              {'//'} {item.location}
            </span>
          </h3>
          <time dateTime={item.date}>
            {new Date(item.date).toLocaleString('en-GB', DATE_FORMAT)}
          </time>
          {item.description && (
            <div>{documentToReactComponents(item.description)}</div>
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
