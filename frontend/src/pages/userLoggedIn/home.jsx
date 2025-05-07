import React, { useEffect, useState } from "react";
import DashboardHeader from "../../Componets/Dashboard/header";
import LeftSideBar from "../../Componets/Dashboard/leftSideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure the state from location (checking for userName and isUserLoggedIn)
  const { userName, isUserLoggedIn } = location.state || {};

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [post, setPost] = useState([]);

  console.log("userName", userName);
  // If user is not logged in, redirect them to /register page

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login"); // Redirect to register page if not logged in
    } else {
      const fetchPost = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/users/${userName}`
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
    }
  }, [isUserLoggedIn, userName, navigate]);

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
                              <div className="flex flex-shrink-0 self-center">
                                <button
                                  type="button"
                                  className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <span className="sr-only">Open options</span>
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0z" />
                                  </svg>
                                </button>
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
                            <div className="flex space-x-6">
                              <span className="inline-flex items-center text-sm">
                                <button
                                  type="button"
                                  className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                >
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
                                  </svg>
                                  <span className="font-medium text-gray-900">
                                    29
                                  </span>
                                  <span className="sr-only">likes</span>
                                </button>
                              </span>
                              <span className="inline-flex items-center text-sm">
                                <button
                                  type="button"
                                  className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                >
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902zm0 7a1 1 0 110-2 1 1 0 010 2zm-2 0a1 1 0 11-2 0 1 1 0 012 0zm5-1a1 1 0 100 2 1 1 0 000-2z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="font-medium text-gray-900">
                                    11
                                  </span>
                                  <span className="sr-only">replies</span>
                                </button>
                              </span>
                              <span className="inline-flex items-center text-sm">
                                <button
                                  type="button"
                                  className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                >
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                    <path
                                      fillRule="evenodd"
                                      d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="font-medium text-gray-900">
                                    2.7k
                                  </span>
                                  <span className="sr-only">views</span>
                                </button>
                              </span>
                            </div>
                            <div className="flex text-sm">
                              <span className="inline-flex items-center text-sm">
                                <button
                                  type="button"
                                  className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                >
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z" />
                                  </svg>
                                  <span className="font-medium text-gray-900">
                                    Share
                                  </span>
                                </button>
                              </span>
                            </div>
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
