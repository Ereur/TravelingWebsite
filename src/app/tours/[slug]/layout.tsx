"use client";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="flex w-full pt-32 gap-8 flex-col">
        <Link href="/tours/1/dates">dates</Link>
        <Link href="/tours/1/thetrip">thetrip</Link>
      </nav>
      {children}
      {/* {dates} */}
      {/* {thetrip} */}
    </>
  );
}
