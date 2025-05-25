"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useSession } from "next-auth/react";
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
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    // If there's no session, redirect to the authentication page
    if (status !== "loading" && !session) {
      router.push("/auth");
    }
  }, [status, session, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen text-3xl text-orange-400">
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
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
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
        </header>

        <div className="relative w-full h-full overflow-auto">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
