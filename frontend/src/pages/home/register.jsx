import { useEffect, useState } from "react";
import RegisterForm from "../../Componets/Register/registerForm";

export default function Register() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Hero Image Section */}
      <div
        className={`lg:w-1/2 h-64 lg:h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center overflow-hidden transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Floating Icons with animations */}
        <div className="absolute top-10 left-10 text-white opacity-70 animate-bounce">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div className="absolute top-20 right-10 text-white opacity-70 animate-pulse">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 text-white opacity-70 animate-bounce delay-1000">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-20 text-white opacity-70 animate-pulse delay-500">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
        </div>
        <div className={`relative text-white text-center p-8 z-10 transition-all duration-1000 delay-300 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl font-bold mb-4 hover:text-green-300 transition-colors duration-300">
            Join DevSpace Today
          </h2>
          <p className="text-lg hover:text-green-200 transition-colors duration-300">
            Create your account and start building the future with our community.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className={`lg:w-1/2 flex items-center justify-center p-4 bg-white dark:bg-gray-900 transition-all duration-1000 delay-500 ${
        isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}>
        <RegisterForm />
      </div>
    </div>
  );
}
