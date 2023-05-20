import { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import styles from './button.module.scss';

type Props = {
  href?: string;
  target?: string;
  onClick?: () => void;
  label?: string;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  'arial-label'?: string;
};

export default function Button({
  href,
  target,
  label,
  children,
  startIcon,
  endIcon,
  ...rest
}: Props) {
  const className = clsx('button', styles.button);
  const content = (
    <>
      {startIcon}
      {children || label}
      {endIcon}
    </>
  );

  return href ? (
    <Link className={className} href={href} target={target} {...rest}>
      {content}
    </Link>
  ) : (
    <button className={className} {...rest}>
      {content}
    </button>
  );
}
