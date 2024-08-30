"use client";
import React, { useState } from "react";
import Button from "../../constants/Button/Button";
import Form from "./Form";
import axios from "axios";
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
		urgent: "no",
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
		if (!validateFormData(formData)) {
			alert("Please fill out all required fields.");
			return;
		}

		setIsOpen(true);
		setIsLoading(true);

		try {
			const response = await axios.post(
				"https://sociosolution-api.vercel.app/appointment",
				formData
			);

			if (response.status === 200) {
				await sendEmail(response.data._id);
				setTimeout(() => {
					setIsLoading(false);
					setFormData({
						firstName: "",
						lastName: "",
						phoneNumber: "",
						email: "",
						age: "",
						date: "",
						time: "",
						consultation: "",
						urgent: "no",
					});
				}, 1000);
			} else {
				alert("Failed to create an appointment. Please try again.");
				setIsLoading(false);
			}
		} catch (error) {
			alert("Error sending request:", error.message);
			setIsLoading(false);
		}
	};

	const sendEmail = async (id) => {
		const timenow = new Date().getFullYear();
		const emailContent = `
			<section className="container">
				<header>
					<a href="http://sociosolution.vercel.app/" target="_blank">
						<img className="logo" src="https://sociosolution.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.248c666a.png&w=256&q=75" alt="" />
					</a>
				</header>
				<main className="content">
					<h2 className="greeting">Hi ${formData.firstName},</h2>
					<p className="message">
						You have successfully deployed your request. Continue to the payment to get in touch with our
						<span className="highlight">SociAlly Expert</span>.
					</p>
					<a href="https://sociosolution.vercel.app/appointment/${id}" target="_blank" className="pay-link">
						Click To Pay
					</a>
					<p className="thank-you">
						Thanks For Trusting in, <br />
						SociAlly team
					</p>
				</main>
				<footer className="footer">
					<p className="email-info">
						This email was sent to
						<a href="#" className="email-link" target="_blank">${formData.email}</a>.
						If you'd rather not receive this kind of email, you can
						<a href="#" className="email-link">unsubscribe</a> or
						<a href="#" className="email-link">manage your email preferences</a>.
					</p>
					<p className="copyright">
						© ${timenow} SociAlly. All Rights Reserved.
					</p>
				</footer>
			</section>
		`;

		try {
			await axios.post("https://sociosolution-api.vercel.app/send-email", {
				to: formData.email,
				subject: "Booking an appointment",
				html: emailContent,
			});
			console.log("Email sent successfully");
		} catch (error) {
			alert("Error sending email:", error.message);
		}
	};

	return (
		<>
			<div className="flex justify-center items-center min-h-screen bg-gray-100">
				<Form
					handleChange={handleChange}
					formData={formData}
					onSubmit={onSubmit}
					className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
				/>
			</div>

			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
					<div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-lg mx-auto">
						{isLoading ? (
							<div className="flex flex-col items-center justify-center space-y-4">
								<svg
									aria-hidden="true"
									className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-[#64a646]"
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
								<p className="text-lg font-medium text-gray-700">Submitting your request...</p>
							</div>
						) : (
							<div>
								<h3 className="text-2xl font-semibold text-gray-900 mb-4">
									Request Sent
								</h3>
								<p className="text-base text-gray-500 mb-6">
									An email has been sent to your address. Your request
									will be pre-examined, and you will be notified about further steps.
								</p>
								<div className="flex justify-center">
									<Button
										text="Close"
										onClick={() => setIsOpen(false)}
										className="text-white bg-[#DC0813] hover:bg-[#DC0813] focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
}

export default page;
