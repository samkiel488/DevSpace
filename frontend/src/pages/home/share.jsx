import { Github, Instagram, Link, Linkedin, Twitter } from "lucide-react";

export default function Share() {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="flex w-[500px] bg-gray-200 rounded-xl pb-3 flex-col">
        <div className="w-full relative flex flex-col gap-2">
          <div className="flex">
            <img
              src="/images/background-image.jpg"
              alt="background-image"
              className="rounded-xl w-full h-45 object-cover "
            />
          </div>
          <div className="flex absolute left-1/2 transform -translate-x-1/2 sm:translate-0 sm:left-5 top-35 mb-10">
            <img
              src="/images/Members/APE.jpg"
              alt="profile picture"
              className="h-25 w-25 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex sm:justify-end-safe justify-center gap-3 p-2 mt-15 sm:mt-0">
          <a href="#" className="dark-button">
            <Twitter />
          </a>
          <a href="#" className="dark-button">
            <Github />
          </a>
          <a href="#" className="dark-button">
            <Linkedin />
          </a>
          <a href="#" className="dark-button">
            <Instagram />
          </a>
          <a href="#" className="dark-button">
            <Link />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center sm:items-start px-4 mb-3">
          <div className="flex items-center gap-1 sm:flex-row flex-col">
            <h1 className="text-[20px] md:text-2xl font-semibold">
              Areo Ayomide Philip
            </h1>
            <p className="text-sm">(Frontend developer)</p>
          </div>
          <div className="flex">
            <p className="font-[400]">Anonymous</p>
          </div>
        </div>
        <div className="flex flex-col px-4">
          <p className="font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam
            cupiditate nemo inventore dolorum, eveniet aspernatur possimus
            voluptatem consectetur omnis laborum molestiae iusto sed voluptas
            dolorem nostrum in. Repellendus, et!
          </p>
        </div>
        <div className="flex flex-col px-4 gap-2">
          <h1 className="font-semibold text-xl">Skills</h1>
          <div className="flex gap-3 flex-wrap">
            <div className="bg-green-500 p-1 px-3 rounded-xl text-sm">
              Graphic Designer
            </div>
            <div className="bg-green-500 p-1 px-3 rounded-xl text-sm">
              Graphic Designer
            </div>
            <div className="bg-green-500 p-1 px-3 rounded-xl text-sm">
              Graphic Designer
            </div>
            <div className="bg-green-500 p-1 px-3 rounded-xl text-sm">
              Graphic Designer
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 gap-2">
          <h1 className="font-semibold text-xl">Tools</h1>
          <div className="flex gap-3 flex-wrap">
            <div className="bg-blue-400 p-1 px-3 rounded-xl text-sm">React</div>
            <div className="bg-blue-400 p-1 px-3 rounded-xl text-sm">
              NodeJs
            </div>
            <div className="bg-blue-400 p-1 px-3 rounded-xl text-sm">
              Tailwindcss
            </div>
            <div className="bg-blue-400 p-1 px-3 rounded-xl text-sm">
              Motion
            </div>
          </div>
        </div>
        <div className="flex px-4 py-2 justify-between mt-2  w-full flex-wrap gap-3">
          <a className="py-3 w-full md:w-1/3  bg-white text-center text-black cursor-pointer rounded-xl border-1 border-black hover:border-white hover:bg-black hover:text-white font-semibold">
            Get in Touch
          </a>
          <a className="px-15 py-3 md:px-7 w-full md:w-1/3  bg-black text-center text-white cursor-pointer rounded-xl border-1 border-white hover:border-black hover:bg-white hover:text-black font-semibold">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}
