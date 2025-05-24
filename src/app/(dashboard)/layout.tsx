import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="w-full">
        {/* <SidebarTrigger /> */}
        <header className="h-[75px] flex flex-col justify-center px-6 border-b">
          <h3 className="md:text-xl">Dashboard</h3>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
