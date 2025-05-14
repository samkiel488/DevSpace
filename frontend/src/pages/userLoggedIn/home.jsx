import React, { useEffect, useState } from "react";
import DashboardHeader from "../../Componets/Dashboard/header";
import LeftSideBar from "../../Componets/Dashboard/leftSideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import HomeMain from "../../Componets/Dashboard/Home/homeMain";
import Toggle from "../../Componets/toggle";
import useLocalStorage from "use-local-storage";
const url = import.meta.env.VITE_API_URL;

const Home = () => {
  const prefences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", prefences);
  const location = useLocation();
  const navigate = useNavigate();

  const { userName, isUserLoggedIn } = location.state || {};
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [post, setPost] = useState([]);
  const [retrivedUserName, setRetrivedUserName] = useState();

  useEffect(() => {
    if (isUserLoggedIn && userName) {
      Cookies.set("userName", userName, { expires: 7 });
      Cookies.set("isUserLoggedIn", isUserLoggedIn, { expires: 7 });
    }
  }, [userName, isUserLoggedIn]);
  // This effect runs when either userName or isUserLoggedIn changes

  useEffect(() => {
    // Check if the user is already logged in by checking the cookies
    const storedUserName = Cookies.get("userName");
    const storedIsUserLoggedIn = Cookies.get("isUserLoggedIn") === "true"; // js-cookie stores values as strings
    setRetrivedUserName(storedUserName);
    if (
      storedIsUserLoggedIn &&
      storedUserName &&
      location.pathname === `/${storedUserName}/home`
    ) {
      // If the user is logged in, proceed with fetching posts
      const fetchPost = async () => {
        try {
          const response = await axios.get(`${url}/users/${storedUserName}`);
          if (response.data.post.length > 0) {
            setPost(response.data.post);
          } else {
            navigate("/404");
          }
        } catch (error) {
          console.error("Error fetching post:", error);
          navigate("/login");
        }
      };
      fetchPost();
    } else {
      // If not logged in, redirect to login page
      navigate("/login");
    }
  }, [navigate, location.pathname]);

  function handleLogout() {
    Cookies.remove("userName");
    Cookies.remove("isUserLoggedIn");
    navigate("/login");
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        data-theme={darkMode ? "dark" : "light"}
        className="h-full bg-gray-100 dark:bg-gray-900"
      >
        <div className="min-h-full">
          {/* Header */}
          <DashboardHeader
            mobileMenuOpen={mobileMenuOpen}
            setDropdownOpen={setDropdownOpen}
            dropdownOpen={dropdownOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            handleLogout={handleLogout}
            userName={userName ? userName : retrivedUserName}
          />

          {/* Main content */}
          <div className="py-10 mt-15">
            <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
              {/* Sidebar (hidden on small screens) */}
              <LeftSideBar userName={userName} />

              {/* Main content */}
              <HomeMain post={post} />
            </div>
          </div>
        </div>
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default Home;
