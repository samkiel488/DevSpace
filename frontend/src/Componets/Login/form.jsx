import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form() {
  var [showPassword, setShowPassword] = useState(false);
  var [inputedEmailAddress, setInputedEmailAddress] = useState("");
  var [name, setName] = useState("");
  var [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  const getName = async () => {
    if (!inputedEmailAddress || !/\S+@\S+\.\S+/.test(inputedEmailAddress)) {
      setAlertMessage("Please enter a valid Gmail address.");
      return;
    }

    try {
      const response = await axios.get(`${apiUrl}/auth/${inputedEmailAddress}`);

      if (response.data.foundUser) {
        setName(response.data.foundUser);
        setAlertMessage("");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setName("");
        setAlertMessage("No user found with this email address.");
      } else {
        setName("");
        setAlertMessage(
          "There was an error fetching user data. Please try again."
        );
      }
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/verify`, {
        emailAddress: inputedEmailAddress,
        password: password,
      });
      if (response.data.success) {
        setAlertMessage("Authentication Successful! Redirecting...");
        setTimeout(() => {
          navigate(`/${name.userName}/home`, {
            state: { userName: name.userName, isUserLoggedIn: true },
          });
        }, 3000);
      } else {
        setAlertMessage("Incorrect password. Please try again.");
      }
    } catch (error) {
      console.log(error);

      setAlertMessage(
        "There was an error verifying your credentials. Please try again."
      );
    }
  }

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setInputedEmailAddress(email);
  };

  const handleEmailBlur = () => {
    if (!inputedEmailAddress || !/\S+@\S+\.\S+/.test(inputedEmailAddress)) {
      setAlertMessage("Please enter a valid Gmail address.");
    } else {
      setAlertMessage(""); // Clear the error if valid email is entered
      getName();
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setAlertMessage("");
    }
  };

  // Close the alert message
  const closeAlert = () => {
    setAlertMessage(""); // Clear the alert message
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 pl-10 pr-10 sm:px-6 lg:px-8 bg-[url('/images/background-image.jpg')]  bg-cover bg-center bg-no-repeat">
      {alertMessage && (
        <div
          className={`fixed top-4 right-4 p-4 text-white rounded-lg shadow-lg max-w-xs w-full ${
            alertMessage.includes("Success") ? "bg-green-500" : "bg-red-500"
          }`}
          style={{ zIndex: 9999 }}
        >
          <div className="flex justify-between items-center">
            <p>{alertMessage}</p>
            <button onClick={closeAlert} className="text-white ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-200 py-8 px-4 shadow-lg rounded-2xl sm:rounded-lg sm:px-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              {name
                ? `Welcome back, ${name.fName} ${name.lName}`
                : "Welcome Back to DevSpace"}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-black">
              {name
                ? "Please sign in to your account"
                : "Do you have an account here?"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-black"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="emailAddress"
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                value={inputedEmailAddress}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-black"
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
                  value={password}
                  onChange={handlePasswordChange}
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

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-black"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                Forgot password?
              </a>
            </div>

            <input
              type="submit"
              value="Sign In"
              className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:cursor-pointer"
            />
          </form>

          <p className="mt-6 text-center text-sm">
            Don't have an account?
            <a
              href="/register"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
