import { Github, Twitter } from "lucide-react";

export default function Share() {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="flex w-[500px] bg-gray-200 rounded-xl">
        <div className="w-full relative flex flex-col gap-2">
          <div className="flex">
            <img
              src="/images/background-image.jpg"
              alt="background-image"
              className="rounded-xl w-full h-40 object-cover "
            />
          </div>
          <div className="flex absolute left-5 top-30 mb-10">
            <img
              src="/images/Members/APE.jpg"
              alt="profile picture"
              className="h-25 w-25 rounded-full object-cover"
            />
          </div>
          <div className="flex justify-end-safe gap-3 p-2">
            <a href="#" className="bg-black p-2 rounded-full">
              <Twitter color="white" />
            </a>
            <a href="#" className="bg-black p-2 rounded-full">
              <Github color="white" />
            </a>
          </div>
          <div className="flex flex-col px-7">
            <div className="flex items-center">
              <h1 className="text-2xl">Areo Ayomide Philip</h1>
              <p className="">(Frontend developer)</p>
            </div>
            <div className="flex">
              <p className="font-light">Anonymous</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
