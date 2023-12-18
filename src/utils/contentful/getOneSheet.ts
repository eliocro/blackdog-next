import { Document } from '@contentful/rich-text-types';
import client from './client';

const LANGS = {
  en: process.env.CONTENTFUL_ONESHEET_EN || '',
  pt: process.env.CONTENTFUL_ONESHEET_PT || '',
} as const;

type File = {
  contentType: string;
  fileName: string;
  url: string;
  details: {
    image: {
      width: number;
      height: number;
    };
    size: number;
  };
};

type OneSheet = {
  title: string;
  body: Document;
  image: File | null;
};

export default async function getOneSheet(lang: keyof typeof LANGS) {
  const id = LANGS[lang] || LANGS.en;

  const data = await client.getEntry(id);
  const { title, body, image } = data.fields;

  const asset = image?.sys.id && (await client.getAsset(image.sys.id));

  return { title, body, image: asset?.fields.file || null } as OneSheet;
}
