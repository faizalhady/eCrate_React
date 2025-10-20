import { MainRoutes } from "./MainRoutes";
import { AuthTestRoute } from "./AuthTestRoute";
import NotFoundPage from "@/pages/error/NotFoundPage";

export const AppRouteTree = [
  MainRoutes,
  AuthTestRoute,
  { path: "*", element: <NotFoundPage /> },
];
