const whatWeDoData = [
  {
    title: "Real-world Projects",
    description:
      "Build practical applications with a team and gain real experience working on actual codebases.",
  },
  {
    title: "Coding Challenges",
    description:
      "Sharpen your skills with fun, timed challenges designed to push your limits and unlock new levels.",
  },
  {
    title: "Peer-to-Peer Learning",
    description:
      "Learn by teaching and growing with fellow developers—because knowledge shared is power multiplied.",
  },
];
export default function WhatWeDo() {
  return (
    <div class="max-w-screen-[1440px] mx-auto dark:bg-slate-900 dark:text-white text-center pb-10">
      <p class="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl mb-5 pt-5">
        What We do
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 pl-10 pr-10">
        {whatWeDoData.map((data) => {
          return (
            <div className="p-7 bg-[#FAFAFA] shadow-lg flex flex-col items-center justify-center rounded-2xl">
              <div className="w-20">
                <img
                  src="/images/laptop-illustration-svgrepo-com.svg"
                  alt="laptop"
                />
              </div>

              <p className="text-3xl text-[#252432] mb-2">{data.title}</p>

              <p className="text-3l text-[#8987A1] font-[400]">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
