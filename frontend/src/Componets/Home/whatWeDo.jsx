const whatWeDoData = [
  {
    image: "laptop-illustration-svgrepo-com",
    title: "Real-world Projects",
    description:
      "Build practical applications with a team and gain real experience working on actual codebases.",
  },
  {
    image: "fire-svgrepo-com",
    title: "Coding Challenges",
    description:
      "Sharpen your skills with fun, timed challenges designed to push your limits and unlock new levels.",
  },
  {
    image: "brain-svgrepo-com",
    title: "Peer-to-Peer Learning",
    description:
      "Learn by teaching and growing with fellow developers—because knowledge shared is power multiplied.",
  },
  {
    image: "handshake-svgrepo-com",
    title: "Networking & Collaboration",
    description:
      "Meet devs from different backgrounds,exchange ideas, and form lasting connections that go beyond code.",
  },
  {
    image: "studio-microphone-svgrepo-com",
    title: "Developer Hangouts & Talks",
    description:
      "Chill sessions, tech talks, and guest speakers that keep you inspired and up-to-date with the industry.",
  },
  {
    image: "hammer-and-pick-svgrepo-com",
    title: "Skill-Building Session",
    description:
      "Interactive sessions focused on specific tools, frameworks,or topics to help you level up fast.",
  },
];
export default function WhatWeDo() {
  return (
    <div class="max-w-screen-[1440px] mx-auto bg-gray-200 dark:bg-slate-900 dark:text-white text-center pb-10">
      <p class="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl mb-5 pt-5">
        What We do ?
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 pl-10 pr-10">
        {whatWeDoData.map((data) => {
          return (
            <div className="p-7 bg-[#FAFAFA] shadow-lg flex flex-col items-center justify-center rounded-2xl">
              <div className="w-20">
                <img src={`/images/svg/${data.image}.svg`} alt={data.image} />
              </div>

              <p className="text-3xl text-black mb-2">{data.title}</p>

              <p className="text-3l text-[#0f0f10] font-[400]">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
