import { redirect, useLoaderData } from "react-router";

export default function FeedsId() {
  const { feed } = useLoaderData();
  console.log(feed);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 dark:text-white flex flex-col items-center-safe gap-y-5">
      <h1 className="text-3xl text-center">Having Problem with Next js</h1>
      <div className="flex justify-center items-center w-full">
        <img
          src="/images/background-image.jpg"
          alt="background image"
          className="w-[80%]  h-[500px] object-cover rounded-2xl"
        />
      </div>
      <div className="flex w-full flex-col md:flex-row justify-center items-center-safe">
        <div className="flex gap-x-3 justify-center items-center">
          <img
            src="/images/blank-profile-picture-973460_960_720.webp"
            alt="Profile Picture"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="font-[700]">Areo Ayomide Philip</p>
        </div>
        <hr className="hidden md:block border-1 h-[20px] mx-3" />
        <div>
          <p>
            {new Date().toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      
    </div>
  );
}

export async function FeedsIdLoader({ params }) {
  const { id } = params;

  try {
    const request = await fetch(`http://localhost:3000/api/feeds/${id}`, {
      method: "GET",
      credentials: "include",
    });
    const response = await request.json();
    if (!response.success) {
      return redirect("/feeds");
    }
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
