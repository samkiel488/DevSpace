export default function SideBar({ isSidebarVisible, isDarkMode }) {
  return (
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
          {
            label: "Home",
            icon: "M3 9.75L12 4l9 5.75V20a1 1 0 01-1 1h-5.25a.75.75 0 01-.75-.75V15a1 1 0 00-1-1h-2a1 1 0 00-1 1v5.25a.75.75 0 01-.75.75H4a1 1 0 01-1-1V9.75z",
            route: "/dashboard",
          },
          { label: "Messages", icon: "M6 18L18 6M6 6l12 12" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.route}
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
  );
}
