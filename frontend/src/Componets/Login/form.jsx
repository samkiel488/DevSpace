import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
export default function LoginForm() {
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 py-8 px-4 shadow-xl rounded-xl sm:px-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Welcome Back
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Please sign in to your account
        </p>
      </div>

      <Form className="space-y-6" method="post">
        <div>
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="emailAddress"
            placeholder="Input your Email Address"
            className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="password"
          >
            Password
          </label>
          <div className="mt-1 relative">
            <input
              type={viewPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Input your Password"
              className="block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none"
              required
            />
            <div
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
              onClick={() => {
                setViewPassword(!viewPassword);
              }}
            >
              {viewPassword ? <EyeClosed /> : <Eye />}
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Sign In"
          className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-xl shadow-sm text-sm sm:text-base font-medium text-white bg-teal-600 hover:bg-teal-700 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 hover:cursor-pointer"
        />
      </Form>

      <div className="mt-6 text-center space-y-2">
        <a
          href="#"
          className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
        >
          Forgot password?
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
          >
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
}

export async function LoginFormAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("emailAddress");
  const password = formData.get("password");

  try {
    const req = await fetch("http://localhost:3000/auth/signin", {
      method: "post",
      body: JSON.stringify({ email, password }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await req.json();
    if (!response.success) {
      return toast.error(response.error);
    }
    return redirect("/feeds");
  } catch (err) {
    console.log(err.message);
    return toast.error("Network Error");
  }
}

export async function LoginLoader() {
  try {
    const request = await fetch("http://localhost:3000/auth/loggedIn", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      credentials: "include",
    });

    const response = await request.json();
    if (!response.success && !request.ok) {
      return;
    }

    return redirect("/feeds");
  } catch (err) {
    console.log(err);
  }
}
