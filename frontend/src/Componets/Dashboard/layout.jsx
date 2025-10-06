import { Outlet, redirect } from "react-router-dom";
import { VITE_API_URL } from "../../config";
import LayoutHeader from "./layoutHeader";
export default function Layout() {
  return (
    <>
      <LayoutHeader />
      <Outlet />
    </>
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
    return { user: response.data.user };
  } catch (err) {
    console.log(err);
    return redirect("/login");
  }
}
