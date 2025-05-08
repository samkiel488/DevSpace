import React, { useEffect, useState } from "react";
import DashboardHeader from "../../Componets/Dashboard/header";
import LeftSideBar from "../../Componets/Dashboard/leftSideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure the state from location (checking for userName and isUserLoggedIn)
  const { userName, isUserLoggedIn } = location.state || {};

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [post, setPost] = useState([]);

  useEffect(() => {
    // Check if the user is already logged in by checking the cookies
    const storedUserName = Cookies.get("userName");
    const storedIsUserLoggedIn = Cookies.get("isUserLoggedIn") === "true"; // js-cookie stores values as strings

    if (
      storedIsUserLoggedIn &&
      storedUserName &&
      location.pathname === `/${storedUserName}/home`
    ) {
      // If the user is logged in, proceed with fetching posts
      const fetchPost = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/users/${storedUserName}`
          );
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

  useEffect(() => {
    // Set the cookies when the user logs in
    if (isUserLoggedIn) {
      // Set the cookies with an expiration of 1 day
      Cookies.set("userName", userName, { expires: 30 });
      Cookies.set("isUserLoggedIn", isUserLoggedIn, { expires: 30 });
    }
  }, [userName, isUserLoggedIn]); // This effect runs when either userName or isUserLoggedIn changes

  return (
    <div className="h-full bg-gray-100">
      <div className="min-h-full">
        {/* Header */}
        <DashboardHeader
          mobileMenuOpen={mobileMenuOpen}
          setDropdownOpen={setDropdownOpen}
          dropdownOpen={dropdownOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Main content */}
        <div className="py-10">
          <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            {/* Sidebar (hidden on small screens) */}
            <LeftSideBar userName={userName} />

            {/* Main content */}
            <main className="lg:col-span-7  xl:col-span-10">
              <div className="mt-4">
                <h1 className="text-2xl font-bold text-gray-900 text-center">
                  Recent Posts
                </h1>
                <ul role="list" className="space-y-4">
                  {post.map((item) => {
                    return (
                      <li className="bg-white px-4 py-6 m-5 shadow sm:rounded-lg sm:px-6">
                        <article aria-labelledby="question-title-81614">
                          <div>
                            <div className="flex space-x-3">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  <a href="#" className="hover:underline">
                                    {item.name}
                                  </a>
                                </p>
                                <p className="text-sm text-gray-500">
                                  <a href="#" className="hover:underline">
                                    <time dateTime="2020-12-09T11:43:00">
                                      {item.date}
                                    </time>
                                  </a>
                                </p>
                              </div>
                            </div>
                            <h2
                              id="question-title-81614"
                              className="mt-4 text-base font-medium text-gray-900"
                            >
                              {item.postHeadline}
                            </h2>
                          </div>
                          <div className="mt-2 space-y-4 text-sm text-gray-700">
                            <p>{item.postText}</p>
                          </div>
                          <div className="mt-6 flex justify-between space-x-8">
                            {/* Action buttons */}
                          </div>
                        </article>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
