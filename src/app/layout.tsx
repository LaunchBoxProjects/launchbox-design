import type { Metadata } from "next";
import { Afacad, Albert_Sans } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
  weight: ["400", "600", "700"],
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  weight: ["300", "400", "700"],
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
      <body className={`${afacad.variable} ${albertSans.variable}`}>
        {children}
      </body>
    </html>
  );
}