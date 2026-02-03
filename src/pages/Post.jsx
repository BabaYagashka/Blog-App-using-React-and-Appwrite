import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-12">
      <Container>
        {/* BOOK LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT PAGE (Image + buttons) */}
          <div className="lg:w-1/2 w-full relative">
            <div className="border rounded-xl p-4 bg-gray-100 shadow-lg ">
              <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="w-full h-100 object-cover rounded-lg"
              />

              {isAuthor && (
                <div className="flex justify-end gap-3 mt-4">
                  <Link to={`/edit-post/${post.$id}`}>
                    <Button
                      bgColor="bg-green-500"
                      className="rounded-lg hover:bg-green-700 cursor-pointer"
                    >
                      Edit
                    </Button>
                  </Link>
                  <Button
                    bgColor="bg-red-500"
                    className="rounded-lg hover:bg-red-700 cursor-pointer"
                    onClick={deletePost}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PAGE (Content) */}
          <div className="lg:w-1/2 w-full">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              {post.title}
            </h1>

            <div className="browser-css text-gray-700 leading-relaxed text-lg">
              {parse(post.content)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
