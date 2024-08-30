"use client";
import React, { useState, useEffect } from "react";
import * as images from "../../../assets/index";
import axios from "axios";
import Button from "../../../constants/Button/Button";
import Modal from "../../../constants/Modal/Modal";
function app() {
	const [paymentFailed, setPaymentFailed] = useState(false);
	const [appointmentId, setAppointmentId] = useState("");
	const [found, setFound] = useState(true);
	const [appointment, setAppointment] = useState({
		firstName: "John",
		lastName: "Doe",
		phoneNumber: "123-456-7890",
		email: "john.doe@example.com",
		age: "30",
		date: "2024-09-15",
		time: "14:00",
		consultation: "General check-up",
		urgent: "no", // default value for radio button
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			const pathname = window.location.pathname;

			// Regular expression to extract appointmentId from path
			const match = pathname.match(/\/appointment\/([^/]+)/);
			const id = match ? match[1] : null;
			setAppointmentId(id);

			// Check if URL contains the payment_id query parameter
			const queryParams = new URLSearchParams(window.location.search);
			const paymentId = queryParams.get("payment_id");

			if (paymentId) {
				setPaymentFailed(true);
			}
		}
	}, []);

	useEffect(() => {
		const fetchAppointment = async () => {
			try {
				const response = await axios.get(
					`https://sociosolution-api.vercel.app/appointment/${appointmentId}`,
				);
				setAppointment(response.data);
				console.log("aaaa", response.data);
			} catch (err) {
				console.log("Failed to fetch blog data.");
			}
		};

		if (appointmentId) {
			fetchAppointment(); // Fetch the single blog by ID
		}
	}, [appointmentId]);
	const generateReq = async () => {
		try {
			// Define the amount to send
			const amount = 100;

			// Send POST request to your backend with the amount
			const response = await axios.post(
				"https://sociosolution-api.vercel.app/generate-payment",
				{ amount, appointmentId },
			);
			console.log(response);

			// Check if the response contains a link
			const { link } = response.data.result;

			if (link) {
				// Redirect to the received link if on the client side
				if (typeof window !== "undefined") {
					window.location.href = link;
				} else {
					console.error("Window object is not available");
				}
			} else {
				console.error("No link received in response");
			}
		} catch (error) {
			console.error("Error generating payment:", error.message);
		}
	};

	return (
		<>			
			{paymentFailed && (
				<Modal
					setPaymentFailed={setPaymentFailed}
					paymentFailed={paymentFailed}
				/>
			)}
			<div className="mx-auto max-w-screen-lg pt-8 text-center bg-white">
				<div className="relative mt-24 bg-[#f9f9f9] px-4 sm:px-8 sm:py-12">
					{/* <span className="rounded-full text-black font-medium px-3 mb-2 bg-[#e1ffd4] py-2">
							Blogs
						</span> */}
					<h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
						Continue Payment
					</h1>
					<p className="mt-4 pb-2 text-xs text-gray-600 leading-6 px-4 sm:px-12 sm:text-base sm:leading-8">
						You can now proceed with payment. Choose from major credit cards
						like Visa and MasterCard, or use alternative methods such as D17 and
						e-Dinar. Follow the instructions to complete your payment securely.
					</p>
				</div>
				<div
					className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full bg-cover bg-center bg-repeat-round"
					style={{ backgroundImage: `url(${images.Payment.src})` }}></div>

				<div className="flex flex-wrap items-center justify-center space-x-4 space-y-2">
					<img
						src="https://d17.tn/images/logod17bnk.png"
						alt="D17"
						className="h-8 w-auto mt-1"
					/>
					<img
						src="https://www.biat.com.tn/sites/default/files/logobiat_0_0.png"
						alt="BIAT"
						className="h-8 w-auto"
					/>
					<img
						src="https://www.attijaribank.com.tn/sites/default/files/Logo_attijari_0.png"
						alt="Attijari"
						className="h-8 w-auto"
					/>
					<img
						src="https://www.bh.com.tn/sites/all/themes/bhabitat/logo.png"
						alt="BH"
						className="h-8 w-auto"
					/>
					<img
						src="https://www.banquezitouna.com/themes/custom/particuliers/logo.svg"
						alt="Zitouna"
						className="h-8 w-auto"
					/>
				</div>
			</div>


			<div className="">
				<div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
					<h1 className="font-bold text-2xl my-4 text-center text-secondary">
						SOCIALLY Services
					</h1>
					<hr className="mb-2" />
					<div className="flex justify-between mb-6">
						<h1 className="text-lg font-bold">Invoice</h1>
						<div className="text-gray-700">
							<div>Date: {new Date().toLocaleDateString()}</div>
							<div>Invoice #: INV{appointmentId.slice(-4)}</div>
						</div>
					</div>
					<div className="mb-8">
						<h2 className="text-lg font-bold mb-4">Bill To:</h2>
						<div className="text-gray-700 mb-2">
							{appointment.firstName + " "}
							{appointment.lastName}
						</div>
						<div className="text-gray-700">{appointment.email}</div>
					</div>
					<div className="mb-8">
						<h2 className="text-lg font-bold mb-2">Description:</h2>
						<div className="text-gray-700">{appointment.consultation}</div>
					</div>
					<table className="w-full mb-4">
						<thead>
							<tr>
								<th className="text-left font-bold text-gray-700">Service</th>
								<th className="text-right font-bold text-gray-700">Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="text-left text-gray-700">
									Individual Therapy {appointment.urgent ? "-Urgent" : ""}{" "}
								</td>
								<td className="text-right text-gray-700">$100.00</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td className="text-left font-bold text-gray-700">Total</td>
								<td className="text-right font-bold text-gray-700">$100.00</td>
							</tr>
						</tfoot>
					</table>
					<div className="flex flex-col items-center mb-2">
						<Button
							text="Confirm"
							className={"cursor-pointer !py-2"}
							onClick={generateReq}
						/>
					</div>

					<div className="text-gray-700 mb-2">Thank you for your business!</div>
					<div className="text-gray-700 text-sm">
						Please remit payment before the booked day.
					</div>
					<div className="flex flex-col mt-4">
						<img
							src="https://sociosolution.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.248c666a.png&w=256&q=75"
							className="h-10 w-auto self-center"
							alt="log"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default app;
