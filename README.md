# 📦 eCrate System (React + Vite + TypeScript)

**eCrate** is a production-grade web application developed for managing and tracking the **crating workflow of goods** within Jabil's manufacturing environment.  
It provides real-time visibility, scheduling, and status monitoring from **queuing → staging → crating → completion**, ensuring every package is accurately handled and traceable from start to dispatch.

---

## 🧭 Overview

The system enables production and vendor teams to coordinate the entire crating process efficiently by:
- Handling serial number queuing and staging logic  
- Tracking current crating sessions and statuses  
- Managing area and device registration  
- Handling cancellations, re-queues, and vendor handovers  
- Providing auditability for every operation  

---

## ⚙️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend Framework** | React 18 + TypeScript + Vite |
| **State Management / Data Fetching** | TanStack React Query |
| **HTTP Client** | Axios with Interceptors |
| **UI / Styling** | Tailwind CSS + ShadCN UI (planned) |
| **Routing** | React Router DOM |
| **Backend (External API)** | .NET (EST1C Integration) |
| **Deployment** | IIS (Windows Server) |

---

## 🏗️ Project Architecture

```plaintext
src/
 ┣ api/              # API modules (crateApi.ts, authApi.ts)
 ┣ hooks/            # React Query hooks (useCrateQuery, useAuthQuery)
 ┣ routes/           # Centralized route definition files
 ┣ pages/            # Page-level components (CratePage, AuthPage, HomePage)
 ┣ providers/        # Context & global providers (QueryProvider, ThemeProvider)
 ┣ lib/              # Axios client setup & shared utilities
 ┣ components/       # Reusable UI elements (buttons, modals, loaders, etc.)
 ┣ App.tsx           # Root component for routing
 ┗ main.tsx          # Entry point
```

Each API domain (Auth, Crate, etc.) includes:

- A dedicated `api/*.ts` file for HTTP logic
- A corresponding `hooks/use*.ts` file for React Query integration

This structure separates **network logic**, **UI**, and **state management**, making the app modular and maintainable.

---

## 🚀 Features

✅ Queuing and staging management  
✅ Crating creation and completion tracking  
✅ Area and device registration through API  
✅ Cancel and rollback functionality for failed crates  
✅ Integrated user and device authentication  
✅ Real-time feedback and validation (via React Query)  
✅ Modular route structure for maintainability  
✅ Developer-friendly debug logging via `devLog()`  

---

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/eCrate.git
cd eCrate
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the project root:

```bash
VITE_API_BASE_URL=http://localhost:5227/api
VITE_APP_ENV=development
```

### 4️⃣ Run the development server

```bash
npm run dev
```

The app will start on:  
👉 [http://localhost:5173](http://localhost:5173)

---

## 🧱 Build for Production

```bash
npm run build
```

The compiled files will be generated in the `/dist` directory — ready for deployment on **IIS** or any static hosting platform.

---

## 🔒 Authentication Flow

- Authentication handled via `/auth/login` and `/auth/logout` endpoints
- User and device information retrieved using:
  - `useLogin()` / `useLogout()`
  - `useUser(ntid)`
  - `useDevice(serialNumber)`
- Tokens stored in `localStorage` (`auth_token`)
- On logout or token expiry, cache and token are automatically cleared

---

## 🪄 API Modules Summary

| Module | Description | Endpoint |
|--------|-------------|----------|
| **authApi.ts** | Handles user authentication and device lookup | `/api/auth/*` |
| **crateApi.ts** | Handles queuing, staging, crating, cancellation, and area data | `/api/crate/*` |

Each API module returns **typed responses** and integrates seamlessly with **TanStack Query** for cache management and data synchronization.

---

## 🧠 Design Principles

- **Separation of Concerns** — Each feature (Auth, Crate, etc.) has its own API and Query layer
- **Predictable State** — Managed through React Query with cache control and refetching
- **Extensibility** — Easy to add new stages or integrate with other systems (QA, logistics, etc.)
- **Type Safety** — Full TypeScript typing for all API responses
- **Error Transparency** — Dev logging and query error handling for consistent debugging

---

## 🧩 Future Roadmap

- 📡 Real-time WebSocket status updates
- 📱 Responsive UI for production-floor tablets
- 🧾 Crating summary dashboard (metrics & KPIs)
- 🔔 Vendor notifications and QR-based check-in
- 🧱 Integration with eST1C for torque tool traceability
- 💾 Persistent queue caching for offline resilience

---

## 👤 Author

**Faiz**  
Industrial Engineering - Digitalization Team (Jabil PEN001)  
**Role:** Full-Stack Developer / System Integrator  
**Tech Stack:** React, Node.js, C#, SQL Server  
**Contact:** *(Internal use only)*

---

## 🪪 License

> **Internal Proprietary Project**  
> For use only within Jabil-authorized environments.  
> Redistribution or external deployment is prohibited.