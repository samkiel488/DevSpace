const why = [
  {
    heading: "Software Development",
    description:
      "We build software that is tailored to your needs and requirements. We work with you to understand your business and create a solution that works for you.",
  },
  {
    heading: "Web & Mobile Solution",
    description:
      "We build web and mobile applications that are fast, responsive, and easy to use. We use the latest technologies to create applications that are scalable and secure.",
  },
  {
    heading: "UI/UX Design",
    description:
      "We create beautiful and intuitive user interfaces that are easy to use. We focus on the user experience and create designs that are both functional and visually appealing.",
  },
];

export default function WhyChooseUs() {
return (
    <section className="py-12 dark:bg-slate-800 text-black dark:text-white sm:py-12 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                <h2 className="text-3xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl xl:text-5xl mb-6">
                    WHAT WE DO
                </h2>
                <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
                    We are creating tools that help you be more productive and efficient when building websites and web apps.
                </p>
            </div>
            <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-6 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                {why.map((item, index) => (
                    <div
                        key={index}
                        className="relative transform transition-transform hover:scale-105"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-30"></div>
                        <div className="relative overflow-hidden bg-white dark:bg-gray-900 shadow-lg rounded-xl h-full">
                            <div className="p-8">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 dark:bg-indigo-800 rounded-full">
                                    <svg
                                        className="w-8 h-8 text-indigo-600 dark:text-indigo-300"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 8L20 8"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        ></path>
                                        <path
                                            d="M4 16L14 16"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        ></path>
                                        <ellipse
                                            cx="7"
                                            cy="8"
                                            rx="3"
                                            ry="3"
                                            transform="rotate(90 7 8)"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        ></ellipse>
                                        <ellipse
                                            cx="17"
                                            cy="16"
                                            rx="3"
                                            ry="3"
                                            transform="rotate(90 17 16)"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        ></ellipse>
                                    </svg>
                                </div>
                                <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white sm:mt-8">
                                    {item.heading}
                                </h3>
                                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
}
