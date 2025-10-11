import { toast } from "react-toastify";
import SettingsBanner from "../../../Componets/Dashboard/settingBanner";
import { useLoaderData } from "react-router";
import Bio from "../../../Componets/Dashboard/bio";
import SettingGrid from "../../../Componets/Dashboard/settingGrid";
import AboutMe from "../../../Componets/Dashboard/aboutMe";
import ProjectCard from "../../../Componets/projectCard";

export default function ProfileId() {
  const { profile } = useLoaderData();

  return (
    <div className="flex w-full flex-col gap-2 pb-5 bg-white dark:bg-slate-800 dark:text-white text-black">
      <SettingsBanner users={profile?.profile?.user} />
      <Bio profile={profile?.profile} users={profile?.profile?.user} />
      <SettingGrid profile={profile?.profile}>
        <AboutMe profile={profile?.profile} />
      </SettingGrid>
      <div className="py-4 px-3 sm:px-10">
        <h1 className="font-semibold text-2xl text-center mb-5">
          Recent Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-4 gap-y-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
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

    if (!response.success) {
      return toast.error(response.message);
    }
    return { profile: response.data };
  } catch (err) {
    console.log(err);
  }
}
