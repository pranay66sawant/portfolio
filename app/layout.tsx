import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Alex Chen — Frontend Developer",
  description:
    "Frontend developer with 2 years of experience crafting beautiful, performant web experiences.",
  openGraph: {
    title: "Alex Chen — Frontend Developer",
    description: "Frontend developer specializing in React, Next.js & modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} bg-bg text-white font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
