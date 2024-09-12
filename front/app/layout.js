"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Loader from "../components/Loader/Loader.jsx";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";
import PaymentCards from "../components/PaymentCards/PaymentCards";
import FAQ from "../components/FAQ/Faq";
import CookiePolicy from "../constants/Cookies/Cookies";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);  // Start loading when pathname changes

    // Simulate loading time (e.g., 500ms)
    const timer = setTimeout(() => {
      setLoading(false);  // Set loading to false after timeout
    }, 1000);

    return () => clearTimeout(timer);  // Clean up on component unmount
  }, [pathname]);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Ignore the Clerk button */}
        {/* <div className="hidden">
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</div> */}
        {/* Show Loader while loading */}
        {loading && <Loader />}

        {/* Render content only after loading is finished */}
        {!loading && (
          <>
            <CookiePolicy />

            <div className="fixed z-40 w-full mx-auto justify-between">
              <Navbar />
            </div>

            {/* Render children components */}
            
            {children}
            
            <FAQ />
            <PaymentCards />
            <Newsletter />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
