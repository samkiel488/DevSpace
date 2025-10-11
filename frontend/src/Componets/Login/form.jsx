import { Form, redirect, useActionData } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeClosed, Loader2, Mail, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import { VITE_API_URL } from "../../config";

export default function LoginForm() {
  const [viewPassword, setViewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const actionData = useActionData();

  useEffect(() => {
    if (actionData?.error) {
      toast.error(actionData.error);
      setLoading(false);
    }
  }, [actionData]);

  const validateForm = (formData) => {
    const newErrors = {};
    const email = formData.get("emailAddress");
    const password = formData.get("password");

    if (!email || !email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);
    if (!validateForm(formData)) {
      e.preventDefault();
      return;
    }
    setLoading(true);
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 py-4 px-4 shadow-xl rounded-xl sm:px-10 sm:py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Welcome Back
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Please sign in to your account
        </p>
      </div>

      <Form className="space-y-6" method="post" onSubmit={handleSubmit}>
        <div>
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="email"
          >
            Email Address
          </label>
          <div className="mt-1 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              id="email"
              name="emailAddress"
              placeholder="Input your Email Address"
              className={`block w-full pl-10 pr-3 py-2 sm:px-4 sm:py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
              required
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="password"
          >
            Password
          </label>
          <div className="mt-1 relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type={viewPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Input your Password"
              className={`block w-full pl-10 pr-10 py-2 sm:px-4 sm:py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
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
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center items-center py-2 px-4 sm:py-3 border border-transparent rounded-xl shadow-sm text-sm sm:text-base font-medium text-white bg-teal-600 hover:bg-teal-700 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-teal-400 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2 h-5 w-5" />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </Form>

      <div className="mt-8 text-center space-y-4 px-4">
        <a
          href="#"
          className="block text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 py-2"
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
    const req = await fetch(`${VITE_API_URL}/api/auth/signin`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await req.json();
    if (!response.success) {
      return {
        error:
          response.error === "User does not exists"
            ? "Incorrect email or password."
            : response.error,
      };
    }

    return redirect("/feeds");
  } catch (err) {
    console.log(err.message);
    return { error: "Connection failed. Please check your internet." };
  }
}

export async function LoginLoader() {
  try {
    const request = await fetch(`${VITE_API_URL}/api/auth/loggedIn`, {
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
