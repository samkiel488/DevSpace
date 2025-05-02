export default function AboutUsHeading() {
  return (
    <section className="body-font dark:bg-slate-800 text-black dark:text-white">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            alt="hero"
            src="http://devspace.ct.ws/images/aboutus1.jpg"
            style={{ height: "400px" }}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-black dark:text-white">
            About <span className="text-blue-500">D3V++ Group</span>
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            Welcome to <span className="font-semibold">D3V++</span>, a
            passionate team of developers, designers, and innovators committed
            to building cutting-edge technology solutions. With expertise in
            software development, cybersecurity, web development, and UI/UX
            design, we strive to create seamless digital experiences that
            empower businesses and individuals alike.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="ml-4 inline-flex text-blue-500 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
