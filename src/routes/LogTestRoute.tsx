import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const LogTestPage = lazy(() => import("@/pages/log/LogTestPage"));

export const LogTestRoute: RouteObject = {
  path: "/log-test",
  element: <LogTestPage />,
};
