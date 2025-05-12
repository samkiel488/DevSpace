export default function LeftSideBar({ userName, isDarkMode }) {
  return (
    <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
      <nav
        aria-label="Sidebar"
        className={`sticky top-4 divide-y ${
          isDarkMode ? 'divide-gray-600' : 'divide-gray-300'
        }`}
      >
        <div className="space-y-1 pb-8">
          <a
            href={`/${userName}/home`}
            className={`${
              isDarkMode
                ? 'bg-gray-700 text-gray-200'
                : 'bg-gray-200 text-gray-900'
            } group flex items-center px-3 py-2 text-sm font-medium rounded-md`}
            aria-current="page"
          >
            <svg
              className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-500'
              } flex-shrink-0 -ml-1 mr-3 h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="truncate">Home</span>
          </a>
          <a
            href="#"
            className={`${
              isDarkMode
                ? 'text-gray-300 hover:bg-gray-700'
                : 'text-gray-700 hover:bg-gray-50'
            } group flex items-center px-3 py-2 text-sm font-medium rounded-md`}
          >
            <svg
              className={`${
                isDarkMode
                  ? 'text-gray-500 group-hover:text-gray-400'
                  : 'text-gray-400 group-hover:text-gray-500'
              } flex-shrink-0 -ml-1 mr-3 h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.362 5.214A8.252 8.252 0 0112 21a8.25 8.25 0 01-6.038-13.952 8.287 8.287 0 019-5.134 8.983 8.983 0 013.361 6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
            <span className="truncate">Message</span>
          </a>
          {/* Repeat similar changes for other links */}
        </div>
      </nav>
    </div>
  );
}
