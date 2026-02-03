import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (!userData) return;

    appwriteService.getPosts(userData.$id).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, [userData]);

  return (
    <div className="w-full py-12 rounded-2xl min-h-screen bg-white">
      <Container>
        {/* PAGE HEADER */}
        <div className="mb-12 border-b border-gray-100 pb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
                Your Publication Archive
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                Manage and review your entire collection of stories. From your
                first draft to your latest viral hit, everything you've shared
                with the community is right here.
              </p>
            </div>

            {/* QUICK STATS STRIP */}
            <div className="hidden lg:flex gap-8 px-6 py-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-center">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                  Total Posts
                </p>
                <p className="text-2xl font-black text-blue-600">
                  {posts.length}
                </p>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="text-center">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                  Visibility
                </p>
                <p className="text-2xl font-black text-gray-700">Public</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH & FILTER PLACEHOLDER (Adds 'Management' aesthetic) */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-xl font-bold text-gray-800">
            Showing all entries
          </h2>
          <div className="relative w-full sm:w-64">
            <input
              disabled
              type="text"
              placeholder="Search your posts..."
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm italic text-gray-400 cursor-not-allowed"
            />
          </div>
        </div>

        {/* POSTS GRID */}
        {posts.length > 0 ? (
          <div className="flex flex-wrap -mx-3">
            {posts.map((post) => (
              <div key={post.$id} className="p-3 w-full sm:w-1/2 lg:w-1/4 ">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="text-center py-32 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full text-3xl">
              📂
            </div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              The archive is empty
            </h2>
            <p className="text-gray-500 max-w-sm mx-auto">
              Your digital library is waiting for its first volume. Once you
              publish a post, it will appear here for you to manage.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
