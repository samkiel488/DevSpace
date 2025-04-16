import { useState } from "react";
const headerList = [
  "About",
  "Careers",
  "History",
  "Services",
  "Projects",
  "Blog",
];
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative bg-[url('/images/hero-bg.jpeg')] bg-cover bg-center bg-no-repeat">
      <header className="bg-transparent dark:bg-transparent z-30 relative">
        <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-teal-600 dark:text-teal-300" href="./#">
            <span className="sr-only">Home</span>
            <img src="/images/logo-bg.png" alt="Logo" className="h-20 w-auto" />
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {headerList.map((item) => (
                  <li key={item}>
                    <a
                      href="/"
                      className="text-white transition hover:text-white/75"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  href="./#"
                >
                  Login
                </a>
                <a
                  className="hidden sm:block rounded-md bg-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/30"
                  href="./#"
                >
                  Register
                </a>
              </div>

              {/* Hamburger */}
              <button
                className="block md:hidden rounded-sm bg-white/20 p-2.5 text-white transition hover:text-white/75"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 p-6 text-white">
          <div className="flex justify-between items-center mb-6">
            <a className="text-teal-300 font-bold text-lg" href="./#">
              <img
                src="/images/logo-bg.png"
                alt="Logo"
                className="h-20 w-auto"
              />
            </a>
            <button onClick={() => setMobileMenuOpen(false)}>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="space-y-4">
            {headerList.map((item) => (
              <a
                key={item}
                href="./#"
                className="block text-lg font-medium hover:text-teal-400 transition"
              >
                {item}
              </a>
            ))}
            <div className="mt-6 space-y-2">
              <a
                href="./#"
                className="block w-full text-center rounded-md bg-teal-600 px-4 py-2 text-white font-medium hover:bg-teal-500"
              >
                Login
              </a>
              <a
                href="./#"
                className="block w-full text-center rounded-md bg-white/10 px-4 py-2 font-medium hover:bg-white/20"
              >
                Register
              </a>
            </div>
          </nav>
        </div>
      )}{" "}
      <main className="relative isolate px-6 pt-12 pb-20 lg:px-8 text-white text-center z-10">
        <div className="mx-auto max-w-3xl pt-10">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-6xl">
            Welcome to D3V++ Group
          </h1>
          <h1 className="text-2l pt-5 tracking-tight font-medium text-white sm:text-2xl">
            A space where young devs grow, connect, and build cool stuff
          </h1>
          <p className="mt-8 text-lg font-light text-white/80 sm:text-xl">
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
  );
}
