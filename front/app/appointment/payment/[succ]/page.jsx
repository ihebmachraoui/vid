"use client";
import React, { useState, useEffect } from "react";
import * as Images from "../../../../assets/index";
import axios from "axios";
function page() {
	const [appointmentId, setAppointmentId] = useState(null);
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
	const [paymentId, setPaymentId] = useState(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const pathname = window.location.pathname;
			const queryParams = new URLSearchParams(window.location.search);

			// Extract appointmentId from path using regular expression
			const match = pathname.match(/\/appointment\/payment\/([^/?]+)/);
			const id = match ? match[1] : null;
			setAppointmentId(id);

			// Extract payment_id from query parameters
			const paymentIdParam = queryParams.get("payment_id");
			setPaymentId(paymentIdParam);

			// Verify payment if payment_id is available
			if (paymentIdParam) {
				axios
					.get(`https://sociosolution-api.vercel.app/verify-payment/${paymentIdParam}`)
					.then((response) => {
						if (response.data.success) {
							// Handle successful payment verification
							console.log("Payment verified");
						} else {
							// Redirect to home page if payment verification fails
							window.location.href = "/";
						}
					})
					.catch((error) => {
						console.error("Error verifying payment:", error.message);
						// Redirect to home page in case of an error
						window.location.href = "/";
					});
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
			} catch (err) {
				console.log("Failed to fetch blog data.");
			}
		};

		if (appointmentId) {
			fetchAppointment(); // Fetch the single blog by ID
		}
	}, [appointmentId]);

    const printDiv = () => {
        // Get the printable div
        const printableContent = document.querySelector('.printable');
        
        // Create a new window for printing
        const printWindow = window.open('', '', 'height=600,width=800');

        // Write the HTML content to the new window
        printWindow.document.write('<html><head><title>Print</title>');
        
        // Add the current page styles to the print window
        const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
        styleSheets.forEach(sheet => {
            printWindow.document.write('<link rel="stylesheet" href="' + sheet.href + '" type="text/css" />');
        });
        
        // Add internal styles or additional styles if needed
        printWindow.document.write('<style>body { font-family: Arial, sans-serif; } .printable { margin: 20px; }</style>');
        
        printWindow.document.write('</head><body >');
        printWindow.document.write(printableContent.innerHTML);
        printWindow.document.write('</body></html>');

        // Close the document for writing and print
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    };
	return (
		<div>
			<div className="mx-auto max-w-screen-lg pt-8 text-center bg-white">
				<div className="relative mt-24 bg-[#f9f9f9] px-4 sm:px-8 sm:py-12">
					{/* <span className="rounded-full text-black font-medium px-3 mb-2 bg-[#e1ffd4] py-2">
							Blogs
						</span> */}
					<h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
						Payment Success
					</h1>
					<p className="mt-4  text-xs text-gray-600 leading-4 px-4 sm:px-12 sm:text-base sm:leading-8">
						Thank you for completing your payment. Our team will reach out to
						you shortly to provide further details and assist you with the next
						steps in the process. We appreciate your patience and look forward
						to guiding you through the procedure.
					</p>
					<div className="flex  items-center justify-center">
						<img src={Images.Checked.src} alt="D17" className="h-12 w-auto " />
					</div>
				</div>
				<div
					className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full bg-cover bg-center bg-repeat-round"
					style={{ backgroundImage: `url(${Images.Payment.src})` }}></div>
			</div>

			<div className="printable">
				<div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
					<h1 className="font-bold text-2xl my-4 text-center text-secondary">
						SOCIALLY Services
					</h1>
					<hr className="mb-2" />
					<div className="flex justify-between mb-6">
						<h1 className="text-lg font-bold">Invoice</h1>
						<div className="text-gray-700">
							<div>Date: {new Date().toLocaleDateString()}</div>
							<div>Invoice #: INV{appointmentId?.slice(-4)}</div>
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

					<div className="text-gray-700 mb-2">Thank you for your business!</div>
					<div className="text-gray-700 text-sm underline cursor-pointer" onClick={printDiv}>
						Print The Invoice Now If Needed
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
		</div>
	);
}

export default page;
