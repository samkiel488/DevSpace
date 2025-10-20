import LoginForm from "../../Componets/Login/form";
import { useState, useEffect } from "react";
import { Loader } from "lucide-react";

export default function Login() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin text-blue-500 h-10 w-10" />
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Hero Image Section */}
      <div
        className="lg:w-1/2 h-64 lg:h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Floating Icons */}
        <div className="absolute top-10 left-10 text-white opacity-70">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <div className="absolute top-20 right-10 text-white opacity-70">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>
        <div className="absolute bottom-20 left-20 text-white opacity-70">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <div className="absolute bottom-10 right-20 text-white opacity-70">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
        </div>
        <div className="relative text-white text-center p-8 z-10">
          <h2 className="text-3xl font-bold mb-4">Welcome Back to DevSpace</h2>
          <p className="text-lg">Sign in to continue your journey with us.</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 min-h-screen flex flex-col justify-center items-center bg-gray-900 p-4">
        <LoginForm />
      </div>
    </div>
  );
}
