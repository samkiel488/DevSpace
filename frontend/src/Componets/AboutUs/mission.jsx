export default function Mission() {
  return (
    <section class="text-black body-font bg-gray-200 dark:bg-slate-900 dark:text-white">
      <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black dark:text-white">
            OUR MISSION
          </h1>
          <p class="mb-8 leading-relaxed">
            Our mission is to empower organizations and users with seamless,
            efficient, and scalable technology solutions. We believe in
            harnessing the power of modern software, AI, and cloud computing to
            create smarter and more efficient digital experiences. Through
            continuous innovation, we strive to bridge the gap between
            businesses and technology, ensuring that our solutions are not only
            effective but also future-proof.
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="http://devspace.ct.ws/images/aboutus3.jpeg"
            style={{ height: "400px" }}
          />
        </div>
      </div>
    </section>
  );
}
