import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Cookies from 'js-cookie';
import Link from 'next/link';

const CookiePolicy = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept all"
      declineButtonText="Reject all"
      cookieName="user_cookie_consent"
      style={{
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "0.75rem",
        left: "1rem",
        bottom: "rem",
        maxWidth: "28rem",
        padding: "1rem",
        position: "fixed",
        margin: "20px auto",
        zIndex: 1000
      }}
      buttonStyle={{
        backgroundColor: "#296747",
        color: "#ffffff",
        fontSize: "0.75rem",
        fontWeight: "500",
        borderRadius: "0.5rem",
        padding: "0.625rem 1rem",
        transition: "background-color 0.3s"
      }}
      declineButtonStyle={{
        backgroundColor: "#ffffff",
        color: "#4b5563",
        fontSize: "0.75rem",
        fontWeight: "500",
        borderRadius: "0.5rem",
        padding: "0.625rem 1rem",
        border: "1px solid #e5e7eb",
        transition: "background-color 0.3s"
      }}
      buttonWrapperClasses="flex gap-4"
      declineButtonWrapperClasses="flex gap-4"
      onAccept={() => {
        Cookies.set('cookies_accepted', 'true', { expires: 365 });
      }}
      onDecline={() => {
        Cookies.set('cookies_accepted', 'false', { expires: 365 });
      }}
      onCookieConsent={() => {
        console.log('Cookie preferences button clicked');
      }}
      enableDeclineButton
      flipButtons
    >
      <div className="font-semibold text-neutral-600 dark:text-white">
        🍪 We use cookies!
      </div>
      <p className="mt-4 text-sm text-neutral-600 dark:text-gray-300">
      To enhance your experience on our sociologist consulting website, we use essential cookies for site functionality and tracking cookies to understand your interactions. Tracking cookies are set only with your consent. 
      For more details, check our
      <Link href="/" className='mx-2 underline text-[#296747] font-medium'>
       Privacy Policy.
        </Link>
      </p>
      <p className="mt-3 text-sm text-neutral-600 dark:text-gray-300">
        Closing this modal default settings will be saved.
      </p>
    </CookieConsent>
  );
};

export default CookiePolicy;
