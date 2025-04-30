import Form from "../Componets/Contact/form";
import Footer from "../Componets/footer";
import Header from "../Componets/header";
import { useState } from "react";
import Toggle from "../Componets/toggle";

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <Header colorLightMode="black" colorDarkMode="black" />
      <Form />
      <Footer />
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
