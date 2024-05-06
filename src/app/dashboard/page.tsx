"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSelectedLayoutSegment } from "next/navigation";

export default function login() {
  // const route = useRouter();
  // const segment = useSelectedLayoutSegment();
  // console.log("segment", segment);
  // const { data: session, status } = useSession();

  // console.log("session", session);
  return <div className="w-screen flex items-center justify-center"></div>;
}
