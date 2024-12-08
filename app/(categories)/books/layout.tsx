import Categories from '@/components/categories';
import type { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Book Store',
  description: 'A simple book store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <Categories />
      <div className="px-4 py-2">{children}</div>
    </Fragment>
  );
}
