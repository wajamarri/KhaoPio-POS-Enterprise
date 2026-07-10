import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../pages/dashboard/DashboardPage";
import Playground from "../pages/playground/Playground";

export default function AppRoutes() {
  return (
    <Routes>

      {/* ===========================
          Design System Playground
          No MainLayout
      ============================ */}
      <Route
        path="/playground"
        element={<Playground />}
      />

      {/* ===========================
          Application
      ============================ */}
      <Route element={<MainLayout />}>

        <Route
          index
          element={<DashboardPage />}
        />

        <Route
          path="dashboard"
          element={<DashboardPage />}
        />

      </Route>

      {/* ===========================
          404
      ============================ */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}