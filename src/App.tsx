// src/App.tsx
import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";

// Route imports
import { HomeRoute } from "@/routes/HomeRoutes";
import { AuthTestRoute } from "@/routes/AuthTestRoute";
import { CrateTestRoute } from "@/routes/CrateTestRoute";
import { DataTestRoute } from "@/routes/DataTestRoute";
import { HistoryTestRoute } from "@/routes/HistoryTestRoute";
import { LogTestRoute } from "@/routes/LogTestRoute";
import { ServiceTestRoute } from "@/routes/ServiceTestRoute";
import NotFoundPage from "@/pages/error/NotFoundPage";

// Router setup
const router = createBrowserRouter([
  {
    path: "/", // persistent layout
    element: <AppLayout />,
    children: [
      HomeRoute,
      AuthTestRoute,
      CrateTestRoute,
      DataTestRoute,
      HistoryTestRoute,
      LogTestRoute,
      ServiceTestRoute,
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
