import Header from '@/components/header';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { QueryProviders } from './query-provider';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.variable} ${pretendard.className} mx-auto max-w-screen-xl`}
      >
        <QueryProviders>
          <Header />
          <div className="px-4 py-2">{children}</div>
        </QueryProviders>
      </body>
    </html>
  );
}
