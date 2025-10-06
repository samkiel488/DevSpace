import { Github, Twitter } from "lucide-react";

export default function ProfileCard({
  members: { imageurl, description, role, name, githubLink, twitterLink },
}) {
  return (
    <div className="flex flex-col  p-2 rounded-xl  bg-gray-200 dark:text-black dark:bg-white ">
      <div className="flex justify-center items-center">
        <img
          src={`/images/Members/${imageurl}.jpg`}
          alt={`Profile Picture of ${imageurl}`}
          className="w-full h-[300px] object-cover rounded-xl"
        />
      </div>
      <div className="dark:text-black py-3 px-2 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-sm font-light">{role}</p>
        </div>
        <p className=" text-md">{description}</p>
      </div>
      <div className="flex justify-end items-center px-2 mt-3 gap-x-3">
        <div className="flex justify-center items-center ">
          <a
            href={githubLink}
            className="bg-black p-2 rounded-full cursor-pointer"
          >
            <Github color="white" />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href={twitterLink}
            className="bg-black p-2 rounded-full cursor-pointer"
          >
            <Twitter color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}
