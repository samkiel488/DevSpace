const designedProjects = [
  {
    heading: "Website Redesign",
    description:
      "Complete redesign of corporate website with improved UX and modern aesthetics.",
    category: ["Web Design", "UX"],
    link: [
      {
        heading: "View Code",
        link: "#",
        color: "blue-600",
        colorHover: "blue-700",
      },
      {
        heading: "Preview Project",
        link: "#",
        color: "green-600",
        colorHover: "green-700",
      },
    ],
    imageUrl: "https://picsum.photos/536/354",
    username: "Jonathan Reinink",
    date: "Aug 18",
  },
  {
    heading: "Mobile Application",
    description:
      "Cross-platform mobile app for health tracking with real-time analytics.",
    category: ["React Native", "Health Tech"],
    link: [
      {
        heading: "View Code",
        link: "#",
        color: "blue-600",
        colorHover: "blue-700",
      },
      {
        heading: "Preview Project",
        link: "#",
        color: "green-600",
        colorHover: "green-700",
      },
    ],
    imageUrl: "https://picsum.photos/536/354",
    username: "Jonathan Reinink",
    date: "Aug 18",
  },
  {
    heading: "E-commerce Platform",
    description:
      "Custom e-commerce solution with integrated payment processing and inventory management.",
    category: ["E-commerce", "Payment Gateway"],
    link: [
      {
        heading: "View Code",
        link: "#",
        color: "blue-600",
        colorHover: "blue-700",
      },
      {
        heading: "Preview Project",
        link: "#",
        color: "green-600",
        colorHover: "green-700",
      },
    ],
    imageUrl: "https://picsum.photos/536/354",
    username: "Jonathan Reinink",
    date: "Aug 18",
  },
  {
    heading: "Website Redesign",
    description:
      "Complete redesign of corporate website with improved UX and modern aesthetics.",
    category: ["Web Design", "UX"],
    link: [
      {
        heading: "View Code",
        link: "#",
        color: "blue-600",
        colorHover: "blue-700",
      },
      {
        heading: "Preview Project",
        link: "#",
        color: "green-600",
        colorHover: "green-700",
      },
    ],
    imageUrl: "https://picsum.photos/536/354",
    username: "Jonathan Reinink",
    date: "Aug 18",
  },
  {
    heading: "Mobile Application",
    description:
      "Cross-platform mobile app for health tracking with real-time analytics.",
    category: ["React Native", "Health Tech"],
    link: [
      {
        heading: "View Code",
        link: "#",
        color: "blue-600",
        colorHover: "blue-700",
      },
      {
        heading: "Preview Project",
        link: "#",
        color: "green-600",
        colorHover: "green-700",
      },
    ],
    imageUrl: "https://picsum.photos/536/354",
    username: "Jonathan Reinink",
    date: "Aug 18",
  },
  {
    heading: "E-commerce Platform",
    description:
      "Custom e-commerce solution with integrated payment processing and inventory management.",
    category: ["E-commerce", "Payment Gateway"],
    link: [
      {
        heading: "View Code",
        link: "#",
        color: "blue-600",
        colorHover: "blue-700",
      },
      {
        heading: "Preview Project",
        link: "#",
        color: "green-600",
        colorHover: "green-700",
      },
    ],
    imageUrl: "https://picsum.photos/536/354",
    username: "Jonathan Reinink",
    date: "Aug 18",
  },
];

export default function OurProject() {
  return (
    <>
      {designedProjects.map((project, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-2"
        >
          <div className="relative h-56 overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.heading}
              className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">{project.heading}</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.category.map((category, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-indigo-100 dark:bg-indigo-900 px-3 py-1 text-xs font-medium text-indigo-800 dark:text-indigo-200 shadow-sm"
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              {project.link.map((link, idx) => (
                <a
                  key={idx}
                  href={link.link}
                  className={`inline-block px-5 py-2 text-sm font-medium  ${
                    link.heading === "Preview Project"
                      ? "bg-black text-white hover:bg-black"
                      : `bg-${link.color} dark:bg-${link.color} hover:bg-${link.colorHover} dark:hover:bg-${link.colorHover}`
                  } rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  {link.heading}
                </a>
              ))}
            </div>
          </div>
          <div className="p-4 flex items-center border-t border-gray-200 dark:border-gray-700">
            <a href="#">
              <img
                className="w-12 h-12 rounded-full mr-4 border-2 border-gray-300 dark:border-gray-600 shadow-md"
                src="https://picsum.photos/200/300"
                alt={`Avatar of ${project.name}`}
              />
            </a>
            <div className="text-sm">
              <a
                href="#"
                className="text-gray-900 dark:text-white font-bold leading-none hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {project.username}
              </a>
              <p className="text-gray-600 dark:text-gray-400">{project.date}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
