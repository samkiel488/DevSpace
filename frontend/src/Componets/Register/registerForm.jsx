import React, { useState } from "react";
import { Form, useActionData, useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeClosed, Loader2, User, Mail, Lock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
export default function RegisterForm() {
  const [viewPassword, setViewPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const actionData = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  React.useEffect(() => {
    if (actionData?.success) {
      setShowSuccess(true);
      toast.success("Account created successfully! Redirecting to login...");
      const timer = setTimeout(() => {
        navigate("/login");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [actionData, navigate]);

  const validateForm = (formData) => {
    const newErrors = {};
    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!name || name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!username || username.trim().length < 2) {
      newErrors.username = "Username must be at least 2 characters";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password || password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword || confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    if (!validateForm(formData)) {
      e.preventDefault();
      return;
    }
  };
  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 py-8 px-4 shadow-xl rounded-xl sm:px-10">
      {showSuccess ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Account Created!</h2>
          <p className="text-gray-600 dark:text-gray-300">Redirecting to login...</p>
        </motion.div>
      ) : (
        <>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Create a DevSpace Account
            </h1>
            <p className="text-md font-light text-gray-600 dark:text-gray-300">
              We are happy to have you onboard
            </p>
          </div>

          <Form method="post" onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="name"
                className="text-sm text-gray-900 dark:text-white flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                Fullname:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Input your Fullname"
                className={`w-full px-3 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 dark:border-gray-600 focus:ring-teal-500"
                }`}
                required
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
              )}
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="username"
                className="text-sm text-gray-900 dark:text-white flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Input your Favourite Nickname"
                className={`w-full px-3 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.username
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 dark:border-gray-600 focus:ring-teal-500"
                }`}
                required
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.username}</p>
              )}
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="email"
                className="text-sm text-gray-900 dark:text-white flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Input your Email Address"
                className={`w-full px-3 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 dark:border-gray-600 focus:ring-teal-500"
                }`}
                required
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm text-gray-900 dark:text-white flex items-center gap-2"
                htmlFor="password"
              >
                <Lock className="h-4 w-4" />
                Password:
              </label>
              <div className="mt-1 mb-5 relative">
                <input
                  id="password"
                  name="password"
                  type={viewPassword ? "text" : "password"}
                  placeholder="Input your Password"
                  className={`block w-full px-3 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 pr-10 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600 focus:ring-teal-500"
                  }`}
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  className="absolute right-2 transform top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
                  onClick={() => {
                    setViewPassword(!viewPassword);
                  }}
                >
                  {viewPassword ? <EyeClosed className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm text-gray-900 dark:text-white flex items-center gap-2"
                htmlFor="confirmPassword"
              >
                <Lock className="h-4 w-4" />
                Confirm Password:
              </label>
              <div className="mt-1 mb-5 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={viewPassword ? "text" : "password"}
                  placeholder="Confirm your Password"
                  className={`block w-full px-3 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 pr-10 ${
                    errors.confirmPassword
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600 focus:ring-teal-500"
                  }`}
                  required
                  disabled={isSubmitting}
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm sm:text-base font-medium text-white bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 hover:cursor-pointer disabled:cursor-not-allowed"
            >
              {isSubmitting && <Loader2 className="animate-spin h-5 w-5" />}
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>

          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?
            </span>{" "}
            <a href="/login" className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300">
              Login
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export async function RegisterFormAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const name = formData.get("name");
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    const req = await fetch("http://localhost:3000/auth/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, username, password, name }),
      method: "post",
    });

    const response = await req.json();
    if (!response.success) {
      let errorMessage = response.error;
      if (errorMessage === "User already exists") {
        errorMessage = "This email is already registered.";
      } else if (errorMessage === "Username has been used") {
        errorMessage = "This username is already taken.";
      }
      return toast.error(errorMessage);
    }

    return { success: true };
  } catch (err) {
    console.log(err);
    return toast.error("Unable to create account. Please try again.");
  }
}
