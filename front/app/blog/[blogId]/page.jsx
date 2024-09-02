"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { FaHome, FaChevronRight, FaUserCircle, FaCog } from 'react-icons/fa';
import Recent from "./Recent";
import BlogDetails from './BlogDetails';
function page() {
	const [blogId, setBlogId] = useState(null);
	const [blog, setBlog] = useState(null);
	const [error, setError] = useState(null);
	const [blogs, setBlogs] = useState([]);
	const [track,settrack] =useState(null);

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
		console.log(track)
		const fetchBlog = async () => {
			try {
				const response = await axios.get(
					`https://sociosolution-api.vercel.app/blogs/${blogId}`,
				);
				setBlog(response.data);
				console.log("aaaa",response.data);
			} catch (err) {
				setError("Failed to fetch blog data.");
			}
		};

		const fetchBlogs = async () => {
			try {
				const response = await axios.post(
					"https://sociosolution-api.vercel.app/blogs/limited",
					{ excludeId: blogId },
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
	}, [blogId,track]);

	if (error) {
		return <p>{error}</p>;
	}

	if (!blog) {
		return (
			<>
				<div
					className="pt-14 pb-4 sm:pt-20  lg:px-36  lg:flex justify-between items-center"
					style={{
						background:
							"linear-gradient(45deg, rgba(90, 158, 124, 0.8), rgba(131, 204, 97, 0.8))",
					}}>
					<p className="text-4xl font-jost capitalize text-white p-4 mt-4 lg:p-5 lg:mt-0">
						{" "}
						Blog{" "}
					</p>

					<div>
						<ol className="flex items-center bg-white opacity-60 rounded-lg p-3 ">
							<li className="inline-flex items-center">
								<a
									className="flex items-center text-sm text-gray-500 hover:text-neutral-600 focus:outline-none  dark:text-neutral-500 "
									href="/">
								
									Home
								</a>
								
							</li>

							<li className="flex items-center text-sm text-gray-500 hover:text-neutral-600 focus:outline-none  dark:text-neutral-500 ">
								
								<a
									className="flex items-center text-sm text-gray-500 hover:text-neutral-600 focus:outline-none  dark:text-neutral-500 "
									href="/blog">
									Blog
								</a>
								
							</li>
							<li
								className="inline-flex items-center text-sm font-semibold text-neutral-600 truncate dark:text-neutral-200"
								aria-current="page">
								
								<p className="mx-2">Details</p>
							</li>
						</ol>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<div
				className="pt-14 pb-4 sm:pt-20  lg:px-36  lg:flex justify-between items-center"
				style={{
					background:
						"linear-gradient(45deg, rgba(90, 158, 124, 0.8), rgba(131, 204, 97, 0.8))",
				}}>
				<p className="text-4xl font-jost capitalize text-white p-4 mt-4 lg:p-5 lg:mt-0">
					{" "}
					Blog{" "}
				</p>

				<div className="bg-gray-200 dark:bg-gray-800">
      <div className="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
        <a href="/" className="text-neutral-600 dark:text-gray-200">
          <FaHome className="w-5 h-5" />
        </a>

        <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
          <FaChevronRight className="w-5 h-5" />
        </span>

        <a href="#" className="flex items-center text-neutral-600 -px-2 dark:text-gray-200 hover:underline">
          <FaUserCircle className="w-6 h-6 mx-2" />
          <span className="mx-2">Account</span>
        </a>

        <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
          <FaChevronRight className="w-5 h-5" />
        </span>

        <a href="#" className="flex items-center text-neutral-600 -px-2 dark:text-gray-200 hover:underline">
          <FaCog className="w-6 h-6 mx-2" />
          <span className="mx-2">Profile</span>
        </a>

        <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
          <FaChevronRight className="w-5 h-5" />
        </span>

        <a href="#" className="flex items-center text-blue-600 -px-2 dark:text-blue-400 hover:underline">
          <FaCog className="w-6 h-6 mx-2" />
          <span className="mx-2">Settings</span>
        </a>
      </div>
    </div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:p-24 pt-5">
{/* Blog details */}
<BlogDetails blog={blog} settrack={settrack}/>
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
