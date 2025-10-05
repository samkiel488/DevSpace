import { Facebook, Github, Twitter } from "lucide-react";
import teamMembers from "../team";

export default function OurTeam() {
  return (
    <section className=" body-font bg-white  dark:bg-slate-800 text-black dark:text-white py-2 sm:py-5">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="text-4xl font-medium title-font mb-4 text-black dark:text-white">
            OUR TEAM
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamMembers
            .map((members, idx) => {
              return (
                <div key={idx} className="p-4 lg:w-1/2">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                      src={`/images/Members/${members.imageurl}.jpg`}
                      style={{ width: "200px" }}
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-black dark:text-white">
                        {members.name}
                      </h2>
                      <h3 className="text-black dark:text-white mb-3">
                        {members.role}
                      </h3>
                      <p className="mb-4">{members.description}</p>
                      <span className="inline-flex">
                        <a className="text-dark" href={members.facebookLink}>
                          <Facebook />
                        </a>
                        <a
                          className="ml-2 text-dark"
                          href={members.twitterLink}
                        >
                          <Twitter />
                        </a>
                        <a className="ml-2 text-dark" href={members.githubLink}>
                          <Github />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
            .slice(0, 4)}
        </div>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <a
            href="/meettheteam"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
