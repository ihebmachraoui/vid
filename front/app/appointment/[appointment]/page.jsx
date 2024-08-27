"use client";
import React, { useState, useEffect } from "react";
import * as images from "../../../assets/index";

function app() {
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
			const segments = pathname.split("/");
			const id = segments.pop();
			setAppointmentId(id);
		}
	}, []);

	useEffect(() => {
		const fetchAppointment = async () => {
			try {
				const response = await axios.get(
					`https://localhost:3100/apppointment/${appointmentId}`,
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
	return (
		<>
			<div className="mx-auto max-w-screen-lg pt-8 text-center bg-white">
				<div className="relative mt-24 bg-[#f9f9f9] px-4 sm:px-8 sm:py-12">
					{/* <span className="rounded-full text-black font-medium px-3 mb-2 bg-[#e1ffd4] py-2">
        Blogs
      </span> */}
					<h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
						Continue To Payment
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
			</div>
			<div>
				
			</div>
		</>
	);
}

export default app;
