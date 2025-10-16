import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const DataTestPage = lazy(() => import("@/pages/data/DataTestPage"));

export const DataTestRoute: RouteObject = {
  path: "/data-test",
  element: <DataTestPage />,
};
