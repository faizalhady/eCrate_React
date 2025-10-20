"use client";

import * as React from "react";
import { AppSidebar } from "@/components/app-sidebar"; // created by `sidebar-02`
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

type Crumb = { label: string; href?: string };

export interface AppShellProps {
  /** First breadcrumb (e.g., section) */
  title?: string;
  /** Second breadcrumb (e.g., page) */
  subtitle?: string;
  /** Full custom breadcrumb trail (overrides title/subtitle) */
  crumbs?: Crumb[];
  children: React.ReactNode;
}

export default function AppShell({
  title,
  subtitle,
  crumbs,
  children,
}: AppShellProps) {
  // Build breadcrumb from either `crumbs` or title/subtitle
  const trail: Crumb[] =
    crumbs ??
    [
      ...(title ? [{ label: title, href: "#" }] : []),
      ...(subtitle ? [{ label: subtitle }] : []),
    ];

  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />

      <SidebarInset>
        {/* Top bar */}
        <header className="bg-background sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />

          <Breadcrumb>
            <BreadcrumbList>
              {trail.map((c, i) => (
                <React.Fragment key={i}>
                  <BreadcrumbItem className={i === 0 ? "hidden md:block" : ""}>
                    {c.href ? (
                      <BreadcrumbLink href={c.href}>{c.label}</BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{c.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {i < trail.length - 1 && (
                    <BreadcrumbSeparator className="hidden md:block" />
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        {/* Main content */}
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </div>
  );
}
