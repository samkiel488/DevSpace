// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { Heart, MessageCircle, Share2 } from "lucide-react";

const API_URL = "http://localhost:3000/api";

const FeedItem = ({ feed }) => {
  console.log(feed);

  // const [likesCount, setLikesCount] = useState(feed.likes.length);
  // const [isLiked, setIsLiked] = useState(feed.likes.includes(userId));
  // const [comments, setComments] = useState(feed.comments);
  // const [showComments, setShowComments] = useState(false);
  // const [newComment, setNewComment] = useState("");

  // const handleLike = async () => {
  //   try {
  //     const res = await axios.put(
  //       `${API_URL}/feeds/${feed._id}/like`,
  //       {},
  //       { withCredentials: true }
  //     );
  //     const updatedFeed = res.data.data;
  //     setLikesCount(updatedFeed.likes.length);
  //     setIsLiked(updatedFeed.likes.includes(userId));
  //   } catch {
  //     toast.error("Failed to like");
  //   }
  // };

  // const handleComment = async () => {
  //   if (!newComment.trim()) return;
  //   try {
  //     const res = await axios.post(
  //       `${API_URL}/feeds/${feed._id}/comment`,
  //       { text: newComment },
  //       { withCredentials: true }
  //     );
  //     const updatedFeed = res.data.data;
  //     setComments(updatedFeed.comments);
  //     setNewComment("");
  //   } catch {
  //     toast.error("Failed to comment");
  //   }
  // };

  // const handleShare = () => {
  //   toast.info("Share feature coming soon");
  // };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm mb-3 hover:shadow-md transition-shadow duration-200 w-full">
      <div className="flex space-x-4">
        <div className="flex">
          <img
            src="/images/blank-profile-picture-973460_960_720.webp"
            alt="Profile Picture"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="flex">
          
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
