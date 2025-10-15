import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

// Lazy load the page for better performance
const AuthTestPage = lazy(() => import("@/pages/auth/AuthTestPage"));

export const AuthTestRoute: RouteObject = {
  path: "/auth-test",
  element: <AuthTestPage />,
};
