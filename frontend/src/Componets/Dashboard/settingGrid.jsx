export default function SettingGrid({ children }) {
  return (
    <div className="px-3 sm:px-10">
      <div className="grid grid-cols-1  sm:grid-cols-[30%_70%] gap-4  mb-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 bg-gray-100 p-3 rounded-xl">
            <h1 className="text-lg font-semibold border-b-1 border-b-gray-600 mb-2">
              Skills
            </h1>
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
            <h1 className="text-lg font-semibold border-b-1 border-b-gray-600 mb-2">
              Tools
            </h1>
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
        {children}
      </div>
    </div>
  );
}
