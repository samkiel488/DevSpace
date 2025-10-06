import { useState } from "react";
import { redirect } from "react-router-dom";
import { VITE_API_URL } from "../../config";
export default function DashboardHome() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <header className="w-full bg-black shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <img src="/images/logo-bg.png" alt="Logo" className="h-10 w-10" />
              <span className="text-white text-xl font-bold">D3V++</span>
            </div>

            <div className="flex gap-5">
              <nav className="hidden md:flex items-center space-x-8 text-white font-medium">
                <a href="/feeds" className="hover:text-gray-400 transition">
                  Feeds
                </a>
                <a href="#" className="hover:text-gray-400 transition">
                  Create
                </a>
                <a href="#" className="hover:text-gray-400 transition">
                  Project
                </a>
              </nav>

              <div className="relative">
                <button onClick={toggleDropdown} className="focus:outline-none">
                  <img
                    src="/images/blank-profile-picture-973460_960_720.webp"
                    alt="User Profile"
                    className="h-10 w-10 rounded-full border border-gray-300 cursor-pointer"
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Log Out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-blue-600 flex h-[400px] md:h-[500px] w-full flex-col justify-center items-center-safe">
        <div>Hello World</div>
      </section>
    </>
  );
}

export async function DashboardLoader() {
  try {
    const req = await fetch(`http://localhost:3000/projects`, {
      method: "get",
      credentials: "include",
    });
    const response = await req.json();
    if (!response.success && !req.ok) {
      return redirect("/login");
    }
  } catch (err) {
    console.log(err);
    return redirect("/login");
  }
}
