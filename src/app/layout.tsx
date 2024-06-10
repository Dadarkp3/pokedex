import type { Metadata } from 'next';
import { Mohave } from 'next/font/google';
import '../styles/global.scss';

const inter = Mohave({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokedex Page',
  description: 'Search your pokemons',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/icon.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
