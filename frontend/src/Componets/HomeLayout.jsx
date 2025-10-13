import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router";
import useLocalStorage from "use-local-storage";
import Toggle from "./toggle";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { AnimatePresence, motion } from "framer-motion";

export default function HomeLayout() {
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
            <Header colorLightMode="black" colorDarkMode="black" />
            <Outlet />
            <Footer />
            <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
