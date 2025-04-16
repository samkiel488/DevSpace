import React from "react";
import { Route, Routes } from "react-router";
import App from "./App";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}
