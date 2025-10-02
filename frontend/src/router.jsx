import App from "./pages/App";
import Login from "./pages/login";
import Register from "./pages/register";
import AboutUs from "./pages/AboutUs";
import MeetTheTeam from "./pages/meetTheTeam";
import Contact from "./pages/contact";
import Project from "./pages/project";
import Page404 from "./pages/404page";
import Home from "./pages/userLoggedIn/home";
import Share from "./pages/share";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Componets/HomeLayout";

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
            { path: "/login", element: <Login /> },
          ],
        },
        { path: "*", element: <Page404 /> },
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
