import React from "react";

export default function RegisterForm() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 pl-10 pr-10 sm:px-6 lg:px-8 bg-[url('/images/background-image.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-black py-8 px-4 shadow-lg rounded-2xl sm:rounded-lg sm:px-10">
          <h1 className="text-xl font-bold text-center text-black dark:text-black mb-8">
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

            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="password"
                className="text-sm text-black dark:text-black mr-2"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 dark:text-black dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="confirmPassword"
                className="text-sm text-black dark:text-black mr-2"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-3 dark:text-black dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-black focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
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
