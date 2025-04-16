import Header from "../componet/header";
import AboutUs from "../componet/Home/aboutUs";
import { useState } from "react";
import Toggle from "../componet/toggle";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <div className="relative bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <Header colorLightMode="transparent" colorDarkMode="transparent" />
        <main className="relative isolate px-6 pt-12 pb-20 lg:px-8 text-white text-center z-10">
          <div className="mx-auto max-w-3xl pt-10">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-6xl">
              Welcome to D3V++ Group
            </h1>
            <h1 className="text-2l pt-5 tracking-tight font-medium text-white sm:text-2xl">
              A space where young devs grow, connect, and build cool stuff
            </h1>
            <p className="mt-8 text-lg tracking-tight font-bold text-white/80 sm:text-xl">
              Whether you're just getting started or leveling up your
              skills,you're in the right place. Collaborate on real projects,
              share ideas, and build a future fueled by code and creativity.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a
                href="./#"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
              >
                Get started
              </a>
            </div>
          </div>
        </main>
      </div>
      <AboutUs />
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* <button
        className="fixed bottom-6 right-6 z-50 rounded-full bg-black text-white dark:bg-white dark:text-black p-3 shadow-lg transition duration-300 hover:cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button> */}
    </div>
  );
}
