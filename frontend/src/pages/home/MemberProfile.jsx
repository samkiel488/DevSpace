import { Github, Instagram, Link, Linkedin, Twitter } from "lucide-react";
import { useRouteLoaderData } from "react-router";
import { VITE_API_URL } from "../../config";

export async function MemberProfileLoader({ params }) {
  const res = await fetch(`${VITE_API_URL}/profile/${params.id}`);
  if (!res.ok) {
    throw new Response("Not Found", { status: 404 });
  }
  const data = await res.json();
  return data.data;
}

export default function MemberProfile() {
  const { profile } = useRouteLoaderData("memberProfile");

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col bg-gray-100 p-3 rounded-xl gap-2 dark:bg-slate-700 dark:text-white">
        <h1 className="text-lg font-semibold border-b-1 border-b-gray-600 mb-2">
          About {profile.user.name}
        </h1>
        <div className="font-[400] px-2">
          {profile.bio ? (
            `${profile.bio}`
          ) : (
            <div className="flex w-full h-full justify-center items-center font-[350]">
              No bio available
            </div>
          )}
        </div>
      </div>
      <div className="py-4 px-3 sm:px-10">
        <h1 className="font-semibold text-2xl text-center mb-5">
          Skills
        </h1>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, index) => (
            <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="py-4 px-3 sm:px-10">
        <h1 className="font-semibold text-2xl text-center mb-5">
          Tools
        </h1>
        <div className="flex flex-wrap gap-2">
          {profile.tools.map((tool, index) => (
            <span key={index} className="bg-green-500 text-white px-3 py-1 rounded-full">
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div className="py-4 px-3 sm:px-10">
        <h1 className="font-semibold text-2xl text-center mb-5">
          Social Links
        </h1>
        <div className="flex gap-4">
          {profile.github && (
            <a href={profile.github} className="text-blue-500">
              <Github />
            </a>
          )}
          {profile.twitter && (
            <a href={profile.twitter} className="text-blue-500">
              <Twitter />
            </a>
          )}
          {profile.instagram && (
            <a href={profile.instagram} className="text-blue-500">
              <Instagram />
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} className="text-blue-500">
              <Linkedin />
            </a>
          )}
          {profile.portfolio && (
            <a href={profile.portfolio} className="text-blue-500">
              <Link />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
