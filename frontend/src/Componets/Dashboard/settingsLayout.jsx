import { Github, Instagram, Link, Linkedin, Twitter } from "lucide-react";
import { Outlet, useRouteLoaderData } from "react-router";

export default function SettingLayout() {
  const {
    users: { name },
  } = useRouteLoaderData("feeds");
  return (
    <>
      <div className="flex w-full flex-col gap-2 mb-10">
        <div className="flex w-full relative">
          <img
            src="/images/hero-bg.jpg"
            alt="hero"
            className="h-60 w-full object-cover"
          />
          <div className="absolute -bottom-10 left-1/2 sm:-bottom-20 sm:left-10 flex transform -translate-x-1/2 sm:translate-0">
            <img
              src="/images/Members/APE.jpg"
              alt={`Profile Picture for Ape`}
              className="h-25 w-25 sm:w-35 sm:h-35 object-cover rounded-full"
            />
          </div>
        </div>
        <div className="mt-10 p-2 md:mt-0 md:pl-47">
          <div className="flex w-full px-2 flex-col sm:flex-row">
            <div className="flex flex-col flex-wrap items-center w-full sm:items-start">
              <h1 className="text-2xl font-semibold">{name}</h1>
              <p className="font-[350]">Frontend Developer</p>
            </div>
            <div className="flex justify-center sm:justify-end-safe gap-3 p-2">
              <button className="dark-rounded-button">
                <Twitter />
              </button>
              <button className="dark-rounded-button">
                <Github />
              </button>
              <button className="dark-rounded-button">
                <Instagram />
              </button>
              <button className="dark-rounded-button">
                <Linkedin />
              </button>
              <button className="dark-rounded-button">
                <Link />
              </button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
