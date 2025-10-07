import { Outlet, redirect } from "react-router-dom";
import { VITE_API_URL } from "../../config";
import LayoutHeader from "./layoutHeader";
import { ToastContainer } from "react-toastify";
import useLocalStorage from "use-local-storage";
import Toggle from "../toggle";
export default function Layout() {
  const prefences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", prefences);
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <ToastContainer />
      <LayoutHeader />
      <Outlet />
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export async function LayoutLoader() {
  try {
    const req = await fetch(`${VITE_API_URL}/auth/loggedIn`, {
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
