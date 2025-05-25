"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { formatRouteName } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const { toast } = useToast();
  const [isSignoutLoading, setIsSignoutLoading] = useState(false);

  useEffect(() => {
    // If there's no session, redirect to the authentication page
    if (status !== "loading" && !session) {
      router.push("/auth");
    }
  }, [status, session, router]);

  const handleSignOut = async () => {
    try {
      setIsSignoutLoading(true);
      await signOut();
      setIsSignoutLoading(false);

      toast({
        variant: "default",
        title: "Success",
        description: "Signed out successfully",
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to sign out. Please try again.",
      });
      setIsSignoutLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen text-3xl text-orange-400">
        <span className="absolute top-4 left-5">
          <Image
            src="/images/logo/pizza-hut-light.png"
            alt="Logo"
            width={150}
            height={100}
            className="object-contain"
          />
        </span>
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
    <SidebarProvider className="w-full h-[100vh] flex flex-row">
      <AppSidebar />
      <SidebarInset className="w-full overflow-auto bg-orange-600/5">
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-5 md:px-10">
          {/* <SidebarTrigger className="-ml-1" /> */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href={`/`}>Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-orange-600">
                  {pathname === "/pizza-orders"
                    ? formatRouteName(pathname)
                    : "Home"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Button
            className="bg-orange-400 h-7 md:h-9 px-2 md:px-4 text-xs md:text-base hover:bg-orange-600"
            onClick={handleSignOut}
          >
            {isSignoutLoading ? (
              <p className="flex flex-row">
                <span>Signing out </span>
                <span className="ml-2">
                  <FaSpinner />
                </span>
              </p>
            ) : (
              <p>Sign out</p>
            )}
          </Button>
        </header>

        <div className="relative w-full h-full overflow-auto">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
