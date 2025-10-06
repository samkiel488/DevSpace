import OurTeamProfiles from "../../Componets/MeetTheTeam/ourTeamProfile";

export default function MeetTheTeam() {
  return (
    <section class=" bg-white  dark:bg-slate-800 text-black dark:text-white body-font pb-10">
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-col text-center w-full mb-10">
          <h1 class="text-3xl font-medium title-font mb-4 text-black dark:text-white">
            OUR TEAM
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            At the heart of our success is a dedicated team of professionals who
            bring passion, creativity, and expertise to everything they do.
            Together, we strive to create meaningful impact through
            collaboration, innovation, and a shared commitment to excellence.
            Get to know the individuals who make it all possible below.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 gap-y-10 justify-center items-center p-3">
          <OurTeamProfiles />
        </div>
      </div>
    </section>
  );
}
