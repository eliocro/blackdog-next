import Link from 'next/link';
import Image from 'next/image';

import PrintButton from '@/components/PrintButton';

export default function OneSheetPT() {
  return (
    <>
      <section>
        <p>
          Black Dog Blues Band nasceu em São Paulo (Brasil), no ano de 1989. O
          seu fundador, Daniel Henriques, conheceu Magic Slim, Albert Collins,
          Buddy Guy, Etta James, Koko Taylor, Júnior Wells, entre tantos outros
          que participaram nos festivais internacionais de Blues, de São Paulo e
          Nescafé & Blues.
        </p>
        <figure>
          <Image
            src="/images/insta-a.jpg"
            width={670}
            height={420}
            quality={90}
            alt=""
            priority
          />
          <figcaption>
            &copy; foto por{' '}
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
          Originário da Madeira, Daniel Henriques volta à sua terra Natal em
          Janeiro de 2006 e retoma o projeto, numa proposta estética da banda
          nas vertentes dos blues de Mississipi, Chicago e da Califórnia
          (Jumpin&apos; Blues).
        </p>
        <p>
          A banda é constituída por Daniel Henriques - voz e harmónica; Eduardo
          Fernandes - bateria; Énio Pereira - baixo; e Hélder Gonçalves -
          guitarra.
        </p>
        <p>
          Tem um currículo vasto num conjunto de inúmeras actuações em diversas
          casas da região, com concertos regulares em bares e unidades
          hoteleiras.
        </p>
        <p>
          Os pontos altos são as atuações no programa Noites da Madeira,
          realizado e produzido pela RTP-Madeira, a convite da estação de
          televisão, em outubro de 2010 e julho de 2016; a participação no IX
          Festival de Blues de Santa Maria, certame internacional, em julho de
          2012 realizando a primeira parte para Carvin Jones; o festival Vespas
          in the Park em julho de 2013; o Cotai Jazz and Blues Festival - Macau
          em outubro de 2013; o NOS Summer Opening em julho de 2015; e
          recentemente, o Festival de Blues da Guarda em agosto de 2016.
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
        <PrintButton lang="pt" />
      </footer>
    </>
  );
}
