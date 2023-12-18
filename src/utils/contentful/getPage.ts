import { Document } from '@contentful/rich-text-types';
import client from './client';

const PAGES = {
  home: process.env.CONTENTFUL_PAGE_HOME || '',
  biography: process.env.CONTENTFUL_PAGE_BIOGRAPHY || '',
  contacts: process.env.CONTENTFUL_PAGE_CONTACTS || '',
} as const;

export type Page = {
  title: string;
  body: Document;
};

export default async function getPage(name: keyof typeof PAGES) {
  const data = await client.getEntry(PAGES[name]);
  const { title, body } = data.fields;

  return { title, body } as Page;
}
