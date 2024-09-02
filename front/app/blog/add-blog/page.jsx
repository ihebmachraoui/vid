"use client";
import React from "react";
import { useState } from "react";

import axios from "axios";
import Button from "../../../constants/Button/Button";

function page() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [type, setType] = useState("");
	const [image, setImage] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [imageUrl, setImageUrl] = useState("");
	const [isLoading, setisloading] = useState(false);

	// Blog state to reflect changes in real-time
	const [blog, setBlog] = useState({
		title: "title",
		description: "description",
		src: "https://plus.unsplash.com/premium_vector-1722152242334-bb43bb038e36?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		type: "tips & tricks",
		username: "Iheb Machraoui",
		usersrc: "https://via.placeholder.com/150",
		date: new Date().toLocaleDateString(),
		comments: [],
	});
	const handleImageChange = async (event) => {
		const file = event.target.files[0];
		setisloading(true);

		if (file) {
			const cloudName = "dww70arvk";
			const uploadPreset = "fcqswjeg";

			const formData = new FormData();
			formData.append("file", file);
			formData.append("upload_preset", uploadPreset);

			try {
				const response = await axios.post(
					`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
					formData,
				);
				setisloading(false);

				setImageUrl(response.data.secure_url);
				setBlog((prev) => ({ ...prev, src: response.data.secure_url }));
			} catch (error) {
				console.error("Error uploading image:", error);
			}
		}
	};
	const truncateText = (text, wordLimit) => {
		const words = text.split(" ");
		if (words.length > wordLimit) {
			return words.slice(0, wordLimit).join(" ") + "...";
		}
		return text;
	};

	// Update blog state on input changes
	const handleTitleChange = (e) => {
		const newTitle = e.target.value;
		setTitle(newTitle);
		setBlog((prev) => ({
			...prev,
			title: newTitle,
		}));
	};

	const handleDescriptionChange = (e) => {
		const newDescription = e.target.value;
		setDescription(newDescription);
		setBlog((prev) => ({
			...prev,
			description: newDescription,
		}));
	};

	const handleTypeChange = (e) => {
		const newType = e.target.value;
		if (newType.split(" ").length <= 4) {
			setType(newType);
			setBlog((prev) => ({
				...prev,
				type: newType,
			}));
		}
	};

	const handleUserChange = () => {
		const newToggle = !toggle;
		setToggle(newToggle);
		setBlog((prev) => ({
			...prev,
			username: newToggle ? "Anonymous" : "Iheb Machraoui",
		}));
	};

	const createblog = async () => {
		try {
			const response = await axios.post(
				"https://sociosolution-api.vercel.app/blogs",
				blog,
			);

			console.log("Blog created:", response.data);
			// Redirect to /blogs using location.assign
			location.assign("/blog");
		} catch (error) {
			console.error("Error creating blog:", error);
			// Handle error (e.g., show an error message)
		}
	};

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
					Add Blog{" "}
				</p>

				<div>
					<ol className="flex items-center bg-white opacity-60 rounded-lg p-3 ">
						<li className="inline-flex items-center">
							<a
								className="flex items-center text-sm text-gray-500 hover:text-neutral-600 focus:outline-none  dark:text-neutral-500 "
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

						<li className="flex items-center text-sm text-gray-500 hover:text-neutral-600 focus:outline-none  dark:text-neutral-500 ">
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
								className="flex items-center text-sm text-gray-500 hover:text-neutral-600 focus:outline-none  dark:text-neutral-500 "
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
							className="inline-flex items-center text-sm font-semibold text-neutral-600 truncate dark:text-neutral-200"
							aria-current="page">
							<svg
								className="w-[16px] h-[16px] fill-[#8e8e8e]"
								viewBox="0 0 448 512"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
							</svg>
							<p className="mx-2">Add Blog</p>
						</li>
					</ol>
				</div>
			</div>
			<div>
				<p className="mt-4 text-sm text-neutral-600 leading-6 px-4 sm:px-12 sm:text-base sm:leading-8 lg:px-80 text-center">
					Create a new blog Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Porro, amet voluptas voluptatem rerum, delectus impedit quos
					dignissimos consequatur alias aperiam molestias.
				</p>
			</div>
			<div className="grid grid-cols-3 gap-4 p-4 lg:p-20">
				{/* First div */}
				<div className="bg-gray-200 p-4 col-span-3 lg:col-span-2 lg:max-w-[600px] ">
					{/* Title Input */}
					<div className="mb-4">
						<label
							htmlFor="title"
							className="block text-sm font-medium text-neutral-600">
							Title
						</label>
						<input
							type="text"
							id="title"
							name="title"
							value={title}
							onChange={handleTitleChange}
							required
							className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Enter title"
						/>
					</div>

					{/* Image Upload */}
					<div className="mb-4">
						<label
							htmlFor="image"
							className="block text-sm font-medium text-neutral-600">
							Upload Image
						</label>
						<input
							type="file"
							id="image"
							name="image"
							accept="image/*"
							onChange={handleImageChange}
							required
							className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-100 hover:file:bg-gray-200"
						/>
					</div>
					{/* Type Input */}
					<div className="mb-4">
						<label
							htmlFor="type"
							className="block text-sm font-medium text-neutral-600">
							Type
						</label>
						<input
							type="text"
							id="type"
							name="type"
							value={type}
							onChange={handleTypeChange}
							required
							className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Enter type (max 4 words)"
						/>
					</div>
					{/* Description Input */}
					<div className="mb-4">
						<label
							htmlFor="description"
							className="block text-sm font-medium text-neutral-600">
							Description
						</label>
						<textarea
							id="description"
							name="description"
							rows="4"
							value={description}
							onChange={handleDescriptionChange}
							required
							className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Enter description"
						/>
					</div>

					{/* Toggle Switch */}
					<div className="mb-4 flex flex-row-reverse items-center">
						<label className="inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								id="toggle"
								name="toggle"
								checked={toggle}
								onChange={handleUserChange}
								className="sr-only peer"
							/>
							<div className="relative w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
							<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
								{toggle ? blog.username : "Anonymous"}
							</span>
						</label>
					</div>
				</div>

				{/* Second div */}
				<div className="justify-center   col-span-2 lg:col-span-1 w-max border-4 rounded-lg">
					<div>
						<div className="relative">
							<span className="absolute top-3 right-2 leading-4 bg-[#ffb7cec6] rounded-md text-sm text-white p-2 uppercase">
								{blog.type}
							</span>
							{isLoading ? (
								<div className="flex items-center justify-center  w-full h-44">
									<div
										className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
										role="status">
										<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
											Loading...
										</span>
									</div>
								</div>
							) : (
								<img
									src={blog.src}
									alt="Image"
									className=" w-full h-56 object-cover rounded-lg"
								/>
							)}
						</div>

						<h1 className="font-jost text-xl text-secondary capitalize font-semibold pt-6">
							{blog.title}
						</h1>
						<div className="max-w-xs">
							<p className="text-third mt-2 first-letter:capitalize">
								{truncateText(blog.description, 20)}
							</p>
						</div>

						<div className="flex items-center pt-2">
							<img
								src={blog.usersrc}
								alt="Image"
								className="h-7 w-7 ml-2 rounded-full object-cover"
							/>
							<p className="text-third font-semibold ml-1">{blog.username}</p>
							<div className="flex ml-5">
								<svg
									className="w-[20px] h-[20px] fill-[#648d79] ml-2 mr-1"
									viewBox="0 0 448 512"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path>
								</svg>
								<p className="text-third text-sm font-extrabold">{blog.date}</p>
							</div>
							<svg
								className="w-[20px] h-[20px] fill-[#648d79] ml-4"
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
							</svg>
							<p className="text-third text-sm font-extrabold">
								{blog.comments.length}
							</p>
						</div>
					</div>
					<div className="flex justify-center py-5    ">
						<Button
							onClick={createblog}
							text="Create"
							className="self-center"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default page;
