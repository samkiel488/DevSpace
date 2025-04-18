import React from "react";
import { Route, Routes } from "react-router";
import App from "./pages/App";
import Login from "./pages/login";
import Register from "./pages/register";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>}/>
    </Routes>
  );
}
