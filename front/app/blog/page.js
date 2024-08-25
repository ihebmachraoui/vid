"use client";
import React, { useState, useEffect } from "react";
import * as images from "../../assets/index";
import Button from "../../constants/Button/Button";
import axios from "axios";

function Page() {
  const truncateText = (text = "", wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://sociosolution-api.vercel.app/blogs"
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const categories = [
    "Environment and Society",
    "Family",
    "Relationship",
    "Health and Illness",
  ];

  return (
    <>
      <div>
        <div>
         
          <header className="mx-auto max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
          
            <div className="mt-24">            
            <span className="rounded-full text-black font-medium px-3 mb-2 bg-[#e1ffd4] py-2">
              Blogs
            </span>
              <h1 className="mt-8 text-4xl font-bold text-gray-900 sm:text-5xl">
              Share Your Story
            </h1>
            <p className="lg:block mt-6 text-lg text-gray-700 px-24 hidden ">
              Do you have a story or issue you'd like to share? Whether it's a
              personal experience, a challenge you're facing, or something
              that's been on your mind, this is the place for you. By sharing,
              you can receive valuable opinions from others and even gain
              insights from a professional sociologist.
            </p>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200"
                >
                  {category}
                </button>
              ))}
            </div>
            <div>
              <Button
                text="Add a blog"
                href={"blog/add-blog"}
                className="my-4 cursor-pointer"
              />
            </div>
            <img
              className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover"
              src={images.AboutIMG.src}
              alt=""
            />
          </header>
        </div>
      </div>

      <div className="w-fit mx-auto mt-10 flex space-x-2">
        <div className="h-0.5 w-2 bg-gray-600"></div>
        <div className="h-0.5 w-32 bg-gray-600"></div>
        <div className="h-0.5 w-2 bg-gray-600"></div>
      </div>

      <aside
        aria-label="Recent Posts"
        className="mx-auto mt-10 max-w-screen-xl py-20"
      >
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              People's Stories
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg italic">
            Explore a world of unique stories shared by people from all walks of life!
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="flex flex-col items-center gap-4 p-4 rounded-lg bg-white md:flex-row lg:gap-6 transition-transform duration-200 hover:shadow-lg"
              >
                <a
                  href={`/blog/${blog._id}`}
                  className="group shrink-0 relative block h-56 w-full overflow-hidden rounded-lg bg-gray-100 md:h-24 md:w-24 lg:h-40 lg:w-40"
                >
                  <img
                    src={blog.src}
                    alt={blog.title}
                    className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover transition duration-200"
                  />
                </a>

                <div className="flex flex-col gap-2 w-full">
                  <span className="text-sm text-gray-400">
                    {new Date(blog.date).toLocaleDateString()}
                  </span>
                  <h2 className="text-xl font-bold text-gray-800">
                    <a
                      href={`/blog/${blog._id}`}
                      className="hover:text-rose-500 active:text-rose-600 transition duration-100"
                    >
                      {blog.title}
                    </a>
                  </h2>
                  <p className="text-gray-500">
                    {truncateText(blog.description, 15)}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <img
                      src={blog.usersrc}
                      alt={blog.username}
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <span>{blog.username}</span>
                    <span className="text-gray-400">|</span>
                    <span>{blog.type}</span>
                    <span className="text-gray-400">|</span>
                    <span>{blog.comments.length} Comments</span>
                  </div>
                  <div>
                    <Button
                      href={`/blog/${blog._id}`}
                      text="Read More"
                      className="text-xs"
                   />
                   
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Page;