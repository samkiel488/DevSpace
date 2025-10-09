import { useState } from "react";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeClosed, Loader2 } from "lucide-react";

export default function RegisterForm() {
  const [viewPassword, setViewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !username.trim() || !email.trim() || !password.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!validatePassword(password)) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    setLoading(true);
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
        toast.error(response.error || "Registration failed.");
        setLoading(false);
        return;
      }

      toast.success("Registration successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/feeds";
      }, 2000);
    } catch (err) {
      console.log(err);
      toast.error("Network Error");
      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 py-8 px-4 shadow-xl rounded-xl sm:px-10 animate-slide-up">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Create a DevSpace Account
        </h1>
        <p className="text-md font-light text-gray-600 dark:text-gray-300">
          We are happy to have you onboard
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="name"
            className="text-sm text-gray-900 dark:text-white"
          >
            Fullname:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Input your Fullname"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="username"
            className="text-sm text-gray-900 dark:text-white"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Input your Favourite Nickname"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="email"
            className="text-sm text-gray-900 dark:text-white"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Input your Email Address"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div>
          <label
            className="block text-sm text-gray-900 dark:text-white"
            htmlFor="password"
          >
            Password:
          </label>
          <div className="mt-1 mb-5 relative">
            <input
              id="password"
              name="password"
              type={viewPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Input your Password"
              className="block w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-teal-600 cursor-pointer hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-xl shadow-sm hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              Registering…
            </>
          ) : (
            "Register"
          )}
        </button>
      </form>

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
      return toast.error(response.error);
    }

    return redirect("/feeds");
  } catch (err) {
    console.log(err);
  }
}
