import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import CloseButton from '@/components/CloseButton';

export const metadata: Metadata = {
  title: 'Biography',
};

export default async function BioPage() {
  return (
    <main>
      <CloseButton />
      <div className="bio-page">
        <h1>Biography</h1>
        <figure>
          <Image
            src="/images/insta-b.jpg"
            width={256}
            height={320}
            quality={85}
            alt=""
            priority
          />
          <figcaption>
            &copy; photo by{' '}
            <Link
              href="https://www.instagram.com/barreirinhabarcafe/"
              target="_blank"
              rel="noreferrer"
            >
              @barreirinhabarcafe
            </Link>
          </figcaption>
        </figure>
        <p>
          Black Dog Blues Band was born in Sao Paulo (Brazil) in 1989. Its
          founder, Daniel Henriques, met Magic Slim, Albert Collins, Buddy Guy,
          Etta James, Koko Taylor, Junior Wells, among many others who
          participated in international festivals of Blues, in São Paulo and the
          Nescafé & Blues.
        </p>
        <p>
          Originally from Madeira, Daniel Henriques returned to his homeland in
          January 2006 to resume the project, with roots on the Mississippi
          blues, Chicago and California (Jumpin&apos; Blues).
        </p>
        <p>
          The band consists of Daniel Henriques - vocals and harmonica; Eduardo
          Fernandes - drums; Énio Pereira - bass; and Hélder Gonçalves - guitar.
        </p>
        <p>
          Having a resume with a wide range of performances in many different
          houses in Madeira, with regular concerts in bars and hotels.
        </p>
        <p>
          The main highlights of the band are the performances on the
          RTP-Madeira show &quot;Noites da Madeira&quot; on October 2010 and
          July 2016; the international &quot;IX Festival de Blues de Santa
          Maria&quot; festival - opening for Carvin Jones on July 2012; the
          &quot;Vespas in the Park&quot; festival on July 2013; the Cotai Jazz
          and Blues Festival - Macau on October 2013; the NOS Summer Opening on
          July 2015; Guarda Blues Festival on August 2016; and most recently,
          the BB Blues Fest (Lisbon) on June 2017.
        </p>
        <footer>
          <h2>1-Sheet</h2>
          <Link href="/one-sheet/en">
            <Image src="/images/1sheet.jpg" width={100} height={130} alt="" />
            English
          </Link>
          <Link href="/one-sheet/pt">
            <Image src="/images/1sheet.jpg" width={100} height={130} alt="" />
            Português
          </Link>
        </footer>
      </div>
    </main>
  );
}
