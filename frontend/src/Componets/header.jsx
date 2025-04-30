import { useState } from "react";

const headerList = [
  { heading: "Home", url: "/" },
  { heading: "About Us", url: "/aboutus" },
  { heading: "Projects", url: "./#" },
  { heading: "Meet the Team", url: "/meettheteam" },
  { heading: "Blog", url: "./#" },
  { heading: "Contact Us", url: "/contact" },
  { heading: "Join Us", url: "./#" },
];

export default function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`bg-${props.colorLightMode} dark:bg-${props.colorDarkMode} z-30 relative`}
      >
        <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-white dark:text-black" href="./#">
            <span className="sr-only">Home</span>
            <img src="/images/logo-bg.png" alt="Logo" className="h-20 w-auto" />
          </a>

          <div className="flex flex-1 items-center justify-end lg:justify-between">
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-6 text-sm">
                {headerList.map((item) => (
                  <li key={item.heading}>
                    <a
                      href={item.url}
                      className="text-white transition hover:text-white/75"
                    >
                      {item.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  href="/login"
                >
                  Login
                </a>
                <a
                  className="hidden sm:block rounded-md bg-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/30"
                  href="/register"
                >
                  Register
                </a>
              </div>

              {/* Mobile menu toggle button - shown on md and below */}
              <button
                className="block lg:hidden rounded-sm bg-white/20 p-2.5 text-white transition hover:text-white/75"
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

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 p-6 text-white lg:hidden">
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
                key={item.heading}
                href={item.url}
                className="block text-lg font-medium hover:text-teal-400 transition"
              >
                {item.heading}
              </a>
            ))}
            <div className="mt-6 space-y-2">
              <a
                href="/login"
                className="block w-full text-center rounded-md bg-teal-600 px-4 py-2 text-white font-medium hover:bg-teal-500"
              >
                Login
              </a>
              <a
                href="/register"
                className="block w-full text-center rounded-md bg-white/10 px-4 py-2 font-medium hover:bg-white/20"
              >
                Register
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
