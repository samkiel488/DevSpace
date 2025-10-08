export default function AboutMe({ profile }) {
  return (
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
  );
}
