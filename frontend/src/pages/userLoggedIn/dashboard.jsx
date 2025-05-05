import { useState } from "react";
import Toggle from "../../Componets/toggle";
import useLocalStorage from "use-local-storage";
export default function Dashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const prefences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", prefences);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div
      className={`flex h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } fixed md:static md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col h-full w-64 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        <div
          className={`flex items-center justify-center h-16 font-bold text-lg ${
            isDarkMode ? "bg-gray-700" : "bg-gray-300"
          }`}
        >
          My Dashboard
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          {[
            { label: "Dashboard", icon: "M4 6h16M4 12h16M4 18h16" },
            { label: "Messages", icon: "M6 18L18 6M6 6l12 12" },
            { label: "Settings", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-4 py-2 rounded-lg transition ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={item.icon}
                />
              </svg>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header
          className={`flex items-center justify-between h-16 px-4 shadow-md ${
            isDarkMode ? "bg-gray-800" : "bg-gray-200"
          }`}
        >
          <button
            className="text-gray-600 md:hidden focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Avatar and Dropdown */}
          <div className="relative ml-auto">
            <img
              src="https://picsum.photos/200/300"
              alt="User Avatar"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-2 z-50 ${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {["Profile", "Settings", "Sign Out"].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`block px-4 py-2 text-sm ${
                      isDarkMode
                        ? "hover:bg-gray-700"
                        : "hover:bg-gray-100 transition"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Main */}
        <main
          className={`flex-1 p-6 overflow-y-auto ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
          }`}
        >
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="mt-2">
            Explore your dashboard and manage your content efficiently.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Card 1", "Card 2", "Card 3"].map((card, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-md ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <h2 className="text-xl font-semibold">{card}</h2>
                <p className="mt-2">Some description here.</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Toggle Component */}
      <Toggle darkMode={isDarkMode} setDarkMode={setIsDarkMode} />
    </div>
  );
}
