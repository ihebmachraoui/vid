"use client";
import React, { useState, useEffect } from "react";
import * as images from "../../../assets/index";
import axios from "axios";
import Button from "../../../constants/Button/Button";
import Modal from "../../../constants/Modal/Modal";

function App() {
	const [paymentFailed, setPaymentFailed] = useState(false);
	const [appointmentId, setAppointmentId] = useState("");
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
			const amount = 100;
			const response = await axios.post(
				"https://sociosolution-api.vercel.app/generate-payment",
				{ amount, appointmentId },
			);
			const { link } = response.data.result;
			if (link) {
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
			<div className="mx-auto w-full pt-8 text-left bg-white flex flex-wrap lg:flex-nowrap">
				<div className="hidden lg:w-1/2 lg:flex w-full h-screen justify-center items-center">
					<img
						src={images.Appointment.src}
						alt="Consultation"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="bg-white rounded-lg p-4 max-w-md mx-auto mt-16 lg:px-8 lg:w-1/2 lg:max-w-none">
				<div class="bg-gradient-to-r from-[#E6EFE6] to-[#64a646] font-sans px-6 py-12">
      <div class="container mx-auto flex flex-col justify-center items-center text-center">
        <h2 class="text-white sm:text-4xl text-3xl font-bold mb-4">Payment Details</h2>
      
      </div>
    </div>
					<hr className="mb-4 border-gray-300" />
					<div className="flex justify-between mb-6 ">
						<h1 className="text-lg font-bold">Invoice</h1>
						<div className="text-gray-700 text-right">
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
					<div className="mb-8 bg-gray-50 p-4 rounded-lg">
						<h2 className="text-lg font-bold mb-2">Description:</h2>
						<div className="text-gray-700">{appointment.consultation}</div>
					</div>
					<table className="w-full mb-4 border border-gray-300">
						<thead>
							<tr className="bg-gray-100">
								<th className="text-left font-bold text-gray-700 p-2">Service</th>
								<th className="text-right font-bold text-gray-700 p-2">Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="text-left text-gray-700 p-2 border-t border-gray-300">
									Individual Therapy {appointment.urgent ? "-Urgent" : ""}
								</td>
								<td className="text-right text-gray-700 p-2 border-t border-gray-300">$100.00</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td className="text-left font-bold text-gray-700 p-2 border-t border-gray-300">Total</td>
								<td className="text-right font-bold text-gray-700 p-2 border-t border-gray-300">$100.00</td>
							</tr>
						</tfoot>
					</table>
					<div className="flex flex-col items-center mt-8">
						<Button
							text="Confirm Payment"
							className="cursor-pointer py-2"
							onClick={generateReq}
						/>
					</div>

					<div className="text-gray-700 mt-4 text-center">
						Thank you for your business! <br />
						Please remit payment before the booked day.
					</div>
					<div className="flex justify-center mt-4">
						<img
							src="https://sociosolution.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.248c666a.png&w=256&q=75"
							alt="Socially Logo"
							className="h-10 w-auto"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
