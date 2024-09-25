import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation("global");

  const footerLinks = [
    { href: "/", text: t("Footer.home") },
    { href: "/about", text: t("Footer.about") },
    { href: "/services", text: t("Footer.services") },
    { href: "/study-case", text: t("Footer.studyCase") },
    { href: "/blogs", text: t("Footer.blogs") },
  ];

  const helpLinks = [
    { href: "/help-center", text: t("Footer.helpCenter") },
    { href: "/faq", text: t("Footer.faq") },
    { href: "/careers", text: t("Footer.careers") },
    { href: "/feedback", text: t("Footer.feedback") },
    { href: "/medical-cases", text: t("Footer.medicalCases") },
  ];

  const policyLinks = [
    { href: "/how-to-pay", text: t("Footer.howToPay") },
    { href: "/privacy-policy", text: t("Footer.privacyPolicy") },
    { href: "/cookie-policy", text: t("Footer.cookiePolicy") },
    { href: "/terms-and-conditions", text: t("Footer.termsAndConditions") },
  ];

  const contactInfo = [
    { href: "/contact", text: t("Footer.contactUs") },
    { href: "tel:+21628888490", text: "+216 28 888 490" },
    { href: "tel:+21678009900", text: "+216 78 009 900" },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: <FaFacebook className="w-4 h-4" aria-hidden="true" />,
      label: "Facebook page",
    },
    {
      href: "https://instagram.com",
      icon: <FaInstagram className="w-4 h-4" aria-hidden="true" />,
      label: "Instagram account",
    },
    {
      href: "https://twitter.com",
      icon: <BsTwitterX className="w-4 h-4" aria-hidden="true" />,
      label: "Twitter page",
    },
    {
      href: "https://wa.me/21628888490",
      icon: <BsWhatsapp className="w-4 h-4" aria-hidden="true" />,
      label: "WhatsApp page",
    },
  ];

  const currentYear = new Date().getFullYear();

  const renderLinks = (links) => (
    <ul className="text-white">
      {links.map((link, index) => (
        <li key={index} className="mb-4">
          <a href={link.href} className="hover:underline">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );

  const renderSocialIcons = () => (
    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
      {socialLinks.map((social, index) => (
        <a key={index} href={social.href} className="text-white">
          {social.icon}
          <span className="sr-only">{social.label}</span>
        </a>
      ))}
    </div>
  );

  return (
    <footer className="bg-[#296747] uppercase">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 lg:px-0">
          {renderLinks(footerLinks)}
          {renderLinks(helpLinks)}
          {renderLinks(policyLinks)}
          <ul className="text-white">
            {contactInfo.map((contact, index) => (
              <li key={index} className="mb-4">
                <a href={contact.href} className="hover:underline">
                  {contact.text}
                </a>
              </li>
            ))}
            <li className="mb-4">
              <a className="playstore-button btn-round" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="texts">
                  <span className="text-1">{t("Footer.getItOn")}</span>
                  <span className="text-2">{t("Footer.googlePlay")}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="px-4 py-6 bg-[#296747] dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">
            © {currentYear} <a href="https://flowbite.com/">SociAlly</a>. {t("Footer.allRightsReserved")}
          </span>
          {renderSocialIcons()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
