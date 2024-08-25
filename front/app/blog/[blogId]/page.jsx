"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
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
									className="flex items-center text-sm text-gray-500 hover:text-gray-600 focus:outline-none  dark:text-neutral-500 "
									href="/">
									<svg
										className="shrink-0 me-3 size-4"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round">
										<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
										<polyline points="9 22 9 12 15 12 15 22"></polyline>
									</svg>
									Home
								</a>
								<svg
									className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="m9 18 6-6-6-6"></path>
								</svg>
							</li>

							<li className="flex items-center text-sm text-gray-500 hover:text-gray-600 focus:outline-none  dark:text-neutral-500 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="shrink-0 me-3 size-4">
									<path
										fillRule="evenodd"
										d="M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937V7A2.5 2.5 0 0 0 10 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z"
										clipRule="evenodd"
									/>
									<path
										fillRule="evenodd"
										d="M3 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3Zm1.75 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5ZM4 11.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z"
										clipRule="evenodd"
									/>
								</svg>
								<a
									className="flex items-center text-sm text-gray-500 hover:text-gray-600 focus:outline-none  dark:text-neutral-500 "
									href="/blog">
									Blog
								</a>
								<svg
									className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="m9 18 6-6-6-6"></path>
								</svg>
							</li>
							<li
								className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
								aria-current="page">
								<svg
									className="w-[16px] h-[16px] fill-[#8e8e8e]"
									viewBox="0 0 576 512"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
								</svg>
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

				<div>
					<ol className="flex items-center bg-white opacity-60 rounded-lg p-3 ">
						<li className="inline-flex items-center">
							<a
								className="flex items-center text-sm text-gray-500 hover:text-gray-600 focus:outline-none  dark:text-neutral-500 "
								href="/">
								<svg
									className="shrink-0 me-3 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
									<polyline points="9 22 9 12 15 12 15 22"></polyline>
								</svg>
								Home
							</a>
							<svg
								className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="m9 18 6-6-6-6"></path>
							</svg>
						</li>

						<li className="flex items-center text-sm text-gray-500 hover:text-gray-600 focus:outline-none  dark:text-neutral-500 ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="shrink-0 me-3 size-4">
								<path
									fillRule="evenodd"
									d="M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937V7A2.5 2.5 0 0 0 10 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z"
									clipRule="evenodd"
								/>
								<path
									fillRule="evenodd"
									d="M3 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3Zm1.75 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5ZM4 11.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z"
									clipRule="evenodd"
								/>
							</svg>
							<a
								className="flex items-center text-sm text-gray-500 hover:text-gray-600 focus:outline-none  dark:text-neutral-500 "
								href="/blog">
								Blog
							</a>
							<svg
								className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="m9 18 6-6-6-6"></path>
							</svg>
						</li>
						<li
							className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
							aria-current="page">
							<svg
								className="w-[16px] h-[16px] fill-[#8e8e8e]"
								viewBox="0 0 576 512"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
							</svg>
							<p className="mx-2">Details</p>
						</li>
					</ol>
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
