import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const API_URL = 'http://localhost:3000/api';

const FeedItem = ({ feed }) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user.id;

  const [likesCount, setLikesCount] = useState(feed.likes.length);
  const [isLiked, setIsLiked] = useState(feed.likes.includes(userId));
  const [comments, setComments] = useState(feed.comments);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleLike = async () => {
    try {
      const res = await axios.put(`${API_URL}/feeds/${feed._id}/like`, {}, { withCredentials: true });
      const updatedFeed = res.data.data;
      setLikesCount(updatedFeed.likes.length);
      setIsLiked(updatedFeed.likes.includes(userId));
    } catch {
      toast.error("Failed to like");
    }
  };

  const handleComment = async () => {
    if (!newComment.trim()) return;
    try {
      const res = await axios.post(`${API_URL}/feeds/${feed._id}/comment`, { text: newComment }, { withCredentials: true });
      const updatedFeed = res.data.data;
      setComments(updatedFeed.comments);
      setNewComment("");
    } catch {
      toast.error("Failed to comment");
    }
  };

  const handleShare = () => {
    toast.info("Share feature coming soon");
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm mb-3 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center mb-2">
        <img
          src={feed.author.profilePic || "/images/default.jpeg"}
          alt={feed.author.name}
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="text-gray-800 dark:text-white font-semibold">{feed.author.name}</span>
        <span className="text-gray-500 dark:text-gray-400 text-sm ml-auto">
          {new Date(feed.createdAt).toLocaleDateString()}
        </span>
      </div>
      <p className="text-gray-800 dark:text-gray-100 mb-4">{feed.content}</p>
      <div className="flex gap-4">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 transition ${
            isLiked ? "text-red-500" : "text-gray-400 dark:text-gray-400 hover:text-red-500"
          }`}
        >
          <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
          {likesCount}
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1 text-gray-400 dark:text-gray-400 hover:text-blue-500 transition"
        >
          <MessageCircle size={16} />
          {comments.length}
        </button>
        <button
          onClick={handleShare}
          className="flex items-center gap-1 text-gray-400 dark:text-gray-400 hover:text-green-500 transition"
        >
          <Share2 size={16} />
        </button>
      </div>
      {showComments && (
        <div className="mt-4">
          {comments.map((c, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-2">
              <div className="flex items-center mb-1">
                <img
                  src={c.user.profilePic || "/images/default.jpeg"}
                  alt={c.user.name}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-gray-800 dark:text-white text-sm font-semibold">{c.user.name}</span>
                <span className="text-gray-500 dark:text-gray-400 text-xs ml-auto">
                  {new Date(c.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-800 dark:text-gray-100 text-sm">{c.text}</p>
            </div>
          ))}
          <div className="flex gap-2">
            <input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 p-2 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-white rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              onClick={handleComment}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded transition"
            >
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedItem;
