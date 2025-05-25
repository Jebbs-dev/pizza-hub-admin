import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppSidebar } from "./app-sidebar";
import { SidebarProvider } from "./ui/sidebar";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

// Mock next-auth and next/navigation
jest.mock("next-auth/react", () => ({
  signOut: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("AppSidebar", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/");
    (signOut as jest.Mock).mockClear();
  });

  it("renders the sidebar with navigation items", () => {
    render(
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Pizza Orders")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("calls signOut when logout is clicked", () => {
    render(
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
    );
    fireEvent.click(screen.getByText("Logout"));
    expect(signOut).toHaveBeenCalledTimes(1);
  });

  it("highlights the active navigation item", () => {
    (usePathname as jest.Mock).mockReturnValue("/pizza-orders");
    render(
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
    );
    const pizzaOrdersLink = screen.getByText("Pizza Orders").closest("a");
    expect(pizzaOrdersLink).toHaveClass("border-opacity-100");
  });
});
