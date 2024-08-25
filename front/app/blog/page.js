"use client";
import React, { useState, useEffect } from "react";
import * as images from "../../assets/index";
import Button from "../../constants/Button/Button";
import axios from "axios";
import { FaCommentDots } from "react-icons/fa";

function Page() {
  const truncateText = (text = "", wordLimit = 10) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const formatUsername = (username) => {
    const [firstName, lastName] = username.split(" ");
    return lastName ? `${firstName.charAt(0)}. ${lastName}` : username;
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

  const categories = ["Type 1", "Type 2", "Type 3"];

  return (
    <>
      <div className="mx-auto max-w-screen-lg pt-8 text-center bg-white">
        <div className="relative mt-24 bg-[#f9f9f9] px-4 sm:px-8 sm:py-12">
          {/* <span className="rounded-full text-black font-medium px-3 mb-2 bg-[#e1ffd4] py-2">
            Blogs
          </span> */}
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Share Your Story
          </h1>
          <p className="mt-4 text-sm text-gray-600 leading-6 px-4 sm:px-12 sm:text-base sm:leading-8">
            Do you have a story or issue you'd like to share? Whether it's a
            personal experience, a challenge you're facing, or something that's
            been on your mind, this is the place for you. By sharing, you can
            receive valuable opinions from others and even gain insights from a
            professional sociologist.
          </p>

          <div className="mt-6">
            <Button
              text="Add a blog"
              href={"blog/add-blog"}
              className="my-2 cursor-pointer bg-rose-500 text-white px-4 py-2 rounded-md"
            />
          </div>
        </div>

        <img
          className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover"
          src={images.AboutIMG.src}
          alt=""
        />
      </div>

      <aside aria-label="Recent Blogs" className="mx-auto max-w-screen-xl py-8">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              People's Stories
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              Filter :
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="rounded-lg baby-pink px-2 py-1 text-white font-semibold"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {blogs.map((blog, index) => (
              <a href={`/blog/${blog._id}`} key={index}>
                <article className="flex flex-col items-center gap-4 p-4 rounded-lg border bg-white md:flex-row lg:gap-6 transition-transform duration-200">
                  <div className="group shrink-0 relative block h-56 w-full overflow-hidden rounded-lg bg-gray-100 sm:h-40 sm:w-40 md:h-24 md:w-24 lg:h-52 lg:w-52">
                    <img
                      src={blog.src}
                      alt={blog.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-between h-full">
                    <div className="py-2">
                      <h2 className="text-lg font-bold text-gray-800">
                        <a
                          href={`/blog/${blog._id}`}
                          className="hover:text-rose-500 active:text-rose-600 transition duration-100"
                        >
                          {blog.title}
                        </a>
                      </h2>
                    </div>
                    <div className="py-4">
                      <p className="text-gray-500">
                        {truncateText(blog.description, 10)}
                      </p>
                    </div>
                    <div className="flex items-center py-2 gap-2 bg-[#e1ffd4] bg-opacity-30 rounded-md px-2 text-xs text-gray-500">
                      <img
                        src={blog.usersrc}
                        alt={blog.username}
                        className="h-6 w-6 rounded-full object-cover"
                      />
                      <span>{formatUsername(blog.username)}</span>
                      <span className="text-gray-400">|</span>
                      <span>{blog.type}</span>
                      <span className="text-gray-400">|</span>
                      <span className="flex gap-2 items-center">
                        <FaCommentDots />
                        &nbsp;{blog.comments.length} Comments
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Page;