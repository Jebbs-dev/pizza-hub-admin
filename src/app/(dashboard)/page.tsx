"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // If there's no session, redirect to the authentication page
    if (status !== "loading" && !session) {
      router.push("/auth");
    }
  }, [status, session, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen text-3xl">
        Loading
        <FaSpinner className="ml-3 animate-spin" />
      </div>
    );
  }

  if (!session) {
    // Early return for cases when redirect is in progress
    return null;
  }

  return (
    <div className="container px-6 py-6 h-full">
      <h1 className="text-xl lg:text-2xl">Hello, {session!.user?.name}</h1>
      <p className="text-foreground text-sm">Welcome to your Dashboard</p>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
}
