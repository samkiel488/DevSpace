import { Github, Instagram, Linkedin, Twitter, Link } from "lucide-react";
import { useRouteLoaderData } from "react-router";

export default function SocialMedia() {
  const { profile } = useRouteLoaderData("profile");
  return (
    <div className="mb-5">
      <h1 className="mb-3 font-semibold text-xl block  text-black dark:text-white">
        Social Media:
      </h1>
      <div className="flex gap-y-5 flex-col">
        <div className="flex justify-center items-center gap-2">
          <div className="dark-rounded-button">
            <Github />
          </div>
          <input
            type="url"
            name="github"
            id="github"
            placeholder="Enter your profile link"
            defaultValue={profile?.github}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
          />
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="dark-rounded-button">
            <Instagram />
          </div>
          <input
            type="url"
            name="instagram"
            id="instagram"
            placeholder="Enter your profile link"
            defaultValue={profile?.instagram}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
          />
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="dark-rounded-button">
            <Twitter />
          </div>
          <input
            type="url"
            name="twitter"
            id="twitter"
            placeholder="Enter your profile link"
            defaultValue={profile?.twitter}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
          />
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="dark-rounded-button">
            <Linkedin />
          </div>
          <input
            type="url"
            name="linkedin"
            id="linkedin"
            placeholder="Enter your profile link"
            defaultValue={profile?.linkedin}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
          />
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="dark-rounded-button">
            <Link />
          </div>
          <input
            type="url"
            name="portfolio"
            id="portfolio"
            placeholder="Enter your profile link"
            defaultValue={profile?.portfolio}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
