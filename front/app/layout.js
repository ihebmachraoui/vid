"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css"; // Import global styles
// import './utils/i18n'; // Uncomment if needed
import Navbar from "../components/Navbar/Navbar.jsx";
import Loader from "../components/Loader/Loader.jsx";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";
import PaymentCards from "../components/PaymentCards/PaymentCards";
import FAQ from "../components/FAQ/Faq";
import CookiePolicy from "../constants/Cookies/Cookies";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import i18next from "i18next";
import global_en from "../public/translations/en/translation.json";
import global_ar from "../public/translations/ar/translation.json";
import global_fr from "../public/translations/fr/translation.json";
import { I18nextProvider } from "react-i18next";
import Cookies from 'js-cookie'; // Import js-cookie at the top

const inter = Inter({ subsets: ["latin"] });
const getInitialLanguage = () => {
  const langFromCookie = Cookies.get('lang');
  return langFromCookie || 'en'; // Default to Arabic if no cookie
};
i18next.init({
  interpolation: { escapeValue: false }, // Fix the typo here: escapeValue
  lng: getInitialLanguage(), // Set default language to Arabic
  resources: {
    en: {
      global: global_en,
    },
    ar: {
      global: global_ar,
    },
    fr: {
      global: global_fr,
    },
  },
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [isRTL, setIsRTL] = useState(i18next.language === "ar"); // Check if language is Arabic

  useEffect(() => {
    setLoading(true); // Start loading when pathname changes

    // Simulate loading time (e.g., 500ms)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after timeout
    }, 1000);

    return () => clearTimeout(timer); // Clean up on component unmount
  }, [pathname]);

  useEffect(() => {
    // Detect language change
    setIsRTL(i18next.language === "ar");
  }, [i18next.language]); // Re-check when the language changes

  return (
    <html lang={i18next.language} dir={isRTL ? "rtl" : "ltr"}>
      {/* Dynamically set dir to rtl for Arabic */}
      <body className={`${inter.className} ${isRTL ? "rtl" : ""}`}>
        <I18nextProvider i18n={i18next}>
          <AudioPlayer /> {/* Add the AudioPlayer here */}
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
        </I18nextProvider>
      </body>
    </html>
  );
}
