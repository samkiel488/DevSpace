export default function AboutUs() {
  return (
    <div className="overflow-hidden bg-white  dark:bg-slate-800 text-black dark:text-white py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                About D3V++ Group
              </p>
              <p className="mt-6 text-lg/8">
                D3V++ Group is a growing community of young developers
                passionate about coding, creativity, and connection. We're
                building a space where devs at all levels can learn, grow, and
                collaborate on real-world projects that matter. From coding
                challenges and group projects to mentorship and networking, we
                focus on helping each other level up—together. Whether you're
                into front-end, back-end, mobile, or just starting out, there's
                a place for you here. This is more than a tech group. It's a
                launchpad for future innovators.Welcome to D3V++ Group—let’s
                build something awesome.
              </p>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="/images/aboutUs-bg.jpeg"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
