import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ['latin'], variable: '--font-inter'})

export const metadata: Metadata = {
  title: {
    template: 'DevStore | %s',
    default: 'DevStore'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body
        className={`antialiased bg-zinc-950 text-zinc-50`}
      >
        {children}
      </body>
    </html>
  );
}
