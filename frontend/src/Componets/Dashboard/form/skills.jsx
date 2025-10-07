import { Plus } from "lucide-react";
import { useState } from "react";
import { useRouteLoaderData } from "react-router";
export default function Skills() {
  const { profile } = useRouteLoaderData("profile");

  const [userSkills, setUserSkills] = useState(profile?.skills || []);
  const [inputedSkill, setInputedSkill] = useState("");
  return (
    <div className="mb-5 pt-3">
      <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
        <div className="flex justify-between">
          <h1>Skills</h1>
          <span
            className="dark-rounded-button"
            onClick={() => {
              if (inputedSkill.trim() !== "") {
                setUserSkills((prev) => {
                  return [...prev, inputedSkill];
                });
              }
              setInputedSkill("");
            }}
          >
            <Plus />
          </span>
        </div>
      </label>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <input
              type="text"
              name="userSkill"
              id="skill"
              placeholder="Enter your Skills"
              value={inputedSkill}
              onChange={(e) => {
                setInputedSkill(e.target.value);
              }}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          {userSkills.length !== 0 &&
            userSkills.map((skills, idx) => {
              return (
                <div className="mb-5" key={idx}>
                  <input
                    key={idx}
                    type="text"
                    name="skills[]"
                    value={skills}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
                    readOnly
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
