"use client";

import Image from "next/image";
import React from "react";
import { blogData } from "@/data/blogData"; // Import blogData here

const BlogData = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-6">
      {blogData.map((blog, index) => (
        <div
          key={index}
          className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg dark:bg-slate-800"
        >
          {/* Blog Image */}
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
          />

          {/* Blog Content */}
          <div className="mt-4">
            {/* Blog Title */}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {blog.title}
            </h2>

            {/* Blog Metadata */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              By <span className="font-medium">{blog.author}</span> •{" "}
              {blog.date} • {blog.readTime}
            </p>

            {/* Blog Content Preview */}
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {blog.contentPreview}
            </p>

            {/* Blog Stats */}
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{blog.views} views</span>
              <span>{blog.comments} comments</span>
              <span>
                {blog.liked ? (
                  <span className="text-red-500">Liked</span>
                ) : (
                  <span>Not Liked</span>
                )}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogData;
