"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
	return (
	
			<html lang="en">
				<body className={inter.className}>
					{/* this is the clerk button , just ignore it for now */}
					{/* <div className="hidden">
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</div> */}

					<div className="fixed z-50 w-full mx-auto justify-between">
						<Navbar />
					</div>

					{children}

					{/* <div className="fixed bottom-0 left-0 right-0 bg-pink-300 text-center p-2">
					<h1 className="text-black">This is Footer</h1>
				</div> */}
				<Footer/>
				</body>
			</html>
	
	);
}
