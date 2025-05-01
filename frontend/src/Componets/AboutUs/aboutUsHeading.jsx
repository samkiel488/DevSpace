export default function AboutUsHeading() {
  return (
    <section class=" body-font dark:bg-slate-800 text-black dark:text-white">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="http://devspace.ct.ws/images/aboutus1.jpg"
            style={{ height: "400px" }}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black dark:text-white">
            About <span className="text-blue-500">D3V++ Group</span>
          </h1>
          <p class="mb-8 leading-relaxed">
            Welcome to D3V++, a passionate team of developers, designers, and
            innovators committed to building cutting-edge technology solutions.
            With expertise in software development, cybersecurity, web
            development and UI/UX design, we strive to create seamless digital
            experiences that empower businesses and individuals alike.
          </p>
        </div>
      </div>
    </section>
  );
}
//  <div className="sm:flex items-center max-w-screen-xl bg-white  dark:bg-slate-800 text-black dark:text-white">
//       <div className="sm:w-1/2 p-10">
//         <div className="image object-center text-center">
//           <img
//             src="http://devspace.ct.ws/images/aboutus1.jpg"
//             className=" rounded-2xl"
//             style={{ height: "350px" }}
//           />
//         </div>
//       </div>
//       <div className="sm:w-1/2 p-5">
//         <div className="text">
//           <span className="text-black dark:text-white border-b-2 border-blue-500 font uppercase">
//             About us
//           </span>
//           <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
//             About <span className="text-blue-500">D3V++ Group</span>
//           </h2>
//           <p className="text-black dark:text-white">
//             Welcome to D3V++, a passionate team of developers, designers, and
//             innovators committed to building cutting-edge technology solutions.
//             With expertise in software development, cybersecurity, web
//             development and UI/UX design, we strive to create seamless digital
//             experiences that empower businesses and individuals alike.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
