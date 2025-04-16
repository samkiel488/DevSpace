import React from "react";
import { Route, Routes } from "react-router";
import App from "./pages/App";
import Login from "./pages/login";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
