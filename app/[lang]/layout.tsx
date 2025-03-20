import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New English",
  description: "The world's biggest platform for improving your spoken English.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className={`${geistSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
