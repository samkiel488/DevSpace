import { Search } from "lucide-react";
export default function FeedsHome() {
  return (
    <section className="bg-slate-500 dark:bg-slate-800  flex h-[400px] md:h-[500px] w-full flex-col justify-center items-center-safe">
      <div className="flex w-full justify-center items-center flex-col">
        <h1 className="font-bold text-4xl text-white mb-5 text-center uppercase">
          Welcome to DevSpace
        </h1>
        <div className="flex">
          <div className="flex relative">
            <input
              type="text"
              name="search"
              id="query"
              className="bg-white h-10 w-[250px] md:w-[500px] rounded-xl p-3 outline-1 outline-slate-500  focus-within:outline-slate-700 text-md"
              placeholder="Search feeds"
            />
            <button
              type="button"
              className="absolute right-2 tranform top-1/2 -translate-y-1/2 bg-black text-white rounded-full p-1 cursor-pointer hover:bg-white hover:text-black border-1 hover:border-1"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
