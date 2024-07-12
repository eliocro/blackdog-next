'use client';

import { useMemo } from 'react';
import Link from 'next/link';

type Props = {
  page?: number;
  limit?: number;
  count?: number;
};

export default function Pagination({ page = 1, limit = 1, count = 1 }: Props) {
  const numPages = Math.ceil(count / limit);
  const pageList = useMemo(() => paginate(page, numPages), [page, numPages]);

  if (pageList.length === 1) return null;

  return (
    <nav className="pagination">
      <ul>
        {page > 1 && (
          <li>
            <Link href={`?page=${page - 1}`}>&lt;</Link>
          </li>
        )}
        {pageList.map((p, idx) => (
          <li key={idx}>
            {!p || p === page ? (
              <span>{p || '..'}</span>
            ) : (
              <Link href={`?page=${p}`}>{p}</Link>
            )}
          </li>
        ))}
        {numPages > page && (
          <li>
            <Link href={`?page=${page + 1}`}>&gt;</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

function paginate(curr: number, num: number, limit = 7) {
  const m = Math.floor(limit / 2);
  const pages = Array.from(Array(limit).keys()).map(n => n + curr - m);

  while (pages[0] < 1) {
    pages.shift();
    if (pages[pages.length - 1] < num) pages.push(pages[pages.length - 1] + 1);
  }
  while (pages[pages.length - 1] > num) {
    pages.pop();
    if (pages[0] > 1) pages.unshift(pages[0] - 1);
  }
  if (pages[1] && pages[1] !== 2) {
    pages[1] = 0;
    pages[0] = 1;
  }
  if (pages[pages.length - 2] && pages[pages.length - 2] !== num - 1) {
    pages[pages.length - 2] = 0;
    pages[pages.length - 1] = num;
  }

  return pages;
}
