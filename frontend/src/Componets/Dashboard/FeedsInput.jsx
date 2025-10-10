import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Send } from "lucide-react";

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
    <div className="bg-gray-700 p-4 rounded-lg mb-4 shadow-lg">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-3 bg-gray-600 text-white rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
        rows={3}
      />
      <button
        onClick={handlePost}
        className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2"
      >
        <Send size={16} />
        Post
      </button>
    </div>
  );
};

export default FeedsInput;
