import React from "react";
import { useState } from "react";
export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 pl-10 pr-10 sm:px-6 lg:px-8 bg-[url('/images/background-image.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-black py-8 px-4 shadow-lg rounded-2xl sm:rounded-lg sm:px-10">
          <h1 className="text-2xl font-bold text-center text-black dark:text-black mb-8">
            Create a DevSpace Account
          </h1>

          <form action="#" className="w-full flex flex-col gap-4">
            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="firstName"
                className="text-sm text-black dark:text-black mr-2"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-3 dark:text-black dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="lastName"
                className="text-sm text-black dark:text-black mr-2"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-3 dark:text-black dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="phoneNumber"
                className="text-sm text-black dark:text-black mr-2 mb-1"
              >
                Phone Number:
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-black dark:bg-gray-900 dark:text-black focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
              />
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="username"
                className="text-sm text-black dark:text-black mr-2"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 dark:text-black dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="email"
                className="text-sm text-black dark:text-black mr-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 dark:text-black dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                className="block text-sm text-black dark:text-black mr-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div>
              <label
                className="block text-sm text-black dark:text-black mr-2"
                htmlFor="password"
              >
                Confirm Password:
              </label>
              <div className="mt-1 relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showPassword)}
                >
                  {showConfirmPassword ? (
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <input
              type="submit"
              value="Register"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
            />
          </form>

          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Already have an account?
            </span>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
