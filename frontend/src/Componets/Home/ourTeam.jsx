import teamMembers from "../team";

export default function OurTeam() {
  return (
    <section class=" body-font bg-white  dark:bg-slate-800 text-black dark:text-white py-2 sm:py-5">
      <div class="container px-5 py-2 mx-auto">
        <div class="flex flex-col text-center w-full mb-5">
          <h1 class="text-4xl font-medium title-font mb-4 text-black dark:text-white">
            OUR TEAM
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          {teamMembers
            .map((members) => {
              return (
                <div class="p-4 lg:w-1/2">
                  <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                      alt="team"
                      class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                      src={members.imageurl}
                      style={{ width: "200px" }}
                    />
                    <div class="flex-grow sm:pl-8">
                      <h2 class="title-font font-medium text-lg text-black dark:text-white">
                        {members.name}
                      </h2>
                      <h3 class="text-black dark:text-white mb-3">
                        {members.role}
                      </h3>
                      <p class="mb-4">{members.description}</p>
                      <span class="inline-flex">
                        <a class="text-dark" href={members.facebookLink}>
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-dark" href={members.twitterLink}>
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-dark" href={members.githubLink}>
                          <img
                            src="/images/svg/github-icon-svgrepo-com.svg" 
                            className="w-6 h-6"
                            alt=""
                          />
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
