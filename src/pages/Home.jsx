import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config.js";
import { Container, PostCard, Button } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) return;

    appwriteService.getPosts(userData.$id).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, [userData]);

  // 🟡 BEFORE LOGIN – BLOG LANDING PAGE
  if (!userData) {
    return (
      <div className="w-full py-16">
        <Container>
          {/* HERO SECTION */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-6 text-gray-800">
                A simple place to write, read, and share ideas
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Create posts, add images, and publish your thoughts in a clean,
                distraction-free blogging experience.
              </p>

              <div className="flex justify-center md:justify-start gap-4">
                <Button
                  className="px-6 py-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  onClick={() => navigate("/signup")}
                >
                  Get Started
                </Button>
                <Button
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-800 cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </div>
            </div>

            <div className="md:w-1/2 border-4 border-gray-200 rounded-2xl shadow-lg shadow-gray-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                alt="Blog writing"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>

          {/* FEATURES SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24 text-center">
            <div className="p-6 bg-gray-100 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Write Freely</h3>
              <p className="text-gray-600">
                A clean editor that lets you focus on your content without
                distractions.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Add Images</h3>
              <p className="text-gray-600">
                Upload and showcase images beautifully inside your posts.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Manage Posts</h3>
              <p className="text-gray-600">
                Edit or delete your posts anytime from your dashboard.
              </p>
            </div>
          </div>

          {/* SECOND IMAGE SECTION */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 border-4 border-gray-200 rounded-2xl shadow-lg shadow-gray-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
                alt="Reading blog"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>

            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Built for readers and writers
              </h2>
              <p className="text-gray-600 text-lg">
                Whether you want to document your journey or read meaningful
                content, this platform keeps everything simple and elegant.
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  /* ---------------- AFTER LOGIN ---------------- */
  return (
    <div className="w-full py-12">
      <Container>
        {/* WELCOME */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome back!</h1>
            <p className="text-gray-500 mt-1">
              Ready to write something today? Your audience is waiting for your
              next big idea.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <Button
              className="px-6 py-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-md"
              onClick={() => navigate("/add-post")}
            >
              Write a Post
            </Button>
          </div>
        </div>

        {/* DASHBOARD INSIGHTS (New Content Section) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-900 ">
            <h3 className="font-bold text-gray-800 mb-2 text-center">
              Editor's Tip
            </h3>
            <p className="text-sm text-gray-600  leading-relaxed">
              Posts with images get 40% more engagement. Try adding a
              high-quality cover photo to make your post shine!
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-900">
            <h3 className="font-bold text-gray-800 mb-2 text-center">
              Your Impact
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              You have published <strong>{posts.length}</strong>{" "}
              {posts.length === 1 ? "story" : "stories"} so far. Consistency is
              key to growing your personal brand!
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-900 ">
            <h3 className="font-bold text-gray-800 mb-2 text-center">
              Platform Security
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your stories are protected with Appwrite’s end-to-end encryption.
              Focus on your craft while we handle the data integrity and cloud
              storage.
            </p>
          </div>
        </div>

        <hr className="mb-12 border-gray-200" />

        {/* POSTS GRID */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">
            Your Recent Activity
          </h2>
          <Button
            className="px-6 py-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-md"
            onClick={() => navigate("/all-posts")}
          >
            View All
          </Button>
        </div>

        {posts.length > 0 ? (
          <div className="flex flex-wrap justify-start">
            {posts.map((post) => (
              <div key={post.$id} className="p-3 w-full sm:w-1/2 lg:w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="flex flex-col items-center justify-center text-center py-24 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <div className="bg-white p-4 rounded-full shadow-sm mb-6 flex items-center justify-center">
              <span className="text-4xl">
                {/* PURE CSS DOCUMENT ICON */}
                <div className="w-10 h-12 border-2 border-gray-300 rounded-md relative overflow-hidden">
                  {/* Top corner 'fold' effect */}
                  <div className="absolute top-0 right-0 w-3 h-3 bg-gray-200 border-b-2 border-l-2 border-gray-300"></div>
                  {/* Decorative lines representing text lines */}
                  <div className="mt-4 px-2 space-y-1.5">
                    <div className="w-full h-0.5 bg-gray-100 rounded"></div>
                    <div className="w-4/5 h-0.5 bg-gray-100 rounded"></div>
                    <div className="w-full h-0.5 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              Your canvas is empty
            </h2>

            <p className="text-gray-600 mb-8 max-w-md leading-relaxed px-6">
              It looks like your gallery is waiting for its first masterpiece.
              Start your blogging journey by sharing your unique thoughts,
              technical tutorials, or daily stories with the world.
            </p>

            <Button
              className="px-8 py-3 cursor-pointer bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold shadow-lg shadow-blue-100 "
              onClick={() => navigate("/add-post")}
            >
              Create Your First Post
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Home;
