import mongoose from "mongoose";
import { connectToMongoDB } from "./database/mongoDb.database.js";
import Feed from "./models/feed.model.js";
import User from "./models/auth.models.js";

async function seedFeeds() {
  await connectToMongoDB();

  // Find some users to use as authors
  const users = await User.find({}, "_id name username profilePic").limit(3);
  if (users.length === 0) {
    console.log("No users found. Please create some users first.");
    process.exit(1);
  }

  const sampleFeeds = [
    {
      content: "Just pushed my first commit to GitHub! Excited to start this journey. #coding #dev",
      author: users[0]._id,
    },
    {
      content: "Learning React hooks today. useEffect is a game-changer! Any tips for beginners?",
      author: users[1]._id,
    },
    {
      content: "Deployed my Node.js API to Heroku. Feeling accomplished! 🚀 #backend #nodejs",
      author: users[2]._id,
    },
  ];

  // Clear existing feeds
  await Feed.deleteMany({});

  // Insert sample feeds
  const feeds = await Feed.insertMany(sampleFeeds);
  console.log(`${feeds.length} sample feeds inserted successfully!`);

  // Add some likes and comments to one feed for demo
  if (feeds.length > 0) {
    const firstFeed = await Feed.findById(feeds[0]._id);
    firstFeed.likes.push(users[1]._id, users[2]._id);
    firstFeed.comments.push(
      {
        user: users[1]._id,
        text: "Congrats on your first commit!",
        date: new Date(),
      },
      {
        user: users[2]._id,
        text: "Great start! Keep it up.",
        date: new Date(),
      }
    );
    await firstFeed.save();
    console.log("Added demo likes and comments to first feed.");
  }

  process.exit(0);
}

seedFeeds().catch(console.error);
