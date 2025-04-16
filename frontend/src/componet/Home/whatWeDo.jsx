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
];
export default function WhatWeDo() {
  return (
    <div class="max-w-screen-[1440px] mx-auto dark:bg-zinc-800 dark:text-white text-center pb-10">
      <p class="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl mb-5">
        What We do
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-2 pl-10 pr-10">
        {whatWeDoData.map((data) => {
          return (
            <div class="p-4 bg-[#FAFAFA] shadow  flex flex-col items-center justify-center">
              <div class=" w-20">
                <img
                  src="/images/laptop-illustration-svgrepo-com.svg"
                  alt="laptop"
                />
              </div>

              <p class="text-2xl text-[#252432] mb-2">{data.title}</p>

              <p class="text-2l text-[#8987A1] font-[400]">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
