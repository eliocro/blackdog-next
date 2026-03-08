import Link from 'next/link';
import Image from 'next/image';

import PrintButton from '@/components/PrintButton';

export default function OneSheetEN() {
  return (
    <>
      <section>
        <p>
          Black Dog Blues Band was born in Sao Paulo (Brazil) in 1989. Its
          founder, Daniel Henriques, met Magic Slim, Albert Collins, Buddy Guy,
          Etta James, Koko Taylor, Junior Wells, among many others who
          participated in international festivals of blues in São Paulo and the
          Nescafé & Blues.
        </p>
        <figure>
          <Image
            src="/images/insta-a.jpg"
            width={670}
            height={420}
            quality={85}
            alt=""
            priority
          />
          <figcaption>
            &copy; photo by{' '}
            <Link
              href="https://www.instagram.com/ne_prosto_lisa/"
              target="_blank"
              rel="noreferrer"
            >
              @ne_prosto_lisa
            </Link>
          </figcaption>
        </figure>
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
          July 2015; and most recently, the &quot;Festival de Blues da
          Guarda&quot; on August 2016.
        </p>
        <p>
          Website:{' '}
          <a href="https://www.blackdogbluesband.com">
            www.blackdogbluesband.com
          </a>
        </p>
        <p>
          E-mail:{' '}
          <a href="mailto:info@blackdogbluesband.com">
            info@blackdogbluesband.com
          </a>
        </p>
      </section>
      <footer>
        <PrintButton lang="en" />
      </footer>
    </>
  );
}
