import { useState } from "react";
import Toggle from "../../Componets/toggle";
import useLocalStorage from "use-local-storage";
import SideBar from "../../Componets/Dashboard/sideBar";
import DashboardHeader from "../../Componets/Dashboard/dashboardHeader";
import DashboardHomeBody from "../../Componets/Dashboard/Home/body";

export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const preferences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", preferences);
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
      <SideBar
        isSidebarVisible={isSidebarVisible}
        isDarkMode={isDarkMode}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <DashboardHeader
          isDarkMode={isDarkMode}
          toggleDropdown={toggleDropdown}
          isDropdownOpen={isDropdownOpen}
          toggleSidebar={toggleSidebar}
        />

        {/* Main */}
        <DashboardHomeBody isDarkMode={isDarkMode} />
      </div>

      {/* Toggle Component */}
      <Toggle darkMode={isDarkMode} setDarkMode={setIsDarkMode} />
    </div>
  );
}
