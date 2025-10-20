"use client";

import * as React from "react";
import { ChevronRight, Home, Package, Database, Clock, FileText, Server, ShieldCheck } from "lucide-react";
import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// ---------------------------------------------------------------------------
// Sidebar Data
// ---------------------------------------------------------------------------

const data = {
  versions: ["v1.0.1"],
  navMain: [
    {
      title: "Overview",
      items: [
        {
          title: "Dashboard",
          icon: Home,
          url: "/",
        },
        {
          title: "Home Page",
          icon: Home,
          url: "/home",
        },
      ],
    },
    {
      title: "Production",
      items: [
        {
          title: "Crate Test",
          icon: Package,
          url: "/crate-test",
        },
        {
          title: "Data Test",
          icon: Database,
          url: "/data-test",
        },
        {
          title: "History Test",
          icon: Clock,
          url: "/history-test",
        },
      ],
    },
    {
      title: "Monitoring",
      items: [
        {
          title: "Log Test",
          icon: FileText,
          url: "/log-test",
        },
        {
          title: "Service Test",
          icon: Server,
          url: "/service-test",
        },
      ],
    },
    {
      title: "System",
      items: [
        {
          title: "Auth Test",
          icon: ShieldCheck,
          url: "/auth-test",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>

      <SidebarContent className="gap-0">
        {data.navMain.map((group) => (
          <Collapsible key={group.title} title={group.title} defaultOpen>
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
              >
                <CollapsibleTrigger>
                  {group.title}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a
                            href={item.url}
                            className="flex items-center gap-2"
                          >
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
