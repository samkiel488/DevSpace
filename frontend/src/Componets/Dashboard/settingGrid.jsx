import { useRouteLoaderData } from "react-router";

export default function SettingGrid({ children }) {
  const { profile } = useRouteLoaderData("profile");
  return (
    <div className="px-3 sm:px-10">
      <div className="grid grid-cols-1  sm:grid-cols-[30%_70%] gap-4  mb-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 bg-gray-100 dark:bg-slate-700 dark:text-white p-3 rounded-xl ">
            <h1 className="text-lg font-semibold border-b-1 border-b-gray-600 mb-2">
              Skills
            </h1>
            <div className="flex gap-3 flex-wrap">
              {profile?.skills && profile?.skill?.length !== 0 ? (
                profile?.skills?.map((skill, idx) => {
                  return (
                    <div
                      className="bg-green-500 p-1 px-3 rounded-xl text-sm"
                      key={idx}
                    >
                      {skill}
                    </div>
                  );
                })
              ) : (
                <div className="h-10 flex justify-center items-center w-full font-[350]">
                  No Skills yet
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-gray-100 p-3 rounded-xl dark:bg-slate-700 dark:text-white">
            <h1 className="text-lg font-semibold border-b-1 border-b-gray-600 mb-2">
              Tools
            </h1>
            <div className="flex gap-3 flex-wrap">
              {profile?.tools && profile?.tools?.length !== 0 ? (
                profile?.tools?.map((tool, idx) => {
                  return (
                    <div
                      className="bg-green-500 p-1 px-3 rounded-xl text-sm"
                      key={idx}
                    >
                      {tool}
                    </div>
                  );
                })
              ) : (
                <div className="h-10 flex justify-center items-center w-full font-[350]">
                  No tools yet
                </div>
              )}
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
