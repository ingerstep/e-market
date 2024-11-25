import type { Metadata } from 'next';

import '../../public/globals.css';

import { boldRoboto, lightRoboto, regularRoboto, mediumRoboto } from '@/fonts';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import StoreProvider from './StoreProvider';

export const metadata: Metadata = {
  title: 'E-Market',
  description: 'Online store, wide range of products',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${boldRoboto.variable} ${lightRoboto.variable} ${regularRoboto.variable} ${mediumRoboto.variable} antialiased`}
      >
        <Header />
        <StoreProvider>{children}</StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
