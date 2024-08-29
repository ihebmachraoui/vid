"use client";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./styles.css";
import Recent from "./Recent";
function page() {
	const { blogId } = useParams(); // Get the blogId from the URL
	const [blog, setBlog] = useState(false);
	const [error, setError] = useState(null);
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const response = await axios.get(
					`https://sociosolution-api.vercel.app/blogs/${blogId}`,
				);
				setBlog(response.data);
				console.log(response.data);
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
	}, [blogId]);

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
								
									Home
								</a>
								
							</li>

							<li className="flex items-center text-sm text-gray-500 hover:text-gray-600 focus:outline-none  dark:text-neutral-500 ">
								
								<a
									className="flex items-center text-sm text-gray-500 hover:text-gray-600 focus:outline-none  dark:text-neutral-500 "
									href="/blog">
									Blog
								</a>
								
							</li>
							<li
								className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
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

				<div>
					<ol className="flex items-center bg-white opacity-60 rounded-lg p-3 ">
						<li className="inline-flex items-center">
							<a
								className="flex items-center text-sm text-gray-500 hover:text-gray-600 focus:outline-none  dark:text-neutral-500 "
								href="/">
								
								Home
							</a>
							
						</li>

						<li className="flex items-center text-sm text-gray-500 hover:text-gray-600 focus:outline-none  dark:text-neutral-500 ">
							
							<a
								className="flex items-center text-sm text-gray-500 hover:text-gray-600 focus:outline-none  dark:text-neutral-500 "
								href="/blog">
								Blog
							</a>
							
						</li>
						<li
							className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
							aria-current="page">
						
							<p className="mx-2">Details</p>
						</li>
					</ol>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:p-24 pt-5">
				<div className="col-span-1 lg:col-span-2  p-4">
					<div className="lg:px-14">
						<h1 className="flex font-jost text-4xl  text-secondary capitalize font-semibold mb-4">
							{blog.title}
						</h1>
						<div className="relative">
							<span className="absolute top-3 right-2 leading-4 bg-[#ffb7cec6] rounded-md text-sm text-white p-2 uppercase">
								{blog.type}
							</span>
							<img
								src={blog.src}
								className="w-full h-96 object-cover rounded-lg"
								alt="details"
							/>
						</div>
						<p className="pt-4 text-xl font-sans font-semibold tracking-wide">
							{blog.description}
						</p>
						<div className="flex items-center justify-between pt-2">
							<div className="flex">
								<img
									src={blog.usersrc}
									alt="Image"
									className="h-7 w-7 ml-2 rounded-full object-cover"
								/>
								<p className="text-third font-semibold ml-1">{blog.username}</p>
							</div>
							<div className="flex ml-5">
								
								<p className="text-third text-sm font-extrabold">{blog.date}</p>
							</div>
						</div>
					</div>
					<div className="lg:px-32 mt-7">
						<h1 className="font-extrabold font-jost text-2xl">
							Comments ({blog.comments.length})
						</h1>
						<hr className="font-extrabold mt-2 border-2 border-gray-300" />
						{blog.comments.length > 0 && (
							<div className="py-5 flex">
								<img
									src={blog?.comments[0]?.authorsrc}
									className="w-full h-56 object-cover  rounded-lg"
									alt="comment user"
								/>
								<div className="px-4">
									<h1 className="text-third font-semibold">
										{blog.comments[0]?.author}
									</h1>
									<span className="text-xs text-[#5ece60] border-r-4 px-2 border-[#5ece60c1]">
										85days
									</span>
									<span className="text-xs text-[#46bb48] px-2 cursor-pointer">
										Reply
									</span>
									<p className="text-gray-700 pb-2">
										{blog.comments[0].content}
									</p>

									<hr />

									<div className="block pt-2">
										<div className="flex">
											<img
												src={blog?.comments[2]?.authorsrc}
												className="h-14 rounded-lg"
												alt="comment user"
											/>
											<div className="px-4">
												<h1 className="text-third font-semibold">
													{blog.comments[2]?.author}
												</h1>
												<span className="text-xs text-[#5ece60] border-r-4 px-2 border-[#5ece60c1]">
													85days
												</span>
												<span className="text-xs text-[#46bb48] px-2 cursor-pointer">
													Reply
												</span>
											</div>
										</div>

										<p className="text-gray-700 py-2">
											{blog.comments[2].content}
										</p>
									</div>
								</div>
							</div>
						)}
					</div>
					<div className="lg:p-12 p-2">
						<h1 className="text-xl font-semibold py-4">Leave a comment</h1>
						<form className="max-w-lg">
							<div className="relative z-0 w-full mb-5 group">
								<input
									type="name"
									name="floating_name"
									id="floating_name"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
									placeholder=" "
									required
								/>
								<label
									for="floating_name"
									className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Name
								</label>
							</div>
							<div className="relative z-0 w-full mb-5 group">
								<input
									type="Email"
									name="floating_Email"
									id="floating_Email"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
									placeholder=" "
									required
								/>
								<label
									for="floating_Email"
									className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Email
								</label>
							</div>
							<div className="relative z-0 w-full mb-5 group">
								<textarea
									type="Comment"
									name="repeat_Comment"
									id="floating_repeat_Comment"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
									placeholder=" "
									required
								/>
								<label
									for="floating_repeat_Comment"
									className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Comment
								</label>
							</div>

							<button
								type="submit"
								className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
								Submit
							</button>
						</form>
					</div>
				</div>
				<div className="col-span-1 p-4">
					<h1 className="text-xl font-semibold py-4">Recent Posts</h1>
					{blogs.length > 0 ? (
						blogs.map((blog) => <Recent key={blog._id} blog={blog} />)
					) : (
						<p>No recent posts available.</p>
					)}
				</div>
			</div>
		</>
	);
}

export default page;
