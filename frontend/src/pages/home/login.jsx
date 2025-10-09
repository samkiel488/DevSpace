import LoginForm from "../../Componets/Login/form";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Hero Image Section */}
      <div
        className="lg:w-1/2 h-64 lg:h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-white text-center p-8">
          <h2 className="text-3xl font-bold mb-4">Welcome Back to DevSpace</h2>
          <p className="text-lg">Sign in to continue your journey with us.</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 flex items-center justify-center p-4 bg-white dark:bg-gray-900">
        <LoginForm />
      </div>
    </div>
  );
}
