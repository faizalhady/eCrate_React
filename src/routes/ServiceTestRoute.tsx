import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const ServiceTestPage = lazy(() => import("@/pages/service/ServiceTestPage"));

export const ServiceTestRoute: RouteObject = {
  path: "/service-test",
  element: <ServiceTestPage />,
};
