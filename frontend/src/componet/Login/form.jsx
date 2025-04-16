export default function Form() {
  return (
    <div class="min-h-screen bg-white  flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[url('/images/hero-bg.jpeg')] bg-cover bg-center bg-no-repeat">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white dark:bg-gray-200 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <div class="text-center mb-8">
            <h2 class="text-2xl sm:text-3xl font-bold text-black">
              Welcome Back to DevSpace
            </h2>
            <p class="mt-2 text-sm sm:text-base text-black">
              Please sign in to your account
            </p>
          </div>

          <form class="space-y-6">
            <div>
              <label
                class="block text-sm font-medium text-gray-700"
                for="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                class="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>

            <div>
              <label
                class="block text-sm font-medium text-gray-700"
                for="password"
              >
                Password
              </label>
              <div class="mt-1 relative">
                <input
                  type="password"
                  id="password"
                  class="block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                  required
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <svg
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  class="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label for="remember" class="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" class="text-sm text-red-600 hover:text-red-700">
                Forgot password?
              </a>
            </div>

            <input
              type="submit"
              value="Sign In"
              className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:cursor-pointer"
            />
          </form>

          <p class="mt-6 text-center text-sm">
            Don't have an account?
            <a href="#" class="font-medium text-red-600 hover:text-red-700">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
