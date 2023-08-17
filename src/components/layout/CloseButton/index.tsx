import Link from 'next/link';
import styles from './closebutton.module.scss';

export default function CloseButton() {
  return <Link href="/" className={styles.button} aria-label="Close" />;
}
