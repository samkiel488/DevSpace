import { useState, useEffect } from "react";
import {
  Bell,
  House,
  Menu,
  MessageSquareText,
  Plus,
  Presentation,
  Rss,
  Spotlight,
  User,
  X,
} from "lucide-react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { VITE_API_URL } from "../../config";
export default function LayoutHeader() {
  const navigate = useNavigate();
  const { users } = useLoaderData();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);



  useEffect(() => {
    const updateUnread = () => {
      const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
      setUnreadCount(notifications.filter(n => !n.read).length);
    };
    updateUnread();
    window.addEventListener('storage', updateUnread);
    return () => window.removeEventListener('storage', updateUnread);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  async function HandleLogOut() {
    try {
      const request = await fetch(`${VITE_API_URL}/auth/logout`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
        credentials: "include",
      });
      const response = await request.json();
      console.log(response);
      if (!response.success && !request.ok) {
        return toast.error(response.error);
      }
      return navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }
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
                    <a href="/feeds" className="hover:underline ">
                      Feeds
                    </a>
                  </li>
                  <li>
                    <a href="/members" className="hover:underline ">
                      Members
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline ">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline ">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline ">
                      Chat
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline ">
                      Leaderboard
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex text-white justify-center items-center px-3 gap-4">
            <div className="hidden md:flex">
              <a href="#" className="light-button">
                <Plus />
                Create
              </a>
            </div>
            <div className="flex md:hidden">
              <a className="flex justify-center items-center cursor-pointer">
                <Menu
                  onClick={() => {
                    setIsSidebarOpen(!isSidebarOpen);
                  }}
                />
              </a>
            </div>
            <div className="relative">
              <Link to="/notifications" className="relative">
                <Bell className="h-6 w-6 cursor-pointer" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadCount > 99 ? '99+' : unreadCount}
                  </span>
                )}
              </Link>
            </div>
            <div className="relative">
              <img
                onClick={toggleDropdown}
                src={
                  users?.profilePic
                    ? users?.profilePic
                    : "/images/blank-profile-picture-973460_960_720.webp"
                }
                alt="Profile Picture"
                className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer transition-transform transform hover:scale-110"
              />
              {isDropdownOpen && (
                <div className="absolute top-14 right-0 w-48 bg-white rounded shadow-lg border border-gray-200 z-5">
                  <ul className="text-black">
                    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all">
                      <Link to="/profile" className="block">
                        Profile
                      </Link>
                    </li>
                    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all">
                      <Link to="/settings" className="block">
                        Settings
                      </Link>
                    </li>
                    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all">
                      <a
                        href="#"
                        className="block"
                        onClick={async () => {
                          await HandleLogOut();
                        }}
                      >
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
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 bg-slate-600 h-full w-[80%] p-6 pt-2 transition-transform transform md:hidden z-10">
          <div className="flex justify-between items-center mb-2">
            <img src="/images/logo-bg.png" className="h-15 w-15" />
            <X
              onClick={() => {
                setIsSidebarOpen(!isSidebarOpen);
              }}
              className="text-white text-2xl cursor-pointer hover:text-gray-300"
            />
          </div>
          <ul className="space-y-6 text-white">
            <li>
              <a
                href="/feeds"
                className="flex items-center space-x-3 text-lg font-medium hover:text-gray-300 transition duration-200"
              >
                <House />
                <span>Feeds</span>
              </a>
            </li>
            <li>
              <a
                href="/members"
                className="flex items-center space-x-3 text-lg font-medium hover:text-gray-300 transition duration-200"
              >
                <User />
                <span>Members</span>
              </a>
            </li>
            <li>
              <a
                href="/notifications"
                className="flex items-center space-x-3 text-lg font-medium hover:text-gray-300 transition duration-200"
              >
                <Bell />
                <span>Notifications</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-lg font-medium hover:text-gray-300 transition duration-200"
              >
                <Presentation />
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-lg font-medium hover:text-gray-300 transition duration-200"
              >
                <Rss />
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-lg font-medium hover:text-gray-300 transition duration-200"
              >
                <MessageSquareText />
                <span>Chat</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-lg font-medium hover:text-gray-300 transition duration-200"
              >
                <Spotlight />
                <span>Leaderboard</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
