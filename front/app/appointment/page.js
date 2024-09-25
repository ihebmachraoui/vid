"use client";
import React, { useState } from "react";
import Button from "../../constants/Button/Button";
import Form from "./Form";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie"; // Ensure you have this library available
import { useTranslation } from "react-i18next";

function page() {
	const { t } = useTranslation("global");

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
			// Send the POST request
			const response = await axios.post(
				"https://sociosolution-api.vercel.app/appointment",
				formData,
			);

			// If the request is successful, send the email and reset form data
			await sendEmail(response.data._id);

			// Show the loading state and reset form data after a short delay
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
		} catch (error) {
			// Handle errors
			alert("Error sending request: " + error.message);
		}
	};
	const sendEmail = async (id) => {
		const timenow = new Date().getFullYear();
		const lang = Cookies.get('lang') || "en"; // Default to 'en' if cookie is not found

		const emailContents = {
			en: `
            <style>
               <style>
		  .carousel-cell {
			width: 100%;
			height: 100%;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
		  }
		  .hero-slider {
			width: 100%;
		  }
		  .container {
			max-width: 32rem;
			padding: 2rem 1.5rem;
			margin: 0 auto;
			background-color: #ffffff;
			background-color: var(--bg-dark, #1a202c); /* Dark mode support */
		  }
		  .logo {
			width: auto;
			height: 3rem;
		  }
		  .logo.sm {
			height: 3.5rem;
		  }
		  .content {
			margin-top: 2rem;
		  }
		  .greeting {
			color: #4a5568;
			color: var(--text-dark, #edf2f7); /* Dark mode support */
		  }
		  .message {
			margin-top: 0.5rem;
			line-height: 1.625;
			color: #718096;
			color: var(--text-light, #a0aec0); /* Dark mode support */
		  }
		  .highlight {
			font-weight: 600;
		  }
		  .pay-link:hover {
			background-color: #1e2233;
		  }
		  .pay-link {
			padding: 8px 12px;
			border: 1px solid #262941;
			border-radius: 2px;
			font-family: Helvetica, Arial, sans-serif;
			font-size: 14px;
			color: #ffffff;
			background-color: #262941;
			text-decoration: none;
			font-weight: bold;
			display: inline-block;
			margin-top: 1rem;
		  }
		  .pay-button {
			padding: 0.5rem 1.5rem;
			margin-top: 1rem;
			font-size: 0.875rem;
			font-weight: 500;
			text-transform: capitalize;
			color: #ffffff;
			background-color: #38a169;
			border-radius: 0.5rem;
			transition: background-color 0.3s ease;
		  }
		  .pay-button:hover {
			background-color: #2f855a;
		  }
		  .pay-button:focus {
			outline: none;
			box-shadow: 0 0 0 4px rgba(72, 187, 120, 0.5);
		  }
		  .thank-you {
			margin-top: 2rem;
			color: #718096;
			color: var(--text-light, #a0aec0); /* Dark mode support */
		  }
		  .footer {
			margin-top: 2rem;
		  }
		  .email-info {
			color: #a0aec0;
			color: var(--text-muted, #4a5568); /* Dark mode support */
		  }
		  .email-link {
			color: #3182ce;
			color: var(--link-dark, #63b3ed); /* Dark mode support */
			text-decoration: underline;
		  }
		  .email-link:hover {
			color: #2b6cb0;
			color: var(--link-hover, #4299e1); /* Dark mode support */
		  }
		  .copyright {
			margin-top: 0.75rem;
			color: #a0aec0;
			color: var(--text-muted, #4a5568); /* Dark mode support */
		  }
		</style>
            </style>
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
        `,
			fr: `
            <style>
                <style>
		  .carousel-cell {
			width: 100%;
			height: 100%;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
		  }
		  .hero-slider {
			width: 100%;
		  }
		  .container {
			max-width: 32rem;
			padding: 2rem 1.5rem;
			margin: 0 auto;
			background-color: #ffffff;
			background-color: var(--bg-dark, #1a202c); /* Dark mode support */
		  }
		  .logo {
			width: auto;
			height: 3rem;
		  }
		  .logo.sm {
			height: 3.5rem;
		  }
		  .content {
			margin-top: 2rem;
		  }
		  .greeting {
			color: #4a5568;
			color: var(--text-dark, #edf2f7); /* Dark mode support */
		  }
		  .message {
			margin-top: 0.5rem;
			line-height: 1.625;
			color: #718096;
			color: var(--text-light, #a0aec0); /* Dark mode support */
		  }
		  .highlight {
			font-weight: 600;
		  }
		  .pay-link:hover {
			background-color: #1e2233;
		  }
		  .pay-link {
			padding: 8px 12px;
			border: 1px solid #262941;
			border-radius: 2px;
			font-family: Helvetica, Arial, sans-serif;
			font-size: 14px;
			color: #ffffff;
			background-color: #262941;
			text-decoration: none;
			font-weight: bold;
			display: inline-block;
			margin-top: 1rem;
		  }
		  .pay-button {
			padding: 0.5rem 1.5rem;
			margin-top: 1rem;
			font-size: 0.875rem;
			font-weight: 500;
			text-transform: capitalize;
			color: #ffffff;
			background-color: #38a169;
			border-radius: 0.5rem;
			transition: background-color 0.3s ease;
		  }
		  .pay-button:hover {
			background-color: #2f855a;
		  }
		  .pay-button:focus {
			outline: none;
			box-shadow: 0 0 0 4px rgba(72, 187, 120, 0.5);
		  }
		  .thank-you {
			margin-top: 2rem;
			color: #718096;
			color: var(--text-light, #a0aec0); /* Dark mode support */
		  }
		  .footer {
			margin-top: 2rem;
		  }
		  .email-info {
			color: #a0aec0;
			color: var(--text-muted, #4a5568); /* Dark mode support */
		  }
		  .email-link {
			color: #3182ce;
			color: var(--link-dark, #63b3ed); /* Dark mode support */
			text-decoration: underline;
		  }
		  .email-link:hover {
			color: #2b6cb0;
			color: var(--link-hover, #4299e1); /* Dark mode support */
		  }
		  .copyright {
			margin-top: 0.75rem;
			color: #a0aec0;
			color: var(--text-muted, #4a5568); /* Dark mode support */
		  }
		</style>
            </style>
            <section className="container">
                <header>
                    <a href="http://sociosolution.vercel.app/" target="_blank">
                        <img className="logo" src="https://sociosolution.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.248c666a.png&w=256&q=75" alt="" />
                    </a>
                </header>
                <main className="content">
                    <h2 className="greeting">Bonjour ${formData.firstName},</h2>
                    <p className="message">
                        Vous avez déployé votre demande avec succès. Continuez vers le paiement pour entrer en contact avec notre
                        <span className="highlight">Expert SociAlly</span>.
                    </p>
                    <a href="https://sociosolution.vercel.app/appointment/${id}" target="_blank" className="pay-link">
                        Cliquez pour payer
                    </a>
                    <p className="thank-you">
                        Merci de faire confiance à, <br />
                        Équipe SociAlly
                    </p>
                </main>
                <footer className="footer">
                    <p className="email-info">
                        Cet email a été envoyé à
                        <a href="#" className="email-link" target="_blank">${formData.email}</a>.
                        Si vous préférez ne pas recevoir ce genre d'email, vous pouvez
                        <a href="#" className="email-link">vous désinscrire</a> ou
                        <a href="#" className="email-link">gérer vos préférences email</a>.
                    </p>
                    <p className="copyright">
                        © ${timenow} SociAlly. Tous droits réservés.
                    </p>
                </footer>
            </section>
        `,
			ar: `
            <style>
                <style>
		  .carousel-cell {
			width: 100%;
			height: 100%;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
		  }
		  .hero-slider {
			width: 100%;
		  }
		  .container {
			max-width: 32rem;
			padding: 2rem 1.5rem;
			margin: 0 auto;
			background-color: #ffffff;
			background-color: var(--bg-dark, #1a202c); /* Dark mode support */
		  }
		  .logo {
			width: auto;
			height: 3rem;
		  }
		  .logo.sm {
			height: 3.5rem;
		  }
		  .content {
			margin-top: 2rem;
		  }
		  .greeting {
			color: #4a5568;
			color: var(--text-dark, #edf2f7); /* Dark mode support */
		  }
		  .message {
			margin-top: 0.5rem;
			line-height: 1.625;
			color: #718096;
			color: var(--text-light, #a0aec0); /* Dark mode support */
		  }
		  .highlight {
			font-weight: 600;
		  }
		  .pay-link:hover {
			background-color: #1e2233;
		  }
		  .pay-link {
			padding: 8px 12px;
			border: 1px solid #262941;
			border-radius: 2px;
			font-family: Helvetica, Arial, sans-serif;
			font-size: 14px;
			color: #ffffff;
			background-color: #262941;
			text-decoration: none;
			font-weight: bold;
			display: inline-block;
			margin-top: 1rem;
		  }
		  .pay-button {
			padding: 0.5rem 1.5rem;
			margin-top: 1rem;
			font-size: 0.875rem;
			font-weight: 500;
			text-transform: capitalize;
			color: #ffffff;
			background-color: #38a169;
			border-radius: 0.5rem;
			transition: background-color 0.3s ease;
		  }
		  .pay-button:hover {
			background-color: #2f855a;
		  }
		  .pay-button:focus {
			outline: none;
			box-shadow: 0 0 0 4px rgba(72, 187, 120, 0.5);
		  }
		  .thank-you {
			margin-top: 2rem;
			color: #718096;
			color: var(--text-light, #a0aec0); /* Dark mode support */
		  }
		  .footer {
			margin-top: 2rem;
		  }
		  .email-info {
			color: #a0aec0;
			color: var(--text-muted, #4a5568); /* Dark mode support */
		  }
		  .email-link {
			color: #3182ce;
			color: var(--link-dark, #63b3ed); /* Dark mode support */
			text-decoration: underline;
		  }
		  .email-link:hover {
			color: #2b6cb0;
			color: var(--link-hover, #4299e1); /* Dark mode support */
		  }
		  .copyright {
			margin-top: 0.75rem;
			color: #a0aec0;
			color: var(--text-muted, #4a5568); /* Dark mode support */
		  }
		</style>
            </style>
            <section className="container">
                <header>
                    <a href="http://sociosolution.vercel.app/" target="_blank">
                        <img className="logo" src="https://sociosolution.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.248c666a.png&w=256&q=75" alt="" />
                    </a>
                </header>
                <main className="content">
                    <h2 className="greeting">مرحباً ${formData.firstName},</h2>
                    <p className="message">
                        لقد قمت بنجاح بإرسال طلبك. تابع الدفع للتواصل مع 
                        <span className="highlight">خبير SociAlly</span>.
                    </p>
                    <a href="https://sociosolution.vercel.app/appointment/${id}" target="_blank" className="pay-link">
                        انقر للدفع
                    </a>
                    <p className="thank-you">
                        شكراً لثقتك، <br />
                        فريق SociAlly
                    </p>
                </main>
                <footer className="footer">
                    <p className="email-info">
                        تم إرسال هذا البريد الإلكتروني إلى
                        <a href="#" className="email-link" target="_blank">${formData.email}</a>.
                        إذا كنت تفضل عدم تلقي هذا النوع من البريد الإلكتروني، يمكنك
                        <a href="#" className="email-link">إلغاء الاشتراك</a> أو
                        <a href="#" className="email-link">إدارة تفضيلات بريدك الإلكتروني</a>.
                    </p>
                    <p className="copyright">
                        © ${timenow} SociAlly. جميع الحقوق محفوظة.
                    </p>
                </footer>
            </section>
        `,
		};

		// Select email content based on language
		const emailContent = emailContents[lang] || emailContents.en; // Default to English if not found

		try {
			await axios.post("https://sociosolution-api.vercel.app/send-email", {
				to: formData.email,
				subject: "Booking an appointment",
				html: emailContent,
			});
			console.log("Email sent successfully");
		} catch (error) {

			alert("Error sending email:", error.message);
			if (typeof window !== "undefined") {
				window.location.reload
			}
		}
	};

	return (
		<>
		<div className="flex justify-center items-center min-h-screen bg-gray-100 lg:pt-11">
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
					className="w-12 h-12 text-gray-200 animate-spin dark:text-neutral-600 fill-[#64a646]"
					viewBox="0 0 100 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				  >
					<path
					  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
					  fill="currentColor"
					/>
					<path
					  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
					  fill="currentFill"
					/>
				  </svg>
				  <p className="text-lg font-medium text-neutral-600">
					{t('appointment.submitting')}
				  </p>
				</div>
			  ) : (
				<div>
				  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
					{t('appointment.requestSent')}
				  </h3>
				  <p className="text-base text-gray-500 mb-6">
					{t('appointment.emailSent')}
				  </p>
				  <div className="flex justify-center">
					<Button
					  text={t('appointment.close')}
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
