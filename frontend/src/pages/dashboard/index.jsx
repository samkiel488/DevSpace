import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import FeedsInput from "../../Componets/Dashboard/FeedsInput";
import FeedList from "../../Componets/Dashboard/FeedList";

const API_URL = "http://localhost:3000/api";

export default function FeedsHome() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetchFeeds();
  }, []);

  const fetchFeeds = async () => {
    try {
      const res = await axios.get(`${API_URL}/feeds`, {
        withCredentials: true,
      });
      setFeeds(res.data.data);
    } catch {
      toast.error("Failed to load feeds");
    }
  };

  const handleNewFeed = (newFeed) => {
    setFeeds([newFeed, ...feeds]);
  };

  return (
    <>
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
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        <div className="max-w-md mx-auto w-11/12 sm:w-full">
          <FeedsInput onNewFeed={handleNewFeed} />
          <FeedList feeds={feeds} />
        </div>
      </div>
    </>
  );
}
