import { Metadata } from 'next';
import CloseButton from '@/components/layout/CloseButton';

export const metadata: Metadata = {
  title: 'Contacts',
};

export default function ContactsPage() {
  return (
    <main>
      <CloseButton />
      <div>
        <h1>Contacts</h1>
        <p>
          For press inquiries, artist relations, contact{' '}
          <a href="mailto:info@blackdogbluesband.com">
            info@blackdogbluesband.com
          </a>
        </p>
        <p>
          For booking of shows, contact{' '}
          <a href="mailto:shows@blackdogbluesband.com">
            shows@blackdogbluesband.com
          </a>
        </p>
      </div>
    </main>
  );
}
