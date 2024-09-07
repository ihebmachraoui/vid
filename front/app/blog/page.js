"use client";
import React, { useState, useEffect } from "react";
import * as images from "../../assets/index";
import Button from "../../constants/Button/Button";
import axios from "axios";
import { FaCommentDots, FaPlus } from "react-icons/fa";

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
					"https://sociosolution-api.vercel.app/blogs",
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
     
     <div className="relative bg-[#f9f9f9]">
         	<div
				className="pt-14 sm:pt-20 bg-[#143324] lg:px-36  lg:flex justify-between items-center"
				>
				<p className="text-4xl font-jost capitalize text-white p-4 mt-4 lg:p-5 lg:mt-0">
					{" "}
					The Blog Corner{" "}
				</p>

				<div className="border text-xs ">
      <div className="container flex items-center px-6 py-4 mx-auto uppercase overflow-x-auto whitespace-nowrap">
      
		<span className="mx-2 text-[#296747]  rtl:-scale-x-100">
          <FaPlus className="w-5 h-5" />
        </span>
        
        <a href="blog/add-blog" className="flex items-center text-white text-sm -px-2 hover:font-semibold transition-all duration-300 ease-in-out">
          <span className="mx-2">Share Your Story</span>
        </a>

    
      </div>
    </div>
			</div>

        </div>
      <aside aria-label="Recent Blogs" className="mx-auto max-w-screen-xl py-8">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-neutral-600 md:mb-6 lg:text-3xl">
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
                      <h2 className="text-lg font-bold text-neutral-600">
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
