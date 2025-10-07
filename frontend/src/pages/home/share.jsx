import { Github, Instagram, Link, Linkedin, Twitter } from "lucide-react";
import { useLoaderData } from "react-router";

export default function Share() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="flex justify-center items-center">
      {data?.success ? (
        <div className="flex w-[500px] bg-gray-200 rounded-xl pb-3 flex-col my-10 mx-5">
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
            <a
              href={data?.data?.profile?.twitter}
              className="dark-rounded-button"
            >
              <Twitter />
            </a>
            <a
              href={data?.data?.profile?.github}
              className="dark-rounded-button"
            >
              <Github />
            </a>
            <a
              href={data?.data?.profile?.linkedin}
              className="dark-rounded-button"
            >
              <Linkedin />
            </a>
            <a
              href={data?.data?.profile?.instagram}
              className="dark-rounded-button"
            >
              <Instagram />
            </a>
            <a
              href={data?.data?.profile?.portfolio}
              className="dark-rounded-button"
            >
              <Link />
            </a>
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start px-4 mb-3">
            <div className="flex items-center gap-1 sm:flex-row flex-col">
              <h1 className="text-[20px] md:text-2xl font-semibold">
                {data?.data?.profile?.user?.name}
              </h1>
              <p className="text-sm">( {data?.data?.profile?.role})</p>
            </div>
            <div className="flex">
              <p className="font-[400]">
                {data?.data?.profile?.user?.username}
              </p>
            </div>
          </div>
          <div className="flex flex-col px-4 mb-3">
            <p className="font-light">{data?.data?.profile?.bio}</p>
          </div>
          <div className="flex flex-col px-4 gap-2 mb-3">
            <h1 className="font-semibold text-xl">Skills</h1>
            <div className="flex gap-3 flex-wrap">
              {data?.data?.profile?.skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="bg-green-500 p-1 px-3 rounded-xl text-sm"
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col px-4 gap-2">
            <h1 className="font-semibold text-xl">Tools</h1>
            <div className="flex gap-3 flex-wrap">
              {data?.data?.profile?.tools.map((tool, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-blue-400 p-1 px-3 rounded-xl text-sm"
                  >
                    {tool}
                  </div>
                );
              })}
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
      ) : (
        <div className="flex h-[70vh] bg-slate-800 text-white w-full justify-center flex-col items-center text-center">
          <h1 className="text-2xl">{data?.error}</h1>
          <p>The user you are looking for dosent exist</p>
        </div>
      )}
    </div>
  );
}

export async function ShareLoader({ params }) {
  const { id } = params;
  try {
    const request = await fetch(`http://localhost:3000/profile/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}
