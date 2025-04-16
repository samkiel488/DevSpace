import Header from "../Componets/header";
import AboutUs from "../Componets/Home/aboutUs";
import { useState } from "react";
import Toggle from "../Componets/toggle";
import WhatWeDo from "../Componets/Home/whatWeDo";
import Footer from "../Componets/footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <div className="relative bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <Header colorLightMode="transparent" colorDarkMode="transparent" />
        <main className="relative isolate px-6 pt-12 pb-20 lg:px-8 text-white text-center z-10">
          <div className="mx-auto max-w-3xl pt-10">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-6xl">
              Welcome to D3V++ Group
            </h1>
            <h1 className="text-2l pt-5 tracking-tight font-medium text-white sm:text-2xl">
              A space where young devs grow, connect, and build cool stuff
            </h1>
            <p className="mt-8 text-lg tracking-tight font-bold text-white/80 sm:text-xl">
              Whether you're just getting started or leveling up your
              skills,you're in the right place. Collaborate on real projects,
              share ideas, and build a future fueled by code and creativity.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a
                href="./#"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
              >
                Get started
              </a>
            </div>
          </div>
        </main>
      </div>
      <AboutUs />
      <WhatWeDo />
      <Footer />
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
