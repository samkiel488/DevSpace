import { Github, Instagram, Link, Linkedin, Twitter } from "lucide-react";
import ProjectCard from "../../Componets/projectCard";
import SettingGrid from "../../Componets/Dashboard/settingGrid";
import { redirect } from "react-router";

export default function Profile() {
  return (
    <>
      <SettingGrid>
        <div className="flex flex-col bg-gray-100 p-3 rounded-xl gap-2">
          <h1 className="text-lg font-semibold border-b-1 border-b-gray-600 mb-2">
            About Me
          </h1>
          <p className="font-[400] px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quasi
            perspiciatis doloremque ipsa vel fuga veniam rerum dolor
            exercitationem? Illo, sunt nemo? Voluptatum tenetur illo explicabo
            quasi vel adipisci commodi amet assumenda inventore tempore! Earum
            voluptatum ab veniam, adipisci possimus cupiditate aperiam odit id
            nobis facere, minus fugit ducimus repudiandae!
          </p>
        </div>
      </SettingGrid>
      <div className="py-4 px-3 sm:px-10">
        <h1 className="font-semibold text-2xl text-center mb-5">
          Recent Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
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
    console.log(response);

    if (!response.success && !request.ok) {
      return redirect("/settings");
    }
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
