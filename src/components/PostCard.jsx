import React from "react";
import appwriteService from "../appwrite/config.js";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage = null }) {
  const imageUrl = React.useMemo(() => {
    if (!featuredImage) return null;
    return appwriteService.getFilePreview(featuredImage);
  }, [featuredImage]);

  return (
    <Link to={`/post/${$id}`}>
      <div
        className="
          w-full
          h-80
          bg-white
          border
          border-gray-300
          rounded-2xl 
          shadow-xl 
          shadow-gray-800
          overflow-hidden
          p-4
          flex
          flex-col
          items-center
          justify-between

        "
      >
        {/* IMAGE CONTAINER */}
        <div
          className="
            w-full
            h-60
            overflow-hidden
            rounded-xl
            flex
            items-center
            justify-center
            bg-white
          "
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="
              
                w-full
                h-full
                object-cover
                transition-transform
                duration-300
                hover:scale-105
              "
            />
          ) : (
            <span className="text-slate-600 text-xs">No Preview</span>
          )}
        </div>

        {/* TEXT SECTION */}
        <h2
          className="
            text-2xl font-bold mb-3 text-gray-800
            text-center
            mt-3
          "
        >
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
