import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryProvider } from "./providers/QueryProvider";
import { SidebarProvider } from "@/components/ui/sidebar"; // ⬅️ from Shadcn

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <QueryProvider>
        <App />
      </QueryProvider>
    </SidebarProvider>
  </StrictMode>
);
