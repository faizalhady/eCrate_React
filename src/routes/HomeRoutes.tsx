import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { withAppShell } from "@/layouts/withAppShell";

const HomePage = lazy(() => import("@/pages/home/HomePage"));

export const HomeRoute: RouteObject = {
  path: "/",
  element: withAppShell(<HomePage />, { title: "Home", subtitle: "Overview" }),
};
