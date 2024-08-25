"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import Recent from "./Recent";

function page() {
  const [blogId, setBlogId] = useState(null);
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([]);

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
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://sociosolution-api.vercel.app/blogs/${blogId}`
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
								<svg
									className="w-[20px] h-[20px] fill-[#648d79] ml-2 mr-1"
									viewBox="0 0 448 512"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path>
								</svg>
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
          blogs.map((blog) => (
            <Recent key={blog._id} blog={blog} />
          ))
        ) : (
          <p>No recent posts available.</p>
        )}
      </div>
			</div>
		</>
	);
}

export default page;
