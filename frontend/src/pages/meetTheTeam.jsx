import Banner from "../Componets/banner";
import Footer from "../Componets/footer";
import Header from "../Componets/header";
import OurTeamProfiles from "../Componets/MeetTheTeam/ourTeamProfile";
import Toggle from "../Componets/toggle";
import { useState } from "react";
export default function MeetTheTeam() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <Header colorLightMode="black" colorDarkMode="black" />
      <Banner
        heading="Meet The Team of D3V++"
        subHeading="Check out our teams of Developers."
      />
      <OurTeamProfiles/>
      <Footer />
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
