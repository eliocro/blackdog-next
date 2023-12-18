import { ParsedUrlQueryInput, stringify } from 'querystring';

const ENDPOINT = 'https://cdn.contentful.com';

const SPACE = process.env.CONTENTFUL_SPACE || '';
const TOKEN = process.env.CONTENTFUL_TOKEN || '';

function buildURL(path: string, query: ParsedUrlQueryInput = {}) {
  const qs = stringify({ access_token: TOKEN, ...query });
  return `${ENDPOINT}/spaces/${SPACE}${path}?${qs}`;
}

async function getEntry(id: string) {
  const url = buildURL(`/entries/${id}`);
  const res = await fetch(url, { next: { revalidate: 3600 } });
  return res.json();
}

async function getEntries(query: ParsedUrlQueryInput) {
  const url = buildURL(`/entries`, query);
  const res = await fetch(url, { next: { revalidate: 3600 } });
  return res.json();
}

async function getAsset(id: string) {
  const url = buildURL(`/assets/${id}`);
  const res = await fetch(url, { next: { revalidate: 3600 } });
  return res.json();
}

const client = {
  getEntry,
  getEntries,
  getAsset,
};

export default client;
