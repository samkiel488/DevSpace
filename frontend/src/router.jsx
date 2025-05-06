import React from "react";
import { Route, Routes } from "react-router";
import App from "./pages/App";
import Login from "./pages/login";
import Register from "./pages/register";
import AboutUs from "./pages/AboutUs";
import MeetTheTeam from "./pages/meetTheTeam";
import Contact from "./pages/contact";
import Project from "./pages/project";
import Page404 from "./pages/404page";
import Home from "./pages/userLoggedIn/home";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/meettheteam" element={<MeetTheTeam />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/:username/home" element={<Home />} />
    </Routes>
  );
}
