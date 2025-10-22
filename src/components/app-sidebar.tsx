// src/components/app-sidebar.tsx
import * as React from "react";
import {
  ChevronRight,
  Home,
  Box,
  History,
  FileCog,
  Database,
  Server,
  KeyRound,
  Settings,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

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

// -------------------------------------------------------------
// NAVIGATION STRUCTURE — grouped by category (no parent icons)
// -------------------------------------------------------------
const navStructure = [
  {
    title: "Main",
    items: [{ title: "Dashboard", path: "/", icon: Home }],
  },
  {
    title: "API Testing",
    items: [
      { title: "Crate Test", path: "/crate-test", icon: Box },
      { title: "History Test", path: "/history-test", icon: History },
      { title: "Log Test", path: "/log-test", icon: Database },
      { title: "Service Test", path: "/service-test", icon: Server },
      { title: "Data Test", path: "/data-test", icon: FileCog },
      { title: "Auth Test", path: "/auth-test", icon: KeyRound },
    ],
  },
  {
    title: "System",
    items: [{ title: "Settings", path: "#", icon: Settings }],
  },
];

// -------------------------------------------------------------
// SIDEBAR COMPONENT
// -------------------------------------------------------------
export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar {...props}>
      {/* HEADER */}
      <SidebarHeader>
        <VersionSwitcher versions={["1.0.1", "2.0.0"]} defaultVersion="1.0.1" />
        <SearchForm />
      </SidebarHeader>

      {/* SIDEBAR CONTENT */}
      <SidebarContent className="gap-0">
        {navStructure.map((section) => (
          <Collapsible
            key={section.title}
            title={section.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              {/* GROUP TITLE */}
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
              >
                <CollapsibleTrigger>
                  {section.title}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>

              {/* CHILD ITEMS */}
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            asChild
                            isActive={isActive}
                            onClick={() =>
                              item.path !== "#" ? navigate(item.path) : null
                            }
                            className="pl-6" // 👈 Slight indent for hierarchy
                          >
                            <button className="flex w-full items-center gap-2 text-left">
                              <item.icon className="h-4 w-4 opacity-80" />
                              <span>{item.title}</span>
                            </button>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
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
