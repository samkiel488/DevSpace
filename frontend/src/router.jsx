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
import FeedsHome from "./pages/dashboard";
import { LoginFormAction } from "./Componets/Login/form";
import { RegisterFormAction } from "./Componets/Register/registerForm";
import Layout, { LayoutLoader } from "./Componets/Dashboard/layout";
import Profile, { ProfileLoader } from "./pages/dashboard/profile";
import Settings from "./pages/dashboard/settings";
import SettingLayout from "./Componets/Dashboard/settingsLayout";
import { SettingsFormAction } from "./Componets/Dashboard/settingsForm";

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
          path: "/",
          id: "feeds",
          element: <Layout />,
          loader: LayoutLoader,
          children: [
            {
              path: "/feeds",
              element: <FeedsHome />,
            },
            {
              path: "/",
              id: "profile",
              element: <SettingLayout />,
              children: [
                {
                  path: "/profile",
                  element: <Profile />,
                  loader: ProfileLoader,
                },
                {
                  path: "/settings",
                  element: <Settings />,
                  action: SettingsFormAction,
                },
              ],
            },
          ],
        },
      ])}
    />
  );
}
