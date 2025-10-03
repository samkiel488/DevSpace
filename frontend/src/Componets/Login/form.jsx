import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
export default function LoginForm() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 p-3 sm:px-6 lg:px-8 bg-[url('/images/background-image.jpg')]  bg-cover bg-center bg-no-repeat">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white  py-8 px-4 shadow-lg rounded-2xl sm:rounded-lg sm:px-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm sm:text-base text-black">
              {name
                ? "Please sign in to your account"
                : "Do you have an account here?"}
            </p>
          </div>

          <Form className="space-y-6" method="post">
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
                  type="password"
                  id="password"
                  name="password"
                  className="block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                  required
                />
              </div>
            </div>

            <input
              type="submit"
              value="Sign In"
              className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:cursor-pointer"
            />
          </Form>

          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
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
    return redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
}
