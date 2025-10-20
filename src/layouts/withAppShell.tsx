import React from "react";
import AppShell, { type AppShellProps } from "./AppShell";

/**
 * Wrap a page element with the AppShell layout.
 * Usage: element: withAppShell(<MyPage />, { title: "Section", subtitle: "Page" })
 */
export function withAppShell(
  element: React.ReactNode,
  shellProps?: Omit<AppShellProps, "children">
) {
  return <AppShell {...shellProps}>{element}</AppShell>;
}
