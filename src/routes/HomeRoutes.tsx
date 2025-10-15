import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/home/HomePage"));

export const HomeRoute: RouteObject = {
  path: "/",
  element: <HomePage />,
};
