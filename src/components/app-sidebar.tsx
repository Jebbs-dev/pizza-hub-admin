"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, LogOut, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Pizza Orders",
    url: "/pizza-orders",
    icon: ShoppingCart,
  },
];

const logoutItem = [
  {
    title: "Logout",
    url: "",
    icon: LogOut,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="h-screen">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Image
              src="/images/logo/pizza-hut-light.png"
              alt="Logo"
              width={150}
              height={100}
              className="hidden md:block"
            />
            <Image
              src="/images/logo/pizza-hut-light-sm.png"
              alt="Logo"
              width={200}
              height={200}
              className="md:hidden mt-2"
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-7 md:mt-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className="hover:bg-orange-600/10 hover:text-orange-400 rounded-lg"
                  >
                    <Link
                      href={item.url}
                      className={clsx(
                        "pl-4 text-orange-600 flex items-center gap-2",
                        {
                          "border-opacity-100 font-medium bg-orange-600/20 rounded-lg text-orange-600":
                            pathname === item.url,
                        }
                      )}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="mb-10">
          {logoutItem.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                onClick={() => signOut()}
                className="text-orange-600"
              >
                <item.icon />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
