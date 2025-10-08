import { toast } from "react-toastify";
import SettingsBanner from "../../../Componets/Dashboard/settingBanner";
import { useLoaderData } from "react-router";
import Bio from "../../../Componets/Dashboard/bio";
import SettingGrid from "../../../Componets/Dashboard/settingGrid";
import AboutMe from "../../../Componets/Dashboard/aboutMe";

export default function ProfileId() {
  const { profile } = useLoaderData();
  console.log(profile.profile);

  return (
    <div className="flex w-full flex-col gap-2 pb-5 bg-white dark:bg-slate-800 dark:text-white text-black">
      <SettingsBanner users={profile?.profile?.user} />
      <Bio profile={profile?.profile} users={profile?.profile?.user} />
      <SettingGrid profile={profile?.profile}>
        <AboutMe profile={profile?.profile} />
      </SettingGrid>
    </div>
  );
}

export async function ProfileIdLoader({ params }) {
  const { id } = params;
  try {
    const request = await fetch(`http://localhost:3000/profile/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();
    console.log(response);

    if (!response.success) {
      return toast.error(response.message);
    }
    return { profile: response.data };
  } catch (err) {
    console.log(err);
  }
}
