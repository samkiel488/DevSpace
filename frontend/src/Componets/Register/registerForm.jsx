import { useState } from "react";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeClosed, Loader2, Mail, Lock, User } from "lucide-react";

export default function RegisterForm() {
  const [viewPassword, setViewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!name || name.trim().length < 2) {
      newErrors.name = "Full name must be at least 2 characters";
    }

    if (!username || username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!email || !email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
    <div className="w-full max-w-md bg-white dark:bg-gray-800 py-8 px-4 shadow-xl rounded-xl sm:px-10">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Create a DevSpace Account
        </h1>
        <p className="text-md font-light text-gray-600 dark:text-gray-300">
          We are happy to have you onboard
        </p>
      </div>

      <Form method="post" className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="name"
            className="text-sm text-gray-900 dark:text-white"
          >
            Fullname:
          </label>
          <div className="mt-1 relative w-full">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Input your Fullname"
              className={`w-full pl-10 pr-3 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              }`}
              required
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="username"
            className="text-sm text-gray-900 dark:text-white"
          >
            Username:
          </label>
          <div className="mt-1 relative w-full">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Input your Favourite Nickname"
              className={`w-full pl-10 pr-3 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                errors.username ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              }`}
              required
            />
          </div>
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">{errors.username}</p>
          )}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="email"
            className="text-sm text-gray-900 dark:text-white"
          >
            Email:
          </label>
          <div className="mt-1 relative w-full">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Input your Email"
              className={`w-full pl-10 pr-3 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              }`}
              required
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="password"
            className="text-sm text-gray-900 dark:text-white"
          >
            Password:
          </label>
          <div className="mt-1 mb-5 relative w-full">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="password"
              name="password"
              type={viewPassword ? "text" : "password"}
              placeholder="Input your Password"
              className={`block w-full pl-10 pr-10 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                errors.password ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              }`}
              required
            />
            <button
              type="button"
              className="absolute right-2 transform top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
              onClick={() => {
                setViewPassword(!viewPassword);
              }}
            >
              {viewPassword ? <EyeClosed /> : <Eye />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="confirmPassword"
            className="text-sm text-gray-900 dark:text-white"
          >
            Confirm Password:
          </label>
          <div className="mt-1 relative w-full">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your Password"
              className={`block w-full pl-10 pr-3 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              }`}
              required
            />
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-teal-600 cursor-pointer hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-xl shadow-sm hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-teal-400 disabled:cursor-not-allowed disabled:hover:scale-100 flex justify-center items-center"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2 h-5 w-5" />
              Registering...
            </>
          ) : (
            "Register"
          )}
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
      toast.error(response.error === "User already exists" ? "This email is already registered." : response.error);
      return null;
    }

    // Save welcome notifications
    const notifications = [
      {
        id: Date.now(),
        title: `Welcome to the community, ${name}!`,
        message: `We’re excited to have you onboard. Connect with fellow members: `,
        href: "https://chat.whatsapp.com/L1ka7X2eXL9CR8J0sN41kI",
        timestamp: new Date().toISOString(),
        read: false,
      },
      {
        id: Date.now() + 1,
        title: "Complete your account setup",
        message: "Visit your Settings page to complete your details and activate your account.",
        href: "/settings",
        timestamp: new Date().toISOString(),
        read: false,
      },
    ];

    const existing = JSON.parse(localStorage.getItem("notifications")) || [];
    localStorage.setItem("notifications", JSON.stringify([...notifications, ...existing]));

    toast.success("Account created successfully! Redirecting to login...");
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
    return null;
  } catch (err) {
    console.log(err);
    toast.error("Unable to create account. Please try again.");
    return null;
  }
}
