"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="container px-6 py-6 h-full">
      <h1 className="text-xl lg:text-2xl text-orange-400">Hello, {session!.user?.name}</h1>
      <p className="text-muted-foreground text-sm">Welcome to your Dashboard</p>
    </div>
  );
}
