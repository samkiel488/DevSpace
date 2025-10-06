import { Github, Twitter } from "lucide-react";

export default function Profile() {
  return (
    <>
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full relative">
          <img
            src="/images/hero-bg.jpg"
            alt="hero"
            className="h-60 w-full object-cover"
          />
          <div className="absolute -bottom-10 left-1/2 sm:-bottom-20 sm:left-10 flex transform -translate-x-1/2 sm:translate-0">
            <img
              src="/images/Members/APE.jpg"
              alt={`Profile Picture for Ape`}
              className="h-25 w-25 sm:w-35 sm:h-35 object-cover rounded-full"
            />
          </div>
        </div>
        <div className="mt-10 p-2 md:mt-0 md:pl-47">
          <div className="flex w-full px-2 flex-col sm:flex-row">
            <div className="flex flex-col flex-wrap items-center w-full sm:items-start">
              <h1 className="text-2xl font-semibold">Areo Ayomide Philip</h1>
              <p className="font-[350]">Frontend Developer</p>
            </div>
            <div className="flex justify-center sm:justify-end-safe gap-3 p-2">
              <button className="dark-button">
                <Twitter />
              </button>
              <button className="dark-button">
                <Github />
              </button>
            </div>
          </div>
        </div>
        <div className="px-3 sm:px-10 py-3">
          <div className="grid grid-cols-1  sm:grid-cols-[30%_70%] gap-4  mb-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 bg-gray-100 p-3 rounded-xl">
                <h1 className="text-lg font-semibold">Skills</h1>
                <div className="flex gap-3 flex-wrap">
                  <div className="bg-green-500 p-1 px-3 rounded-xl text-sm">
                    Frontend Developer
                  </div>
                  <div className="bg-green-500 p-1 px-3 rounded-xl text-sm">
                    Backend Developer
                  </div>
                  <div className="bg-green-500 p-1 px-3 rounded-xl text-sm">
                    Fullstack Developer
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 bg-gray-100 p-3 rounded-xl">
                <h1 className="text-lg font-semibold">Tools</h1>
                <div className="flex gap-3 flex-wrap">
                  <div className="bg-green-500 p-1 px-3 rounded-xl text-sm">
                    Next Js
                  </div>
                  <div className="bg-green-500 p-1 px-3 rounded-xl text-sm">
                    Tailwindcss
                  </div>
                  <div className="bg-green-500 p-1 px-3 rounded-xl text-sm">
                    React
                  </div>
                  <div className="bg-green-500 p-1 px-3 rounded-xl text-sm">
                    Node Js
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-gray-100 p-3 rounded-xl gap-2">
              <h1 className="text-lg font-semibold">About Me</h1>
              <p className="font-[400] px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                quasi perspiciatis doloremque ipsa vel fuga veniam rerum dolor
                exercitationem? Illo, sunt nemo? Voluptatum tenetur illo
                explicabo quasi vel adipisci commodi amet assumenda inventore
                tempore! Earum voluptatum ab veniam, adipisci possimus
                cupiditate aperiam odit id nobis facere, minus fugit ducimus
                repudiandae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
