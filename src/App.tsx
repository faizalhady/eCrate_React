import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthTestRoute } from "@/routes/AuthTestRoute";
import { CrateTestRoute } from "@/routes/CrateTestRoute";
import { HomeRoute } from "./routes/HomeRoutes";
import NotFoundPage from "./pages/error/NotFounfPage";

// Combine route objects
const router = createBrowserRouter([
  HomeRoute,
  AuthTestRoute, 
  CrateTestRoute,
   { path: "*", element: <NotFoundPage /> },
]);

export default function App() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
