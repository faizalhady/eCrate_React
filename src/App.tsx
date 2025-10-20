import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRouteTree } from "@/routes";

const router = createBrowserRouter(AppRouteTree);

export default function App() {
  return <RouterProvider router={router} />;
}
