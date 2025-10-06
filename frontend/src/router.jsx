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
import FeedsHome, { FeedsLoader } from "./pages/dashboard";
import { LoginFormAction } from "./Componets/Login/form";
import { RegisterFormAction } from "./Componets/Register/registerForm";
import Layout, { LayoutLoader } from "./Componets/Dashboard/layout";

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
          ],
        },
      ])}
    />
  );
}
