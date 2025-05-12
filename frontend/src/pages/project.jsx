import Footer from "../Componets/footer";
import Header from "../Componets/header";
import OurProject from "../Componets/Projects/ourProject";
import Toggle from "../Componets/toggle";
import useLocalStorage from "use-local-storage";
export default function Project() {
  const prefences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", prefences);
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <Header colorLightMode="black" colorDarkMode="black" />
      <OurProject />
      <Footer />
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
