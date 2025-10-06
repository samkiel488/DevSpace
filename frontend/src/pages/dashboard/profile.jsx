export default function Profile() {
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex w-full relative">
          <img
            src="/images/hero-bg.jpg"
            alt="hero"
            className="h-60 w-full object-cover"
          />
          <div className="absolute -bottom-10 left-1/2 sm:-bottom-20 sm:left-10 flex transform -translate-x-1/2 sm:translate-0">
            <img
              src="/images/Members/APE.jpg"
              alt=""
              className="h-25 w-25 sm:w-35 sm:h-35 object-cover rounded-full"
            />
          </div>
        </div>
        <div className="mt-10 p-2 md:mt-0 md:pl-45">
          <div className="flex">
            <div className="flex flex-col flex-wrap items-center w-full sm:items-start">
              <h1 className="text-2xl">Areo Ayomide Philip</h1>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
