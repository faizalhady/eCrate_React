import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

// Lazy load crate test page
const CrateTestPage = lazy(() => import("@/pages/crate/CrateTestPage"));

export const CrateTestRoute: RouteObject = {
  path: "/crate-test",
  element: <CrateTestPage />,
};
