import { Outlet, redirect } from "react-router-dom";
import { VITE_API_URL } from "../../config";
import LayoutHeader from "./layoutHeader";
import { ToastContainer } from "react-toastify";
import useLocalStorage from "use-local-storage";
import Toggle from "../toggle";
import { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout() {
  const prefences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", prefences);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingSpinner key="spinner" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ToastContainer />
            <LayoutHeader />
            <Outlet />
            <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </motion.div>
        )}
      </AnimatePresence>
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
