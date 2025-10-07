import { Camera } from "lucide-react";
import { useRef } from "react";
import { useLocation, useRouteLoaderData } from "react-router";
import { toast } from "react-toastify";
export default function SettingsBanner() {
  const backgroundPicture = useRef();
  const profilePicture = useRef();
  const { users } = useRouteLoaderData("feeds");
  const { pathname } = useLocation();

  async function handleBackGroundUpload(image) {
    let formData = new FormData();
    formData.append("backgroundPic", image);
    try {
      const request = await fetch(
        "http://localhost:3000/auth/upload/background",
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );

      const data = await request.json();
      if (data.success) {
        toast.success(data.message);
        window.location.reload();
      }
      toast.error(data.error);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleProfilePictureUpload(image) {
    const formData = new FormData();
    formData.append("profilePic", image);

    try {
      const request = await fetch("http://localhost:3000/auth/upload/profile", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const data = await request.json();
      console.log(data);

      if (data.success) {
        toast.success(data.message);
        window.location.reload();
      }
      toast.error(data.error);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="flex w-full relative">
      <div className="flex w-full relative">
        <img
          src={
            users?.backgroundPic ? users?.backgroundPic : "/images/hero-bg.jpg"
          }
          alt="hero"
          className="h-60 w-full object-cover"
        />
        {pathname === "/settings" && (
          <div
            className="absolute dark-rounded-button  right-3 bottom-2"
            onClick={() => {
              backgroundPicture.current.click();
            }}
          >
            <input
              type="file"
              name="background picture"
              ref={backgroundPicture}
              id="backgroundImage"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                handleBackGroundUpload(e.target.files[0]);
              }}
            />
            <Camera />
          </div>
        )}
      </div>
      <div className="absolute -bottom-10 left-1/2 sm:-bottom-20 sm:left-10 flex transform -translate-x-1/2 sm:translate-0">
        <div className="relative">
          <img
            src={
              users?.profilePic
                ? users?.profilePic
                : "/images/blank-profile-picture-973460_960_720.webp"
            }
            alt={`Profile Picture ${users?.name}`}
            className="h-25 w-25 sm:w-35 sm:h-35 object-cover rounded-full"
          />
          {pathname === "/settings" && (
            <div
              className="absolute dark-rounded-button !p-1 right-0 top-18 sm:top-25 sm:right-1.5"
              onClick={() => {
                profilePicture.current.click();
              }}
            >
              <input
                type="file"
                name="profilePicture"
                id="profilePicture"
                ref={profilePicture}
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  handleProfilePictureUpload(e.target.files[0]);
                }}
              />
              <Camera className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
