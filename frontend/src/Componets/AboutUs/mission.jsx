export default function Mission() {
  return (
    <section className="text-black body-font bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 dark:text-white">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-black dark:text-white">
            OUR MISSION
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            Our mission is to empower organizations and users with seamless,
            efficient, and scalable technology solutions. We believe in
            harnessing the power of modern software, AI, and cloud computing to
            create smarter and more efficient digital experiences. Through
            continuous innovation, we strive to bridge the gap between
            businesses and technology, ensuring that our solutions are not only
            effective but also future-proof.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg shadow-lg"
            alt="hero"
            src="http://devspace.ct.ws/images/aboutus3.jpeg"
            style={{ height: "400px" }}
          />
        </div>
      </div>
    </section>
  );
}
