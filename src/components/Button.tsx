import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

export default function Button({
  label,
  children,
  startIcon,
  endIcon,
  ...rest
}: Props) {
  const className = clsx('button');
  const content = (
    <>
      {startIcon}
      {children || label}
      {endIcon}
    </>
  );

  return (
    <button className={className} {...rest}>
      {content}
    </button>
  );
}
