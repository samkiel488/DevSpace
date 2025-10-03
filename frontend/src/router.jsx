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
import DashboardHome from "./pages/dashboard";
import { LoginFormAction } from "./Componets/Login/form";

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
            { path: "/register", element: <Register /> },
            { path: "*", element: <Page404 /> },
          ],
        },
        {
          path: "/dashboard",
          id: "dashboard",
          children: [
            {
              index: true,
              element: <DashboardHome />,
            },
          ],
        },
      ])}
    />
    // <Routes>
    //   <Route path="/" element={<App />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/register" element={<Register />} />
    //   <Route path="/aboutus" element={<AboutUs />} />
    //   <Route path="/meettheteam" element={<MeetTheTeam />} />
    //   <Route path="/contact" element={<Contact />} />
    //   <Route path="/projects" element={<Project />} />
    //   <Route path="*" element={<Page404 />} />
    //   <Route path="/:username/home" element={<Home />} />
    //   <Route path="/share/:username" element={<Share />} />
    // </Routes>
  );
}
