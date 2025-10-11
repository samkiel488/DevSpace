// import { useState } from "react";
// import axios from "axios";
import { toast } from "react-toastify";
import { Heart, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";

const API_URL = "http://localhost:3000/api";

const FeedItem = ({ feed }) => {
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

  const handleShare = () => {
    toast.info("Share feature coming soon");
  };

  const {
    content,
    _id,
    likes,
    comments,
    author: { _id: UserId, profilePic, name },
    createdAt,
  } = feed;

  return (
    <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-sm mb-3 hover:shadow-md transition-shadow duration-200 w-full">
      <div className="flex space-x-4 justify-between items-center">
        <div className="flex space-x-4 items-center">
          <div className="flex">
            <img
              src={
                profilePic
                  ? profilePic
                  : "/images/blank-profile-picture-973460_960_720.webp"
              }
              alt="Profile Picture"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="flex dark:text-white flex-col">
            <h1 className="text-md font-semibold">
              <a href={`/profile/${UserId}`} className="hover:underline">
                {name}
              </a>
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(createdAt).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="flex self-end mt-2">
          <a
            href={`/feed/${_id}`}
            className="bg-blue-500 text-white px-3 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
          >
            <span className="hidden md:block">Read More</span>
            <span className="md:hidden">
              <MoreHorizontal />
            </span>
          </a>
        </div>
      </div>
      <div className="flex dark:text-white p-2 mt-2 flex-col space-y-2">
        <h1 className="text-[20px] font-[700] ">Having Problem with Next Js</h1>
        <p className="font-[350] ">{content}</p>
        <div className="flex space-x-2 text-sm text-white dark:text-white">
          <div className="bg-green-500 px-2 rounded-2xl">React JS</div>
          <div className="bg-green-500 px-2 rounded-2xl">Javascript</div>
          <div className="bg-green-500 px-2 rounded-2xl">Node JS</div>
        </div>
      </div>
      <div className="flex justify-around text-gray-500 dark:text-gray-400 border-t py-2 mt-2">
        <div className="flex items-center space-x-1">
          <Heart /> {likes.length}
        </div>
        <div className="flex items-center space-x-1">
          <MessageCircle /> {comments.length}
        </div>
        <div className="flex items-center space-x-1" onClick={handleShare}>
          <Share2 />
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
