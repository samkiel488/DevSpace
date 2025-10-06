import App from "./pages/home/App";
import Login from "./pages/home/login";
import Register from "./pages/home/register";
import AboutUs from "./pages/home/AboutUs";
import MeetTheTeam from "./pages/home/meetTheTeam";
import Contact from "./pages/home/contact";
import Project from "./pages/home/project";
import Page404 from "./pages/home/404page";
import Share from "./pages/home/share";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Componets/HomeLayout";
import DashboardHome, { DashboardLoader } from "./pages/dashboard";
import { LoginFormAction } from "./Componets/Login/form";
import { RegisterFormAction } from "./Componets/Register/registerForm";

export default function AppRouter() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <HomeLayout />,
          children: [
            { element: <App />, index: true },
            { path: "aboutus", element: <AboutUs /> },
            { path: "/meettheteam", element: <MeetTheTeam /> },
            { path: "/contact", element: <Contact /> },
            { path: "/projects", element: <Project /> },
            { path: "/login", element: <Login />, action: LoginFormAction },
            { path: "/share/:id", element: <Share /> },
            {
              path: "/register",
              element: <Register />,
              action: RegisterFormAction,
            },
            { path: "*", element: <Page404 /> },
          ],
        },
        {
          path: "/feeds",
          id: "feeds",
          children: [
            {
              index: true,
              element: <DashboardHome />,
              loader: DashboardLoader,
            },
          ],
        },
      ])}
    />
  );
}
