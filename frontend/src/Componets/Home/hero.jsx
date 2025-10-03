export default function Hero() {
  return (
    <div className="relative bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat h-[400px] sm:h-[500px] flex justify-center items-center">
      <main className="relative isolate px-6 pt-12 pb-20 lg:px-8 text-white text-center z-10">
        <div className="mx-auto max-w-3xl pt-10">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-6xl">
            Welcome to D3V++ Group
          </h1>
          <h1 className="text-2l pt-5 tracking-tight font-medium text-white sm:text-2xl">
            A space where young devs grow, connect, and build cool stuff
          </h1>

          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="/login"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
            >
              Get started
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
