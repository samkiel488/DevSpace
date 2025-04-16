import Footer from "../componet/footer";
import Header from "../componet/header";
import Form from "../componet/Login/form";
import Toggle from "../componet/toggle";
import { useState } from "react";
export default function Login() {
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
