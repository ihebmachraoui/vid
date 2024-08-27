"use client";
import React, { useState, useEffect } from "react";
import Button from "../../constants/Button/Button";
import * as images from "../../assets/index";
import Form from "./Form";
import  axios  from 'axios';
import Link from "next/link";

function page() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		age: "",
		date: "",
		time: "",
		consultation: "",
		urgent: "no", // default value for radio button
	});
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);





	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "radio" ? (checked ? value : formData[name]) : value,
		});
	};
	const validateFormData = (data) => {
		// Check if any required fields are empty
		return (
		  data.firstName.trim() !== "" &&
		  data.lastName.trim() !== "" &&
		  data.phoneNumber.trim() !== "" &&
		  data.email.trim() !== "" &&
		  data.age.trim() !== "" &&
		  data.date.trim() !== "" &&
		  data.time.trim() !== "" &&
		  data.consultation.trim() !== ""
		);
	  };
	  
	  const onSubmit = async () => {
		// Validate form data
		if (!validateFormData(formData)) {
		  alert("Please fill out all required fields.");
		  return; // Stop further execution if validation fails
		}
	  
		setIsOpen(!isOpen);
		setIsLoading(true);
	  
		
		  await sendEmail();
		  
		
		  		  // Simulate loading time
		  setTimeout(() => {
			setIsLoading(false);
		  }, 1000); // Change the time as needed
		
	  };
	  
	  

	const sendEmail = async () => {
		const timenow =new Date().getFullYear()
		const emailContent = `
		  			<section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
				<header>
					<a href="http://sociosolution.vercel.app/" target="_blank">
						<img className="w-auto h-12 sm:h-14" src="https://sociosolution.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.248c666a.png&w=256&q=75" alt="" />
					</a>
				</header>

				<main className="mt-8">
					<h2 className="text-gray-700 dark:text-gray-200">Hi ${formData.firstName},</h2>

					<p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
						You have succefully deployed your request ,
						Continue to the payment to get in touch with our {" "}
						<span className="font-semibold ">SociAlly Expert</span>.
					</p>

					<button className="px-6 py-2 mt-4 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
						Pay Online
					</button>
					
					<p className="mt-8 text-gray-600 dark:text-gray-300">
						Thanks For Trusting in, <br />
						SociAlly team
					</p>
				</main>

				<footer className="mt-8">
					<p className="text-gray-500 dark:text-gray-400">
						This email was sent to{" "}
						<a
							href="#"
							className="text-blue-600 hover:underline dark:text-blue-400"
							target="_blank">
							${formData.email}
						</a>
						. If you'd rather not receive this kind of email, you can{" "}
						<a
							href="#"
							className="text-blue-600 hover:underline dark:text-blue-400">
							unsubscribe
						</a>{" "}
						or{" "}
						<a
							href="#"
							className="text-blue-600 hover:underline dark:text-blue-400">
							manage your email preferences
						</a>
						.
					</p>
					<p className="mt-3 text-gray-500 dark:text-gray-400">
						© ${timenow} SociAlly. All Rights Reserved.
					</p>
				</footer>
			</section>
		`;
	
		try {
		  await axios.post('https://sociosolution-api.vercel.app/send-email', {
			to: formData.email,
			subject: 'Booking an appointment',
			html: emailContent,
		  });
		  console.log('Email sent successfully');
		} catch (error) {
		  alert('Error sending email:', error.message);
		}
	  };




	return (
		<>
			<div className="mx-auto max-w-screen-lg pt-8 text-center bg-white">
				<div className="relative mt-24 bg-[#f9f9f9] px-4 sm:px-8 sm:py-12">
					{/* <span className="rounded-full text-black font-medium px-3 mb-2 bg-[#e1ffd4] py-2">
        Blogs
      </span> */}
					<h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
						Book an Appointment
					</h1>
					<p className="mt-4 pb-2 text-sm text-gray-600 leading-6 px-4 sm:px-12 sm:text-base sm:leading-8">
						Book an appointment with our sociologist to explore and address your
						unique concerns. Whether it's personal issues, family dynamics, or
						social challenges, we're here to provide tailored support. Fill in
						the form below and choose a convenient time for a confidential
						session.
					</p>

					<div className="mt-6"></div>
				</div>

				<img
					className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover"
					src={images.Appointment.src}
					alt=""
				/>
			</div>
			<Form
				handleChange={handleChange}
				formData={formData}
				onSubmit={onSubmit}
			/>
			{isOpen && (
				<>
					<div className="fixed inset-0 z-50 flex items-center justify-center">
						<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
						<div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
							<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
								{isLoading ? (
									<div role="status" className="text-center">
										<svg
											aria-hidden="true"
											className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600"
											viewBox="0 0 100 101"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
												fill="currentColor"
											/>
											<path
												d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
												fill="currentFill"
											/>
										</svg>
										<span className="sr-only">Loading...</span>
									</div>
								) : (
									<div>
										<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
											<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
												Request Sent
											</h3>
											<button
												onClick={() => setIsOpen(!isOpen)}
												type="button"
												className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
												data-modal-hide="static-modal">
												<svg
													className="w-3 h-3"
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 14 14">
													<path
														stroke="currentColor"
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
													/>
												</svg>
												<span className="sr-only">Close modal</span>
											</button>
										</div>
										<div className="p-4 md:p-5 space-y-4">
											<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
												An email has been sent to your address. Your request
												will be pre-examined, and the first step is done now.
											</p>
										</div>
										<div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
										<Link href="/">

											
											<button
												onClick={() => setIsOpen(!isOpen)}
												data-modal-hide="static-modal"
												type="button"
												className="text-white bg-primary hover:bg-[#599e54] focus:ring-4 focus:outline-none focus:ring-[#83cc61] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#83cc61] dark:hover:bg-[#599e54] dark:focus:ring-[#83cc61]">
												I Understand
											</button>
										</Link>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</>
			)}

		</>
	);
}

export default page;
