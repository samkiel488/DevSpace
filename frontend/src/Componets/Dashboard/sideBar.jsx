export default function SideBar({
  isSidebarVisible,
  isDarkMode,
  toggleSidebar,
}) {
  return (
    <div
      className={`
        ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"}
        fixed md:static md:translate-x-0 transition-transform duration-300 ease-in-out
        flex flex-col h-full w-64 z-40
        ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"}
      `}
    >
      {/* Header with My Dashboard */}
      <div
        className={`flex items-center justify-between h-16 px-4 font-bold text-lg ${
          isDarkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <span className="text-xl">My Dashboard</span>

        {/* Close button for mobile */}
        <button
          className={`md:hidden flex items-center justify-center w-8 h-8 rounded-full ${
            isDarkMode
              ? "bg-gray-600 hover:bg-gray-500 text-white"
              : "bg-gray-300 hover:bg-gray-400 text-gray-800"
          } transition duration-300 transform hover:scale-110`}
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-4">
        {[
          {
            label: "Home",
            icon: "M3 9.75L12 4l9 5.75V20a1 1 0 01-1 1h-5.25a.75.75 0 01-.75-.75V15a1 1 0 00-1-1h-2a1 1 0 00-1 1v5.25a.75.75 0 01-.75.75H4a1 1 0 01-1-1V9.75z",
            route: "/username/home",
          },
          {
            label: "Messages",
            icon: "M7 8h10M7 12h6M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.39-1.02L3 20l1.3-3.9A7.972 7.972 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
            route: "/username/messages",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.route || "#"}
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
