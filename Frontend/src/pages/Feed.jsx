import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaHeart,
  FaRegComment,
  FaShare,
  FaBookmark,
} from "react-icons/fa";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/feed")
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-8">
      {/* Heading */}

      <h1
        className="text-6xl text-center mb-2"
        style={{ fontFamily: "Dancing Script" }}
      >
        Your Feed
      </h1>

      <p className="text-center text-gray-600 mb-10 italic">
        Explore beautiful memories shared by you 📸
      </p>

      {/* Feed */}

      <div className="flex flex-wrap justify-center gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className="
            w-full
            sm:w-[350px]
            bg-white/70
            backdrop-blur-lg
            rounded-3xl
            shadow-2xl
            overflow-hidden
            hover:scale-105
            transition
            duration-300
          "
          >
            {/* Image */}

            <div className="overflow-hidden">
              <img
                src={post.image}
                alt="post"
                className="w-full h-80 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Caption */}

            <div className="p-5">
             <h2
  className="mt-4 text-xl text-gray-800 leading-relaxed text-center"
  style={{ fontFamily: '"Caveat", cursive' }}
>
  {post.caption}
</h2>

              {/* Icons */}

              <div className="flex justify-between mt-6 text-xl text-gray-600">
                <div className="flex gap-5">
                  <FaHeart className="cursor-pointer hover:text-red-500 transition" />

                  <FaRegComment className="cursor-pointer hover:text-blue-500 transition" />

                  <FaShare className="cursor-pointer hover:text-green-500 transition" />
                </div>

                <FaBookmark className="cursor-pointer hover:text-yellow-500 transition" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center mt-20 text-gray-500 text-xl">
            No posts yet 📷
        </div>
      )}
    </div>
  );
}

export default Feed;