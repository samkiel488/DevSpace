import Project from "../../pages/project";

const designedProjects = [
  {
    heading: "Website Redesign",
    description:
      "Complete redesign of corporate website with improved UX and modern aesthetics.",
    category: ["Web Design", "UX"],
    link: [
      { heading: "View Code", link: "#", color: "blue-600" },
      { heading: "Preview Project", link: "#", color: "green-600" },
    ],
    imageUrl: "https://picsum.photos/536/354",
    name: "Jonathan Reinink",
    date: "Aug 18",
  },
  {
    heading: "Mobile Application",
    description:
      "Cross-platform mobile app for health tracking with real-time analytics.",
    category: ["React Native", "Health Tech"],
    link: [
      { heading: "View Code", link: "#", color: "blue-600" },
      { heading: "Preview Project", link: "#", color: "green-600" },
    ],
    imageUrl: "https://picsum.photos/536/354",
    name: "Jonathan Reinink",
    date: "Aug 18",
  },
  {
    heading: "E-commerce Platform",
    description:
      "Custom e-commerce solution with integrated payment processing and inventory management.",
    category: ["E-commerce", "Payment Gateway"],
    link: [
      { heading: "View Code", link: "#", color: "blue-600" },
      { heading: "Preview Project", link: "#", color: "green-600" },
    ],
    imageUrl: "https://picsum.photos/536/354",
    name: "Jonathan Reinink",
    date: "Aug 18",
  },
];

export default function OurProject() {
  return (
    <section class="px-4 py-12 sm:px-6 lg:px-8 bg-white  dark:bg-slate-800 text-black dark:text-white">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            Our Projects
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-xl text-black dark:text-white sm:mt-4">
            Check out some of our recent work and case studies.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {designedProjects.map((projects) => {
            return (
              <div class="overflow-hidden rounded-lg bg-white shadow-lg">
                <div class="relative h-48 overflow-hidden">
                  <img
                    src={projects.imageUrl}
                    alt={projects.heading}
                    class="h-full w-full object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                  <div class="absolute bottom-2 left-2 text-white">
                    <h3 class="text-lg font-bold">{projects.heading}</h3>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-700">{projects.description}</p>
                  <div class="mt-4 flex flex-wrap gap-2">
                    {projects.category.map((category) => {
                      return (
                        <span class="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
                          {category}
                        </span>
                      );
                    })}
                  </div>
                  <div class="mt-6 flex gap-4">
                    <a
                      href="#"
                      class="inline-block px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg"
                    >
                      View Code
                    </a>
                    <a
                      href="#"
                      class="inline-block px-5 py-2 text-sm font-medium text-white bg-green-600 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg"
                    >
                      Preview Project
                    </a>
                  </div>
                </div>
                <div class="p-4 flex items-center border-t border-gray-200">
                  <a href="#">
                    <img
                      class="w-12 h-12 rounded-full mr-4 border-2 border-gray-300"
                      src="https://picsum.photos/200/300"
                      alt={`Avatar of ${projects.name}`}
                    />
                  </a>
                  <div class="text-sm">
                    <a
                      href="#"
                      class="text-gray-900 font-semibold leading-none hover:text-indigo-600"
                    >
                      {projects.name}
                    </a>
                    <p class="text-gray-500">{projects.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
