"use client";
import React , {useEffect , useState} from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Loader from '../components/Loader/Loader.jsx';
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
	const pathname = usePathname();
    const [loading, setLoading] = useState(false);

	useEffect(() => {
        // Set loading to true when the pathname changes
        setLoading(true);

        // Set a timeout to simulate loading time (e.g., 500ms)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Clean up timeout if pathname changes again before timeout
        return () => clearTimeout(timer);
    }, [pathname]);
	return (
	
			<html lang="en">
				<body className={inter.className} >
					{/* this is the clerk button , just ignore it for now */}
					{/* <div className="hidden">
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</div> */}
					{loading && <Loader/>}

					<div className="fixed z-40 w-full mx-auto justify-between">
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
