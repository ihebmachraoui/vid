"use client";
import React, { useState, useEffect } from "react";
import * as Images from "../../../../assets/index";
import axios from "axios";
import { useTranslation } from "react-i18next"; // import the translation hook

function page() {
	const { t } = useTranslation("global"); // initialize the translation hook
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

			const match = pathname.match(/\/appointment\/payment\/([^/?]+)/);
			const id = match ? match[1] : null;
			setAppointmentId(id);

			const paymentIdParam = queryParams.get("payment_id");
			setPaymentId(paymentIdParam);

			if (paymentIdParam) {
				axios
					.get(`https://sociosolution-api.vercel.app/verify-payment/${paymentIdParam}`)
					.then((response) => {
						if (response.data.success) {
							console.log("Payment verified");
						} else {
							window.location.href = "/";
						}
					})
					.catch((error) => {
						console.error("Error verifying payment:", error.message);
						window.location.href = "/";
					});
			}
		}
	}, []);

	useEffect(() => {
		const fetchAppointment = async () => {
			try {
				const response = await axios.get(
					`https://sociosolution-api.vercel.app/appointment/${appointmentId}`
				);
				setAppointment(response.data);
			} catch (err) {
				console.log("Failed to fetch blog data.");
			}
		};

		if (appointmentId) {
			fetchAppointment();
		}
	}, [appointmentId]);

	const printDiv = () => {
		const printableContent = document.querySelector(".printable");
		const printWindow = window.open("", "", "height=600,width=800");

		printWindow.document.write("<html><head><title>Print</title>");
		const styleSheets = document.querySelectorAll("link[rel='stylesheet']");
		styleSheets.forEach((sheet) => {
			printWindow.document.write(
				`<link rel="stylesheet" href="${sheet.href}" type="text/css" />`
			);
		});
		printWindow.document.write(
			"<style>body { font-family: Arial, sans-serif; } .printable { margin: 20px; }</style>"
		);
		printWindow.document.write("</head><body >");
		printWindow.document.write(printableContent.innerHTML);
		printWindow.document.write("</body></html>");
		printWindow.document.close();
		printWindow.focus();
		printWindow.print();
	};

	return (
		<div>
			<div className="mx-auto max-w-screen-lg pt-8 text-center bg-white">
				<div className="relative mt-24 bg-[#f9f9f9] px-4 sm:px-8 sm:py-12">
					<h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
						{t("succ.paymentSuccess.title")}
					</h1>
					<p className="mt-4 text-xs text-neutral-600 leading-4 px-4 sm:px-12 sm:text-base sm:leading-8">
						{t("succ.paymentSuccess.message")}
					</p>
					<div className="flex items-center justify-center">
						<img src={Images.Checked.src} alt="D17" className="h-12 w-auto" />
					</div>
				</div>
				<div
					className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full bg-cover bg-center bg-repeat-round"
					style={{ backgroundImage: `url(${Images.Payment.src})` }}
				></div>
			</div>

			<div className="printable">
				<div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
					<h1 className="font-bold text-2xl my-4 text-center text-secondary">
						{t("succ.invoice.title")}
					</h1>
					<hr className="mb-2" />
					<div className="flex justify-between mb-6">
						<h1 className="text-lg font-bold">{t("succ.invoice.invoice")}</h1>
						<div className="text-neutral-600">
							<div>{t("succ.invoice.date")}: {new Date().toLocaleDateString()}</div>
							<div>{t("succ.invoice.number")}: INV{appointmentId?.slice(-4)}</div>
						</div>
					</div>
					<div className="mb-8">
						<h2 className="text-lg font-bold mb-4">{t("succ.invoice.billTo")}</h2>
						<div className="text-neutral-600 mb-2">
							{appointment.firstName + " "}
							{appointment.lastName}
						</div>
						<div className="text-neutral-600">{appointment.email}</div>
					</div>
					<div className="mb-8">
						<h2 className="text-lg font-bold mb-2">{t("succ.invoice.description")}</h2>
						<div className="text-neutral-600">{appointment.consultation}</div>
					</div>
					<table className="w-full mb-4">
						<thead>
							<tr>
								<th className="text-left font-bold text-neutral-600">{t("succ.invoice.service")}</th>
								<th className="text-right font-bold text-neutral-600">{t("succ.invoice.amount")}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="text-left text-neutral-600">
									{t("succ.invoice.serviceDetails")}{" "}
									{appointment.urgent ? t("invoice.urgent") : ""}
								</td>
								<td className="text-right text-neutral-600">$100.00</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td className="text-left font-bold text-neutral-600">{t("succ.invoice.total")}</td>
								<td className="text-right font-bold text-neutral-600">$100.00</td>
							</tr>
						</tfoot>
					</table>
					<div className="text-neutral-600 mb-2">{t("succ.invoice.thankYou")}</div>
					<div
						className="text-neutral-600 text-sm underline cursor-pointer"
						onClick={printDiv}
					>
						{t("succ.invoice.print")}
					</div>
					<div className="flex flex-col mt-4">
						<img
							src="https://sociosolution.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.248c666a.png&w=256&q=75"
							className="h-10 w-auto self-center"
							alt="logo"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;
