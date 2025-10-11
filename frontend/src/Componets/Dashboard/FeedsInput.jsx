import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { PenSquare } from "lucide-react";

const API_URL = 'http://localhost:3000/api';

const FeedsInput = ({ onNewFeed }) => {
  const [content, setContent] = useState("");

  const handlePost = async () => {
    if (!content.trim()) return;

    try {
      const res = await axios.post(`${API_URL}/feeds`, { content }, { withCredentials: true });
      toast.success("Feed posted!");
      setContent("");
      onNewFeed(res.data.data);
    } catch {
      toast.error("Failed to post feed");
    }
  };

  return (
    <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-md focus-within:ring-2 focus-within:ring-blue-500 mb-6">
      <PenSquare className="text-gray-500 dark:text-gray-300" />
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-100 placeholder-gray-500"
      />
      <button
        onClick={handlePost}
        className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200"
      >
        Post
      </button>
    </div>
  );
};

export default FeedsInput;
