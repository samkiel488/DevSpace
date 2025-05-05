import { useState } from "react";

export default function Dashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } fixed md:static md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col h-full w-64 bg-blue-800 text-white`}
      >
        <div className="flex items-center justify-center h-16 bg-blue-900">
          <span className="text-lg font-bold uppercase">My Dashboard</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          <a
            href="#"
            className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-700"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-700"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Messages
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-700"
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Settings
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <header className="flex items-center justify-between h-16 px-4 bg-white shadow-md">
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
          <div className="flex items-center space-x-4 ml-auto">
            <img
              src="https://picsum.photos/200/300"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>
        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
          <p className="mt-2 text-gray-600">
            Explore your dashboard and manage your content efficiently.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">Card 1</h2>
              <p className="mt-2 text-gray-600">Some description here.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">Card 2</h2>
              <p className="mt-2 text-gray-600">Some description here.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">Card 3</h2>
              <p className="mt-2 text-gray-600">Some description here.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
