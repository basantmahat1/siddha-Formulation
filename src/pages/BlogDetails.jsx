import React from "react";
import { useParams } from "react-router-dom";
import blogDetails from "../data/blogDetails.js";// Move your samplePosts to a separate file


export default function BlogDetail() {
  const { id } = useParams();
  const post = blogDetails.find((p) => p.id === parseInt(id));
  if (!post) return <div className="text-center mt-10">Post not found.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <img src={post.image} alt={post.title} className="w-full rounded-2xl mb-6" />
      <h1 className="text-4xl font-bold text-green-800 mb-2">{post.title}</h1>
      <div className="text-gray-500 mb-6">{post.date}</div>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
    </div>
  );
}
