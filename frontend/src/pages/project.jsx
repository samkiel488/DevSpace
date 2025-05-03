import Footer from "../Componets/footer";
import Header from "../Componets/header";
import Toggle from "../Componets/toggle";

export default function Project() {
  return (
    <div>
      <Header colorLightMode="black" colorDarkMode="black" />
      <section class="px-4 py-12 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <div class="mb-12 text-center">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Projects
            </h2>
            <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Check out some of our recent work and case studies.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
              <div class="h-48 overflow-hidden bg-blue-500">
                <img
                  src="https://placehold.co/600x400/transparent/FFF"
                  alt="Project 1"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900">
                  Website Redesign
                </h3>
                <p class="mt-2 text-gray-600">
                  Complete redesign of corporate website with improved UX and
                  modern aesthetics.
                </p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    Web Design
                  </span>
                  <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                    UX
                  </span>
                </div>
                <a
                  href="#"
                  class="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  View case study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-1 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
              <div class="h-48 overflow-hidden bg-green-500">
                <img
                  src="https://placehold.co/600x400/transparent/FFF"
                  alt="Project 2"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900">
                  Mobile Application
                </h3>
                <p class="mt-2 text-gray-600">
                  Cross-platform mobile app for health tracking with real-time
                  analytics.
                </p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                    React Native
                  </span>
                  <span class="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                    Health Tech
                  </span>
                </div>
                <a
                  href="#"
                  class="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  View case study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-1 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
              <div class="h-48 overflow-hidden bg-purple-500">
                <img
                  src="https://placehold.co/600x400/transparent/FFF"
                  alt="Project 3"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900">
                  E-commerce Platform
                </h3>
                <p class="mt-2 text-gray-600">
                  Custom e-commerce solution with integrated payment processing
                  and inventory management.
                </p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                    E-commerce
                  </span>
                  <span class="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
                    Payment Gateway
                  </span>
                </div>
                <a
                  href="#"
                  class="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  View case study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-1 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Toggle />
    </div>
  );
}
