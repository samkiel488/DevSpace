import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
export default function RegisterForm() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 p-3 sm:px-6 lg:px-8 bg-[url('/images/background-image.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white  py-8 px-4 shadow-lg rounded-2xl sm:rounded-lg sm:px-10">
          <h1 className="text-2xl font-bold text-center text-black dark:text-black mb-2">
            Create a DevSpace Account
          </h1>
          <p className="text-center text-md font-light mb-5">
            We are happy to have you onboard
          </p>

          <Form method="post" className="w-full flex flex-col gap-4">
            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="name"
                className="text-sm text-black dark:text-black mr-2"
              >
                First Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Input your Fullname"
                className="w-full px-3 dark:text-black  py-2 rounded-md border border-gray-300 dark:border-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
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
                placeholder="Input your Favourite Nickname"
                className="w-full px-3 dark:text-black  py-2 rounded-md border border-gray-300 dark:border-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
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
                placeholder="Input your Email Address"
                className="w-full px-3 dark:text-black  py-2 rounded-md border border-gray-300 dark:border-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm text-black dark:text-black mr-2"
                htmlFor="password"
              >
                Password:
              </label>
              <div className="mt-1 mb-5 relative">
                <input
                  id="password"
                  name="password"
                  placeholder="Input your Password"
                  className="block w-full px-3 dark:text-black  py-2 rounded-md border border-gray-300 dark:border-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <input
              type="submit"
              value="Register"
              className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
            />
          </Form>

          <div className="mt-4 text-center">
            <span className="text-sm text-gray-800 dark:text-gray-800">
              Already have an account?
            </span>{" "}
            <a href="/login" className="text-blue-700 hover:text-blue-600">
              Login
            </a>
          </div>
        </div>
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
      console.log(response);
      return toast.error(response.error);
    }

    return redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
}
