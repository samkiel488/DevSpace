import Header from "./header";
import Footer from "./footer";
import { Outlet, useLocation } from "react-router";
import useLocalStorage from "use-local-storage";
import Toggle from "./toggle";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import { Loader } from "lucide-react";

export default function HomeLayout() {
  const prefences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", prefences);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin text-blue-500 h-10 w-10" />
      </div>
    );
  }

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <div className="transition-opacity duration-500 opacity-100">
        <ToastContainer />
        <Header colorLightMode="black" colorDarkMode="black" />
        <Outlet />
        <Footer />
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}
