import Image from 'next/image';
import Link from 'next/link';

export default function MainLogo() {
  return (
    <Link href="/" className="main-logo">
      <Image src="/images/logo.jpg" width={156} height={156} alt="" />
      <span>Black Dog Blues Band</span>
    </Link>
  );
}
