import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";
import WixDisabledBanner from "@/components/WixDisabledBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LAMA E-Commerce Store",
  description: "Shop the latest products at LAMA - Your one-stop online shopping destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WixClientContextProvider>
          <WixDisabledBanner />
          <Navbar />

          <main>{children}</main>

          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
