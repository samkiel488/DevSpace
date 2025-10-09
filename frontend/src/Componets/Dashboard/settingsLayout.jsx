import { Outlet, useLoaderData, useRouteLoaderData } from "react-router";
import SettingsBanner from "./settingBanner";
import Bio from "./bio";

export default function SettingLayout() {
  const { users } = useRouteLoaderData("feeds");
  const { profile } = useLoaderData();

  return (
    <>
      <div className="flex w-full flex-col gap-2 pb-5 bg-white dark:bg-slate-800 dark:text-white text-black">
        <SettingsBanner users={users} />
        <Bio profile={profile} users={users} />
        <Outlet />
      </div>
    </>
  );
}

export async function ProfileLoader() {
  try {
    const request = await fetch("http://localhost:3000/profile/me", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const response = await request.json();
    if (!response.success && !request.ok) {
      return { profile: {} };
    }
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
