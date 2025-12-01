import React from "react";
import { Header } from "./Header";
import { Footer } from "../Footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeToggle } from "../ThemeToggle";
type AppLayoutProps = {
  children: React.ReactNode;
};
export function AppLayout({ children }: AppLayoutProps): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster richColors closeButton />
      <ThemeToggle className="fixed bottom-4 right-4" />
    </div>
  );
}