import { useState } from "react";
import { Bell, Menu, Plus } from "lucide-react";
import { Outlet, redirect } from "react-router-dom";
// import { VITE_API_URL } from "../../config";
export default function Layout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <header className="w-full bg-slate-600 shadow-md h-20">
        <div className="flex h-full justify-between">
          <div className="flex">
            <div className="flex h-full items-center">
              <img src="/images/logo-bg.png" alt="logo" className="h-15 w-15" />
            </div>
            <div className="px-2 hidden md:flex">
              <nav className="h-full flex items-center">
                <ul className=" flex gap-x-4 text-white h-full items-center">
                  <li>
                    <a href="#">Feeds</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Chat</a>
                  </li>
                  <li>
                    <a href="#">Leaderboard</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex text-white justify-center items-center px-3 gap-4">
            <div className="hidden md:flex">
              <a
                href="#"
                className="bg-white  border-1 border-black text-black px-4 py-2 rounded-xl flex justify-center items-center"
              >
                <Plus />
                Create
              </a>
            </div>
            <div className="flex md:hidden">
              <button className="flex justify-center items-center">
                <Menu />
              </button>
            </div>
            <div className="flex">
              <Bell />
            </div>
            <div className="relative group">
              <img
                onClick={toggleDropdown}
                src="/images/blank-profile-picture-973460_960_720.webp"
                alt="Profile Picture"
                className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer transition-transform transform hover:scale-110"
              />
              {isDropdownOpen && (
                <div className="absolute top-14 right-0 w-48 bg-white rounded shadow-lg border border-gray-200 ">
                  <ul className="text-black">
                    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all">
                      <a href="#" className="block">
                        Profile
                      </a>
                    </li>
                    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all">
                      <a href="#" className="block">
                        Settings
                      </a>
                    </li>
                    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all">
                      <a href="#" className="block">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export async function LayoutLoader() {
  try {
    const req = await fetch(`http://localhost:3000/auth/loggedIn`, {
      method: "get",
      credentials: "include",
    });
    const response = await req.json();
    if (!response.success && !req.ok) {
      return redirect("/login");
    }
    return { user: response.data.user };
  } catch (err) {
    console.log(err);
    return redirect("/login");
  }
}

/* <div className="relative">
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
                    href="/profile"
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
            </div> */
