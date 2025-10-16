import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const HistoryTestPage = lazy(() => import("@/pages/history/HistoryTestPage"));

export const HistoryTestRoute: RouteObject = {
  path: "/history-test",
  element: <HistoryTestPage />,
};
