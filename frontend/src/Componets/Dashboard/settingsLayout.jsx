import {
  Github,
  Instagram,
  Link,
  Linkedin,
  Share,
  Twitter,
} from "lucide-react";
import { Outlet, useLoaderData, useRouteLoaderData } from "react-router";
import copyToClipboard from "../../libs/copyLinktoClipboard";

export default function SettingLayout() {
  const {
    users: { name },
  } = useRouteLoaderData("feeds");

  const { profile } = useLoaderData();

  return (
    <>
      <div className="flex w-full flex-col gap-2 pb-5 bg-white dark:bg-slate-800 dark:text-white text-black">
        <div className="flex w-full relative">
          <img
            src="/images/hero-bg.jpg"
            alt="hero"
            className="h-60 w-full object-cover"
          />
          <div className="absolute -bottom-10 left-1/2 sm:-bottom-20 sm:left-10 flex transform -translate-x-1/2 sm:translate-0">
            <img
              src="/images/blank-profile-picture-973460_960_720.webp"
              alt={`Profile Picture for Ape`}
              className="h-25 w-25 sm:w-35 sm:h-35 object-cover rounded-full"
            />
          </div>
        </div>
        <div className="mt-10 p-2 md:mt-0 md:pl-47">
          <div className="flex w-full px-2 flex-col sm:flex-row">
            <div className="flex flex-col flex-wrap items-center w-full sm:items-start">
              <div className="flex gap-3 justify-center items-center">
                <h1 className="text-2xl font-semibold">{name}</h1>
                <button
                  type="button"
                  className="dark-rounded-button !p-1"
                  target="_blank"
                  onClick={async () => {
                    copyToClipboard({
                      path: `share/${profile?._id}`,
                    });
                  }}
                >
                  <Share className="w-4 h-4" />
                </button>
              </div>
              <p className="font-[350]">{profile?.role}</p>
            </div>
            <div className="flex justify-center sm:justify-end-safe gap-3 p-2">
              <a
                href={profile?.twitter}
                className="dark-rounded-button dark:light-rounded-button"
              >
                <Twitter />
              </a>
              <a href={profile?.github} className="dark-rounded-button">
                <Github />
              </a>
              <a href={profile.instagram} className="dark-rounded-button">
                <Instagram />
              </a>
              <a href={profile?.linkedin} className="dark-rounded-button">
                <Linkedin />
              </a>
              <a href={profile?.portfolio} className="dark-rounded-button">
                <Link />
              </a>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
