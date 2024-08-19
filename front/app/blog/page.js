import Image from "next/image";
import React from "react";

function page() {
	const blogs = [
		{
			type: "Tricks & Tips",
			src: "https://images.pexels.com/photos/1843768/pexels-photo-1843768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Rajli khani",
			description:
				"This is the first blog in the world that hasdiscription quia delectus ea quisquam molestiae sit nesciunt ducimus! Id galisum enim quo tenetur recusandae ea doloribus dolores rem omnis quia qui inventore natus. Non officiis vitae ab inventore soluta et invento.",
			usersrc:
				"https://madebydesignesia.com/themes/mindthera/images/testimonial/1.jpg",
			username: "John Smith",
			date: "10/12/2015",
			comments: [
				{
					id: 1,
					author: "Jane Doe",
					content:
						"This is a great post! I really enjoyed reading it and found the information very helpful.",
					timestamp: "2024-08-19T14:32:00Z",
				},
				{
					id: 2,
					author: "John Smith",
					content:
						"I have a question about the third section. Could you provide more details on that?",
					timestamp: "2024-08-19T15:45:00Z",
				},
				{
					id: 3,
					author: "Alice Johnson",
					content:
						"Thanks for sharing this! The tips you provided are very useful for my project.",
					timestamp: "2024-08-19T16:22:00Z",
				},
			],
		},
		{
			type: "Tricks & Tips",
			src: "https://images.pexels.com/photos/1843768/pexels-photo-1843768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Rajli khani",
			description:
				"This is the first blog in the world that hasdiscription quia delectus ea quisquam molestiae sit nesciunt ducimus! Id galisum enim quo tenetur recusandae ea doloribus dolores rem omnis quia qui inventore natus. Non officiis vitae ab inventore soluta et invento.",
			usersrc:
				"https://madebydesignesia.com/themes/mindthera/images/testimonial/1.jpg",
			username: "John Smith",
			date: "10/12/2015",
			comments: [
				{
					id: 1,
					author: "Jane Doe",
					content:
						"This is a great post! I really enjoyed reading it and found the information very helpful.",
					timestamp: "2024-08-19T14:32:00Z",
				},
				{
					id: 2,
					author: "John Smith",
					content:
						"I have a question about the third section. Could you provide more details on that?",
					timestamp: "2024-08-19T15:45:00Z",
				},
				{
					id: 3,
					author: "Alice Johnson",
					content:
						"Thanks for sharing this! The tips you provided are very useful for my project.",
					timestamp: "2024-08-19T16:22:00Z",
				},
			],
		},

		{
			type: "Tricks & Tips",
			src: "https://images.pexels.com/photos/1843768/pexels-photo-1843768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Rajli khani",
			description:
				"This is the first blog in the world that hasdiscription quia delectus ea quisquam molestiae sit nesciunt ducimus! Id galisum enim quo tenetur recusandae ea doloribus dolores rem omnis quia qui inventore natus. Non officiis vitae ab inventore soluta et invento.",
			usersrc:
				"https://madebydesignesia.com/themes/mindthera/images/testimonial/1.jpg",
			username: "John Smith",
			date: "10/12/2015",
			comments: [
				{
					id: 1,
					author: "Jane Doe",
					content:
						"This is a great post! I really enjoyed reading it and found the information very helpful.",
					timestamp: "2024-08-19T14:32:00Z",
				},
				{
					id: 2,
					author: "John Smith",
					content:
						"I have a question about the third section. Could you provide more details on that?",
					timestamp: "2024-08-19T15:45:00Z",
				},
				{
					id: 3,
					author: "Alice Johnson",
					content:
						"Thanks for sharing this! The tips you provided are very useful for my project.",
					timestamp: "2024-08-19T16:22:00Z",
				},
			],
		},
		{
			type: "Tricks & Tips",
			src: "https://images.pexels.com/photos/1843768/pexels-photo-1843768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Rajli khani",
			description:
				"This is the first blog in the world that hasdiscription quia delectus ea quisquam molestiae sit nesciunt ducimus! Id galisum enim quo tenetur recusandae ea doloribus dolores rem omnis quia qui inventore natus. Non officiis vitae ab inventore soluta et invento.",
			usersrc:
				"https://madebydesignesia.com/themes/mindthera/images/testimonial/1.jpg",
			username: "John Smith",
			date: "10/12/2015",
			comments: [
				{
					id: 1,
					author: "Jane Doe",
					content:
						"This is a great post! I really enjoyed reading it and found the information very helpful.",
					timestamp: "2024-08-19T14:32:00Z",
				},
				{
					id: 2,
					author: "John Smith",
					content:
						"I have a question about the third section. Could you provide more details on that?",
					timestamp: "2024-08-19T15:45:00Z",
				},
				{
					id: 3,
					author: "Alice Johnson",
					content:
						"Thanks for sharing this! The tips you provided are very useful for my project.",
					timestamp: "2024-08-19T16:22:00Z",
				},
			],
		},
	];
	const truncateText = (text, wordLimit) => {
		const words = text.split(" ");
		if (words.length > wordLimit) {
			return words.slice(0, wordLimit).join(" ") + "...";
		}
		return text;
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

						<li
							className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
							aria-current="page">
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
							Blog
						</li>
					</ol>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 lg:p-28">
				{blogs.map((blog, index) => (
					<div key={index} className="">
						<div>
							<a
								href="/blog/2"
								className="block relative no-underline">
								<div className="relative">
									<span className="absolute top-3 right-2 leading-4 bg-primary rounded-md text-sm text-white p-2 uppercase">
										{blog.type}
									</span>
									<img src={blog.src} alt="Image" className="rounded-lg" />
								</div>

								<h1 className="font-jost text-xl text-secondary capitalize font-semibold pt-6">
									{blog.title}
								</h1>
								<p className="text-third mt-2">
									{truncateText(blog.description, 20)}
								</p>
							</a>
							<div className="flex items-center pt-2">
								<img
									src={blog.usersrc}
									alt="Image"
									className="h-7 w-7 ml-2   rounded-full object-cover"
								/>
								<p className="text-third font-semibold ml-1 ">
									{blog.username}
								</p>
								<div className="flex ml-5">
									<svg
										className="w-[20px] h-[20px] fill-[#648d79] ml-2 mr-1"
										viewBox="0 0 448 512"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path>
									</svg>
									<p className="text-third text-sm font-extrabold">
										{blog.date}
									</p>
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
					</div>
				))}
			</div>
		</>
	);
}

export default page;
