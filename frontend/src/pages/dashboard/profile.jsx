import { Github, Instagram, Link, Linkedin, Twitter } from "lucide-react";
import ProjectCard from "../../Componets/projectCard";
import SettingGrid from "../../Componets/Dashboard/settingGrid";
import { useRouteLoaderData } from "react-router";

export default function Profile() {
  const { profile } = useRouteLoaderData("profile");
  return (
    <>
      <SettingGrid>
        <div className="flex flex-col bg-gray-100 p-3 rounded-xl gap-2  dark:bg-slate-700 dark:text-white">
          <h1 className="text-lg font-semibold border-b-1 border-b-gray-600 mb-2 ">
            About Me
          </h1>
          <div className="font-[400] px-2">
            {profile?.bio ? (
              `${profile?.bio}`
            ) : (
              <div className="flex w-full h-full justify-center items-center font-[350]">
                You don&apos;t have a bio yet
              </div>
            )}
          </div>
        </div>
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
    </>
  );
}

