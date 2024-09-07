"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { FaChevronRight } from "react-icons/fa";

import Recent from "./Recent";
import BlogDetails from "./BlogDetails";
function page() {
  const [blogId, setBlogId] = useState(null);
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [track, settrack] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      const segments = pathname.split("/");
      const id = segments.pop();
      setBlogId(id);

      if (!id) {
        alert("Blog ID is missing.");
        return;
      }
    }
  }, []);

  useEffect(() => {
    console.log(track);
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://sociosolution-api.vercel.app/blogs/${blogId}`
        );
        setBlog(response.data);
        console.log("aaaa", response.data);
      } catch (err) {
        setError("Failed to fetch blog data.");
      }
    };

    const fetchBlogs = async () => {
      try {
        const response = await axios.post(
          "https://sociosolution-api.vercel.app/blogs/limited",
          { excludeId: blogId }
        );
        setBlogs(response.data);
      } catch (err) {
        setError("Error fetching blogs.");
      }
    };

    if (blogId) {
      fetchBlog(); // Fetch the single blog by ID
      fetchBlogs(); // Fetch other blogs excluding the current one
    }
  }, [blogId, track]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!blog) {
    return (
      <>
        <h1>Loading Blogs</h1>
      </>
    );
  }

  return (
    <>
      <div className="pt-14 sm:pt-20 bg-[#143324] lg:px-36  lg:flex justify-between items-center">
        <p className="text-4xl font-jost capitalize text-white p-4 mt-4 lg:p-5 lg:mt-0">
          {" "}
          The Blog Corner{" "}
        </p>

        <div className="border text-xs ">
          <div className="container flex items-center px-6 py-4 mx-auto uppercase overflow-x-auto whitespace-nowrap">
            <a href="/" className="text-white">
              <span className="mx-2">Home</span>
            </a>

            <span className="mx-5 text-[#296747]  rtl:-scale-x-100">
              <FaChevronRight className="w-3 h-3" />
            </span>

            <a
              href="/blog"
              className="flex items-center text-white -px-2 hover:underline"
            >
              <span className="mx-2">Blogs</span>
            </a>
            <span className="mx-5 text-[#296747]  rtl:-scale-x-100">
              <FaChevronRight className="w-3 h-3" />
            </span>

            <a
              href="#"
              className="flex items-center text-white -px-2 hover:underline"
            >
              <span className="mx-2">Blog</span>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:p-24 pt-5">
        {/* Blog details */}
        <BlogDetails blog={blog} settrack={settrack} />
        {/* End */}
        {/* The recent section  */}
        <div className="col-span-1 p-4">
          <h1 className="text-xl font-semibold py-4">Recent Posts</h1>
          {blogs.length > 0 ? (
            blogs.map((blog) => <Recent key={blog._id} blog={blog} />)
          ) : (
            <p>No recent posts available.</p>
          )}
        </div>
        {/* End */}
      </div>
    </>
  );
}

export default page;
