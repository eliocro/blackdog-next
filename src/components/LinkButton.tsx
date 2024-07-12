import { AnchorHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  label?: string;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

export default function LinkButton({
  className,
  label,
  children,
  startIcon,
  endIcon,
  ...rest
}: Props) {
  const cls = clsx('button', className);
  const content = (
    <>
      {startIcon}
      {children || label}
      {endIcon}
    </>
  );
  return (
    <Link className={cls} {...rest}>
      {content}
    </Link>
  );
}
