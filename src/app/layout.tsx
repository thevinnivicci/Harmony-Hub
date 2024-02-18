import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harmony Hub",
  description:
    "Discover the Perfect Blend: Learn, Create, and Harmonize Your Musical Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"className="">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
