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
                        <a href={members.facebookLink}>
                          <img
                            src="/images/svg/facebook-svgrepo-com.svg"
                            className="h-5 w-5"
                            alt="facebookLogo"
                          />
                        </a>
                        <a className="ml-2" href={members.githubLink}>
                          <img
                            src="/images/svg/github-icon-svgrepo-com.svg"
                            alt="githubLogo"
                            className="h-5 w-5"
                          />
                        </a>
                        <a className="ml-2" href={members.twitterLink}>
                          <img
                            src="/images/svg/twitter-svgrepo-com.svg"
                            alt="twitter-svgrepo-com"
                            className="h-5 w-5"
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
            href="/login"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
