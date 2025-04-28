export default function AboutUsHeading() {
  return (
    <div className="sm:flex items-center max-w-screen-xl bg-white  dark:bg-slate-800 text-black dark:text-white">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img
            src="http://devspace.ct.ws/images/aboutus1.jpg"
            className=" rounded-2xl"
            style={{ height: "350px" }}
          />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-black dark:text-white border-b-2 border-blue-500 font uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span className="text-blue-500">D3V++ Group</span>
          </h2>
          <p className="text-black dark:text-white">
            Welcome to D3V++, a passionate team of developers, designers, and
            innovators committed to building cutting-edge technology solutions.
            With expertise in software development, cybersecurity, web
            development and UI/UX design, we strive to create seamless digital
            experiences that empower businesses and individuals alike.
          </p>
        </div>
      </div>
    </div>
  );
}
