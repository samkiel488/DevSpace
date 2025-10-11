import FeedItem from "./FeedItem";

const FeedList = ({ feeds }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {feeds.map((feed) => (
        <FeedItem key={feed._id} feed={feed} />
      ))}
    </div>
  );
};

export default FeedList;
