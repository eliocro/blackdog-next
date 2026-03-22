import { ComponentType } from 'react';
import dynamic from 'next/dynamic';

export default function withNoSSR<P = {}>(Component: ComponentType<P>) {
  return dynamic(() => Promise.resolve(Component), { ssr: false });
}
