import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const utGlorious = localFont({
  src: [
    {
      path: '../../public/fonts/UTGlorious-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/UTGlorious-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/UTGlorious-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-ut-glorious',
});

const libertinusSerif = localFont({
  src: [
    {
      path: '../../public/fonts/LibertinusSerif-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LibertinusSerif-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-libertinus-serif',
});

export const metadata: Metadata = {
  title: "LaunchBox Design",
  description: "Launch like you mean it.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${utGlorious.variable} ${libertinusSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}