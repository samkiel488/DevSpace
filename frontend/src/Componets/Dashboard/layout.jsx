import { Outlet, redirect, useLocation } from "react-router-dom";
import { VITE_API_URL } from "../../config";
import LayoutHeader from "./layoutHeader";
import { ToastContainer } from "react-toastify";
import useLocalStorage from "use-local-storage";
import Toggle from "../toggle";
import { useState, useEffect } from "react";
import { Loader } from "lucide-react";

export default function Layout() {
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
        <LayoutHeader />
        <Outlet />
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export async function LayoutLoader() {
  try {
    const req = await fetch(`${VITE_API_URL}/api/auth/loggedIn`, {
      method: "get",
      credentials: "include",
    });
    const response = await req.json();
    if (!response.success && !req.ok) {
      return redirect("/login");
    }
    return { users: response.data.user };
  } catch (err) {
    console.log(err);
    return redirect("/login");
  }
}
