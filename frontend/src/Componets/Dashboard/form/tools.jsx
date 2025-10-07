import { Plus, Trash } from "lucide-react";
import { useState } from "react";
import { useRouteLoaderData } from "react-router";
import handleDelete from "../../../libs/handleDelete";
export default function Tools() {
  const { profile } = useRouteLoaderData("profile");
  const [userTools, setUserTools] = useState(profile?.tools || []);
  const [inputedTools, setInputedTools] = useState("");

  // function handleDelete(index) {
  //   setUserTools((prev) => {
  //     return prev.filter((tools) => {
  //       return tools !== userTools[index];
  //     });
  //   });
  // }

  return (
    <div className="mb-5 pt-3">
      <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
        <div className="flex justify-between">
          <h1>Tools</h1>
          <span
            className="dark-rounded-button"
            onClick={() => {
              if (inputedTools !== "") {
                setUserTools((prev) => {
                  return [...prev, inputedTools];
                });
              }
              setInputedTools("");
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
              name="tools"
              id="tools"
              placeholder="Enter tools you use"
              value={inputedTools}
              onChange={(e) => {
                setInputedTools(e.target.value);
              }}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          {userTools.length !== 0 &&
            userTools.map((tools, idx) => {
              return (
                <div className="mb-5 relative" key={idx}>
                  <input
                    key={idx}
                    type="text"
                    name="tools[]"
                    value={tools}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
                    readOnly
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-3 dark-rounded-button"
                    onClick={() => {
                      handleDelete(idx, setUserTools, userTools);
                    }}
                  >
                    <Trash className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
