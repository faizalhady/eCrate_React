import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Route imports
import { HomeRoute } from "@/routes/HomeRoutes";
import { AuthTestRoute } from "@/routes/AuthTestRoute";
import { CrateTestRoute } from "@/routes/CrateTestRoute";
import { DataTestRoute } from "@/routes/DataTestRoute";
import { HistoryTestRoute } from "@/routes/HistoryTestRoute";
import { LogTestRoute } from "@/routes/LogTestRoute";
import { ServiceTestRoute } from "@/routes/ServiceTestRoute";

import NotFoundPage from "@/pages/error/NotFoundPage";

// Combine route objects
const router = createBrowserRouter([
  HomeRoute,
  AuthTestRoute,
  CrateTestRoute,
  DataTestRoute,
  HistoryTestRoute,
  LogTestRoute,
  ServiceTestRoute,
  { path: "*", element: <NotFoundPage /> },
]);

export default function App() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
