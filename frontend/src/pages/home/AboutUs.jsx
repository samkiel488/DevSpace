import AboutUsHeading from "../../Componets/AboutUs/aboutUsHeading";
import Mission from "../../Componets/AboutUs/mission";
import WhyChooseUs from "../../Componets/AboutUs/whyChooseUs";

export default function AboutUs() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about-us.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            About D3V++ Group
          </h1>
          <p className="text-lg text-white mb-8">
            Discover amazing features and services that await you.
          </p>
        </div>
      </div>
      <AboutUsHeading />
      <Mission />
      <WhyChooseUs />
    </>
  );
}
