import { Metadata } from 'next';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import getPage from '@/utils/contentful/getPage';
import CloseButton from '@/components/CloseButton';

export const metadata: Metadata = {
  title: 'Contacts',
};

export default async function ContactsPage() {
  const page = await getPage('contacts');

  return (
    <main>
      <CloseButton />
      <div>
        <h1>Contacts</h1>
        {documentToReactComponents(page.body)}
      </div>
    </main>
  );
}
