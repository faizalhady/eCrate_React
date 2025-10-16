// src/layouts/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex bg-background text-foreground">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          {/* header */}
          <header className="h-14 border-b border-border flex items-center">
            <div className="max-w-[1280px] w-full mx-auto px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="md:hidden" />
                <Separator orientation="vertical" className="hidden md:block h-6 mr-2" />
                <div className="text-sm text-muted-foreground">eCrate — Internal</div>
              </div>

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                NTID: user.name
              </div>
            </div>
          </header>

          {/* main content area uses SidebarInset so the shadcn provider can adjust layout */}
          <SidebarInset>
            <main className="flex-1 p-6">
              <div className="max-w-[1280px] w-full mx-auto">
                <Outlet />
              </div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
