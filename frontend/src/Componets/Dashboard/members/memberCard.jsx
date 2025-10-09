import { Share } from "lucide-react";
import copyToClipboard from "../../../libs/copyLinktoClipboard";

export default function MemberCard({
  bio,
  role,
  _id,
  username,
  profilePic,
  name,
}) {
  return (
    <div className="flex justify-center">
      <div className="flex bg-slate-300 dark:bg-slate-700 dark:text-white gap-2 rounded-xl flex-col">
        <div className="flex flex-col">
          <img
            src={
              profilePic
                ? profilePic
                : "/images/blank-profile-picture-973460_960_720.webp"
            }
            alt={`Profile Picture of ${name}`}
            className="h-[200px] w-full object-cover rounded-t-xl"
          />
        </div>
        <div className="flex flex-col gap-y-2 px-3 pb-2">
          <div className="flex flex-col md:flex-row justify-between gap-y-3 items-center">
            <div className="flex flex-col ">
              <h1 className="font-semibold text-[20px]">{name}</h1>
              <span className="text-sm font-[350] text-center md:text-left">
                {username}
              </span>
            </div>
            <button
              type="button"
              className="dark-rounded-button"
              onClick={() => {
                copyToClipboard({ path: `share/${_id}` });
              }}
            >
              <Share />
            </button>
          </div>
          <p className=" font-[350]">{bio ? bio : "No Bio yet!"}</p>
          <div className="flex flex-col md:flex-row gap-y-5 justify-between items-center">
            <a className="bg-green-800 px-2 py-1 text-sm rounded-xl text-white text-center cursor-pointer hover:text-green-800 hover:bg-white border-1">
              {role}
            </a>
            <a className="dark-button cursor-pointer" href={`/profile/${_id}`}>
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
