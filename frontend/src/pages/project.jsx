import OurProject from "../Componets/Projects/ourProject";

export default function Project() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Our Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300 sm:mt-6">
            Explore some of our recent work and case studies that showcase our
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <OurProject />
        </div>
      </div>
    </section>
  );
}
