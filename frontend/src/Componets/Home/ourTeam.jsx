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
                      src={`/images/Members/${members.imageurl}.jpg`}
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
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 1C5.925 1 1 5.925 1 12c0 4.865 3.162 8.983 7.548 10.437.552.101.752-.24.752-.534v-1.873c-3.07.668-3.717-1.48-3.717-1.48-.502-1.276-1.227-1.616-1.227-1.616-1.004-.686.076-.672.076-.672 1.11.078 1.695 1.14 1.695 1.14.987 1.69 2.59 1.202 3.22.92.1-.715.386-1.202.702-1.479-2.45-.279-5.025-1.225-5.025-5.452 0-1.204.429-2.187 1.136-2.958-.114-.278-.492-1.403.108-2.924 0 0 .926-.297 3.033 1.13.88-.244 1.82-.367 2.756-.372.936.005 1.876.128 2.756.372 2.106-1.427 3.03-1.13 3.03-1.13.603 1.52.225 2.645.11 2.924.71.771 1.135 1.754 1.135 2.958 0 4.238-2.578 5.17-5.036 5.444.397.343.75 1.02.75 2.056v3.05c0 .296.198.64.757.53C19.843 20.982 23 16.865 23 12c0-6.075-4.925-11-11-11z"></path>
                          </svg>
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
