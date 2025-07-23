import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, body }) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{body}</p>
      <span className="text-sm text-gray-500">Posted by User #{userId}</span>
    </div>
  );
};

export default PostCard;
