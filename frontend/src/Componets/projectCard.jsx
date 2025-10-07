export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-y-2 justify-center bg-gray-200 rounded-xl">
      <div className="flex flex-col relative w-full">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-[250px] object-cover w-full rounded-t-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute text-white bottom-3 left-3">
          <h1 className="text-2xl font-semibold">Hello World</h1>
        </div>
      </div>
      <div className="px-4 py-2">
        <p className="font-[350]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          nulla, nemo rerum culpa perferendis deleniti ea neque ipsum saepe.
          Tempore corporis blanditiis dicta obcaecati est explicabo aperiam
          animi tenetur necessitatibus.
        </p>
      </div>
      <div className="px-4 mb-2 flex gap-x-5">
        <a className="light-button cursor-pointer font-semibold">View Code</a>
        <a className="dark-button cursor-pointer font-semibold">Preview</a>
      </div>
      <div className="flex px-4 mb-2">
        <div className="flex gap-x-2 justify-center items-center">
          <img
            src="/images/blank-profile-picture-973460_960_720.webp"
            alt={`Profile Picture`}
            className="h-10 w-10 rounded-full border-1 border-black"
          />
          <div className="flex flex-col">
            <h1 className="font-semibold">Areo Ayomide Philip</h1>
            <p className="text-sm">
              {new Date().toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
