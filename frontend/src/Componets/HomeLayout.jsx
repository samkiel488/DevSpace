import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router";
import useLocalStorage from "use-local-storage";
import Toggle from "./toggle";
import { ToastContainer } from "react-toastify";
export default function HomeLayout() {
  const prefences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", prefences);
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <ToastContainer />
      <Header colorLightMode="black" colorDarkMode="black" />
      <Outlet />
      <Footer />
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
