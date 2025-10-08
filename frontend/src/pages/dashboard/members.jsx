/* eslint-disable no-unused-vars */
import { toast } from "react-toastify";
import MemberCard from "../../Componets/Dashboard/members/memberCard";
import { useLoaderData } from "react-router";
import { useState } from "react";

export default function Members() {
  const { profile } = useLoaderData();
  const [userProfile, setUserProfile] = useState(profile);
  console.log(userProfile);

  return (
    <section className="py-10 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4 gap-y-10 dark:bg-slate-800">
      {userProfile.map(
        ({ bio, role, _id, user: { username, profilePic, name } }, idx) => {
          return (
            <MemberCard
              key={idx}
              bio={bio}
              role={role}
              _id={_id}
              username={username}
              profilePic={profilePic}
              name={name}
            />
          );
        }
      )}
    </section>
  );
}

export async function MemberLoader() {
  try {
    const request = await fetch("http://localhost:3000/profile", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      credentials: "include",
    });

    const response = await request.json();
    console.log(response);

    if (!response.success && !request.ok) {
      return toast.error(response.error);
    }

    return response.data;
  } catch (err) {
    console.log(err);
  }
}
