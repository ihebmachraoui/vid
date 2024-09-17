
"use client";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import axios from "axios";
import Button from "../../../constants/Button/Button";
import * as images from "../../../assets/index";

function AddBlogPage() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [type, setType] = useState("");
	const [image, setImage] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [imageUrl, setImageUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);

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
		setIsLoading(true);

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
				setIsLoading(false);
				setImageUrl(response.data.secure_url);
				setBlog((prev) => ({ ...prev, src: response.data.secure_url }));
			} catch (error) {
				setIsLoading(false);
				console.error("Error uploading image:", error);
			}
		}
	};

	const handleTitleChange = (e) => {
		const newTitle = e.target.value;
		setTitle(newTitle);
		setBlog((prev) => ({ ...prev, title: newTitle }));
	};

	const handleDescriptionChange = (e) => {
		const newDescription = e.target.value;
		setDescription(newDescription);
		setBlog((prev) => ({ ...prev, description: newDescription }));
	};

	const handleTypeChange = (e) => {
		const newType = e.target.value;
		if (newType.split(" ").length <= 4) {
			setType(newType);
			setBlog((prev) => ({ ...prev, type: newType }));
		}
	};

	const handleUserChange = () => {
		setToggle(!toggle);
		setBlog((prev) => ({
			...prev,
			username: toggle ? "Iheb Machraoui" : "Anonymous",
		}));
	};

	const createBlog = async () => {
		try {
			const response = await axios.post(
				"https://sociosolution-api.vercel.app/blogs",
				blog,
			);
			console.log("Blog created:", response.data);
			location.assign("/blog");
		} catch (error) {
			console.error("Error creating blog:", error);
		}
	};

	return (
		<>
			<div className="pt-14 sm:pt-20 bg-[#143324] lg:px-36 lg:flex justify-between items-center">
				<p className="text-4xl  uppercase text-white p-4 mt-4 lg:p-5 lg:mt-0">
					Create Your Blog
				</p>
				<div className="border text-xs">
					<div className="container flex items-center px-6 py-4 mx-auto uppercase overflow-x-auto whitespace-nowrap">
						<a href="/" className="text-white">
							<span className="mx-2">Home</span>
						</a>
						<span className="mx-5 text-[#296747] rtl:-scale-x-100">
							<FaChevronRight className="w-3 h-3" />
						</span>
						<a href="/blog" className="flex items-center text-white px-2 hover:underline">
							<span className="mx-2">Blogs</span>
						</a>
						<span className="mx-5 text-[#296747] rtl:-scale-x-100">
							<FaChevronRight className="w-3 h-3" />
						</span>
						<a href="#" className="flex items-center text-white px-2 hover:underline">
							<span className="mx-2">Add Blog</span>
						</a>
					</div>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row w-full h-full items-center bg-[#ffffff]">
	{/* Form Section */}
	<div className="lg:w-1/2 w-full h-full py-8 flex flex-col justify-between px-4 lg:py-0 lg:px-8 space-y-6">
		<div>
			{/* Title Input */}
			<div className="mb-4">
				<label htmlFor="title" className="mb-2 block text-sm font-medium">
					Your Blog Title
				</label>
				<input
					type="text"
					id="title"
					name="title"
					value={title}
					onChange={handleTitleChange}
					required
					className="w-full rounded-md border border-[#64a646] bg-white py-4 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
					placeholder="Enter title"
				/>
			</div>

			{/* Image Upload */}
			<div className="mb-4">
				<label htmlFor="image" className="mb-2 block text-sm font-medium">
					Upload Blog Image
				</label>
				<input
					type="file"
					id="image"
					name="image"
					accept="image/*"
					onChange={handleImageChange}
					required
					className="mt-1 block w-full text-sm text-gray-500 file:py-4 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-100 hover:file:bg-gray-200"
				/>
			</div>

			{/* Type Input */}
			<div className="mb-4">
				<label htmlFor="type" className="mb-2 block text-sm font-medium">
					Your Blog Type
				</label>
				<input
					type="text"
					id="type"
					name="type"
					value={type}
					onChange={handleTypeChange}
					required
					className="w-full rounded-md border border-[#64a646] bg-white py-4 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
					placeholder="Enter type (max 4 words)"
				/>
			</div>

			{/* Description Input */}
			<div className="mb-4">
				<label htmlFor="description" className="mb-2 block text-sm font-medium">
					Your Blog Description
				</label>
				<textarea
					id="description"
					name="description"
					rows="4"
					value={description}
					onChange={handleDescriptionChange}
					required
					className="w-full rounded-md border border-[#64a646] bg-white py-2 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
					placeholder="Enter description"
				/>
			</div>

			{/* User Toggle */}
			<div className="mb-4">
				<label htmlFor="user" className="mb-2 block text-sm font-medium">
					Your Blog Privacy
				</label>
				<select
					id="user"
					name="user"
					value={toggle ? "Anonymous" : "Iheb Machraoui"}
					onChange={handleUserChange}
					className="w-full rounded-md border border-[#64a646] bg-white py-4 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
				>
					<option value="Iheb Machraoui">Iheb Machraoui</option>
					<option value="Anonymous">Anonymous</option>
				</select>
			</div>
		</div>

		{/* Create Blog Button */}
		<div className="flex flex-col items-center">
			<Button
				text="Confirm & Submit Blog"
				onClick={createBlog}
				className="btn-width text-center font-medium btn-round bg-[#296747] uppercase hover:font-semibold  transition-all duration-300 ease-in-out"
			/>
		</div>
	</div>

	{/* Image Section */}
	<div className="lg:w-1/2 w-full h-full bg-cover bg-center">
		<img
			src={images.Appointment.src}
			alt="Consultation"
			className="w-full h-full object-cover"
		/>
	</div>
</div>
<div className="py-12 bg-[#296747]">
  <div className="max-w-5xl grid lg:flex space-y-4 lg:space-y-0 px-4 gap-4 justify-center text-lg text-center mx-auto lg:px-0">
    
    {/* Example related blogs */}
    <a
      href="#"
      className="block px-6 py-6 text-white bg-[#143324] flex-1 hover:bg-[#1f4c40] transition duration-300 ease-in-out"
    >
      How to Write a Blog Post
    </a>
    <a
      href="#"
      className="block px-6 py-6 text-white bg-[#143324] flex-1 hover:bg-[#1f4c40] transition duration-300 ease-in-out"
    >
      Top 10 Blogging Tips
    </a>
    <a
      href="#"
      className="block px-6 py-6 text-white bg-[#143324] flex-1 hover:bg-[#1f4c40] transition duration-300 ease-in-out"
    >
      Understanding Blog Types
    </a>
  </div>
</div>





</>
);
}

export default AddBlogPage;
