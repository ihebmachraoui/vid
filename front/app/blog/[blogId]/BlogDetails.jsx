import React, { useState } from "react";
import moment from 'moment';
import axios from "axios";
import Comment from "./Comment";
function BlogDetails({ blog , settrack}) {
	const [isReplying, setIsReplying] = useState(false);
	const [replyText, setReplyText] = useState("");
	const [idclicked, setIdclicked] = useState("");
	const [error, setError] = useState("");
	const handleReplyClick = (id) => {
		setIdclicked(id);
		setIsReplying(!isReplying);
	};

	const handleReplyChange = (e) => {
		setReplyText(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Prepare reply data
		const replyData = {
			blogId: blog._id, // Blog ID dynamically set
			comment: {
				author: "Nabbar", // Replace with dynamic user data if needed
				content: replyText, // Reply content
				timestamp: new Date().toISOString(),
				imageUrl:
					"https://i.pinimg.com/474x/16/3c/d4/163cd47627e3599a752c4815c62442c9.jpg", // Add image URL if needed
			},
			replyToCommentId: idclicked, // ID of the comment being replied to
		};

		try {
			const response = await axios.post(
				"https://sociosolution-api.vercel.app/blogs/update-comment",
				replyData,
			);
            setIsReplying(false)
			setReplyText(""); // Clear the textarea
		} catch (err) {
			setError(`Error submitting reply: ${err.message}`);
		}
	};

	return (
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
					Comments ({blog.comments?.length || 0})
				</h1>
				<hr className="font-extrabold mt-2 border-2 border-gray-300" />
				{blog.comments &&
					blog.comments.length > 0 &&
					blog.comments.map((comment) => (
						<div key={comment._id} className="py-5 flex">
							<img
								src={comment.imageUrl}
								className="h-16 w-16 object-cover rounded-full"
								alt={`comment by ${comment.author}`}
							/>

							<div className="px-4">
								<h1 className="text-third font-semibold">{comment.author}</h1>
								<span className="text-xs text-[#5ece60] border-r-4 px-2 border-[#5ece60c1]">
									{moment(comment.timestamp).fromNow()}{" "}
									{/* Format timestamp as needed */}
								</span>
								{comment.canReply && (
									<>
										<span
											className="text-xs text-[#46bb48] px-2 cursor-pointer"
											onClick={() => handleReplyClick(comment._id)} // Pass function reference, not result
										>
											{isReplying && comment._id === idclicked
												? "Cancel"
												: "Reply"}
										</span>
										{isReplying && comment._id === idclicked && (
											<div className="mt-2">
												<textarea
													className="w-full p-2 border border-gray-300 rounded"
													rows="3"
													value={replyText}
													onChange={handleReplyChange}
													placeholder="Type your reply..."
												/>
												<button
													className="mt-2 px-4 py-2 bg-[#46bb48] text-white rounded"
													onClick={handleSubmit}>
													Submit
												</button>
											</div>
										)}
									</>
								)}
								<p className="text-neutral-600 pb-2">{comment.content}</p>
								{comment.replies && comment.replies.length > 0 && (
									<div className="pl-4 border-l-2 border-gray-300" >
										{comment.replies.map((reply) => (
											<div key={reply.id}>
												<div className="py-5 flex">
													<img
														src={reply.imageUrl}
														className="h-16 w-16 object-cover rounded-full"
														alt={`reply by ${reply.author}`}
													/>

													<div className="px-4">
														<h1 className="text-third font-semibold">
															{reply.author}
														</h1>
														<span className="text-xs text-[#5ece60] border-r-4 px-2 border-[#5ece60c1]">
															{moment(reply.timestamp).fromNow()}{" "}
															{/* Format timestamp as needed */}
														</span>
														{reply.canReply && (
															<span className="text-xs text-[#46bb48] px-2 cursor-pointer">
																Reply
															</span>
														)}
														<p className="text-neutral-600 pb-2">
															{reply.content}
														</p>

														<hr />
													</div>
												</div>
											</div>
										))}
									</div>
								)}
								<hr />
							</div>
						</div>
					))}
			</div>

			{/* The comment section  */}
			<h1 className="text-xl font-semibold py-2  lg:pt-10 lg:pl-12 ">
				Leave a comment
			</h1>
			<Comment blog={blog} settrack={settrack}/>
			{/* End */}
		</div>
	);
}

export default BlogDetails;
