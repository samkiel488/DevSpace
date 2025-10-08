import { Github, Instagram, Link, Linkedin, Twitter } from "lucide-react";
import ProjectCard from "../../Componets/projectCard";
import SettingGrid from "../../Componets/Dashboard/settingGrid";
import { useRouteLoaderData } from "react-router";
import AboutMe from "../../Componets/Dashboard/aboutMe";

export default function Profile() {
  const { profile } = useRouteLoaderData("profile");
  return (
    <>
      <SettingGrid profile={profile}>
        <AboutMe profile={profile} />
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
