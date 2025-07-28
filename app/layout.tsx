import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About - Siva Padmanaban",
  description: "Software Developer with 10+ years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow w-full max-w-screen-md mx-auto px-4 sm:px-6 md:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
