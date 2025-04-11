'use client'

import { Roboto } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from '@clerk/nextjs';
import Responsivenav from "./components/home/navbar/Responsivenav";
import Footer from "./components/home/footer/Footer";
import { Toaster } from "sonner";

const font = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${font.className} bg-gray-900 antialiased`}>
          <Responsivenav />
          {children}
          <Toaster />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
