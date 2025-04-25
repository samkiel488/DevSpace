import AboutUsHeading from "../Componets/AboutUs/aboutUsHeading";
import Footer from "../Componets/footer";
import Header from "../Componets/header";
import Toggle from "../Componets/toggle";
import { useState } from "react";

export default function AboutUs() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <Header colorLightMode="black" colorDarkMode="black" />
      <AboutUsHeading />
      <Footer />
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
