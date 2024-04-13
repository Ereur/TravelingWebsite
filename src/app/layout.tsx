// "use client";
import type { Metadata } from "next";
import "./globals.css";

// import { Montserrat } from "next/font/google";

import Navbar from "@/components/Navbar";
import React from "react";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });

export const metadata: Metadata = {
  title: "Travelling website",
  description:
    "Embark on an enchanting journey through the vibrant tapestry of Morocco with Morrocan traveling. Dive into the rich culture, explore ancient medinas, and traverse the majestic Sahara Desert. Our curated guides and expert tips unlock the secrets of Morocco's hidden gems, from the bustling souks of Marrakech to the blue-hued streets of Chefchaouen. Find your perfect oasis in a riad, taste the flavors of Moroccan cuisine, and immerse yourself in the warmth of Berber hospitality. Let [Your Traveling Website Name] be your gateway to the magic of Morocco.",
};

import { useSelectedLayoutSegment } from "next/navigation";

export default function RootLayout({
  children,
  contact,
  about,
  customtours,
}: Readonly<{
  children: React.ReactNode;
  contact: React.ReactNode;
  about: React.ReactNode;
  customtours: React.ReactNode;
}>) {
  // const segment = useSelectedLayoutSegment();

  return (
    <html lang="en">
      <body className={`scroll-smooth	debug-screens bg-background`}>
        <Navbar />
        <main className="xl:mt-[-120px] bg-background">{children}</main>
      </body>
    </html>
  );
}
