"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { session } from "@/lib/auth-client";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    if (session.isLoggedIn()) {
      router.replace("/chat");
    } else {
      router.replace("/sign-in");
    }
  }, [router]);
  return null;
}
