import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import FeedsInput from "../../Componets/Dashboard/FeedsInput";
import FeedList from "../../Componets/Dashboard/FeedList";


const API_URL = 'http://localhost:3000/api';

export default function FeedsHome() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetchFeeds();
  }, []);

  const fetchFeeds = async () => {
    try {
      const res = await axios.get(`${API_URL}/feeds`, { withCredentials: true });
      setFeeds(res.data.data);
    } catch {
      toast.error("Failed to load feeds");
    }
  };

  const handleNewFeed = (newFeed) => {
    setFeeds([newFeed, ...feeds]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-md mx-auto w-11/12 sm:w-full">
        <FeedsInput onNewFeed={handleNewFeed} />
        <FeedList feeds={feeds} />
      </div>
    </div>
  );
}
