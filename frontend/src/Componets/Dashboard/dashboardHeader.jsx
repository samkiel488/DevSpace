export default function DashboardHeader({isDarkMode, toggleDropdown, isDropdownOpen, toggleSidebar}) {
  return (
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
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
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
  );
}
