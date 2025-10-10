import FeedItem from "./FeedItem";

const FeedList = ({ feeds }) => {
  return (
    <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
      {feeds.map(feed => (
        <FeedItem key={feed._id} feed={feed} />
      ))}
    </div>
  );
};

export default FeedList;
