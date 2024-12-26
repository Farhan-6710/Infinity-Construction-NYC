"use client";

import Image from "next/image";
import React from "react";
import { blogData } from "@/data/blogData"; // Import blogData here

const BlogSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2
        className="text-center text-3xl sm:text-5xl font-bold text-tertiary dark:text-white mb-6 mt-4"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        Blog Section
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-lg rounded-lg dark:bg-slate-800"
          >
            {/* Blog Image */}
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={400}
              className="w-full h-auto aspect-video object-cover rounded-lg"
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
    </div>
  );
};

export default BlogSection;
