"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import * as images from "../../assets/index";
import { BiSupport } from "react-icons/bi";
import Flags from "../../constants/Flags/Flags";
import { useTranslation } from "react-i18next"; // Import translation

const Navbar = () => {
  const { t } = useTranslation("global"); // Using translation for navbar content
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const links = [
    { name: t("NavBar.home"), href: "/" },
    { name: t("NavBar.about"), href: "/about" },
    { name: t("NavBar.appointment"), href: "/appointment" },
    { name: t("NavBar.services"), href: "/services" },
    { name: t("NavBar.studyCase"), href: "/studycase" },
    { name: t("NavBar.blog"), href: "/blog" },
    { name: t("NavBar.contact"), href: "/contact" },
  ];

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50 || pathname !== "/") {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (typeof window !== "undefined") {
      handleScroll();

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname]);

  return (
    <>
      <nav
        className={`relative transition-colors duration-500 uppercase ${
          isScrolled ? "bg-white shadow-xl px-4" : "bg-transparent"
        }`}
      >
        <div
          className={`max-w-screen-xl !flex flex-wrap items-center justify-between custom2:justify-between custom1:justify-center mx-auto transition-all duration-500 ${
            isScrolled ? "" : "p-4"
          }`}
        >
          <Image
            src={images.Logo.src}
            alt="SociAlly Logo"
            width={200}
            height={100}
            priority
            className="logo"
          />

          <div className="flex justify-center items-center  md:order-2 space-x-3 rtl:space-x-reverse">
            <div className="hidden lg:flex justify-center items-center px-8">
              <BiSupport className="text-4xl text-[#83cc61] font-bold mx-2" />
              <p
                type="button"
                className={`text-center font-medium rounded-full text-xs  flex flex-col items-center 
                  transition-colors duration-500 ${
                    isScrolled ? "text-black" : "text-white"
                  } focus:outline-none dark:hover:drop-shadow-md`}
              >
                <span>{t('NavBar.support.needHelp')}</span>
                <span className="font-semibold  text-sm">
                  {t("NavBar.support.phoneNumber")}
                </span>
              </p>
            </div>
            <a
              href="/appointment"
              className="hidden lg:flex items-center btn-width  justify-center text-white bg-[#296747] focus:outline-none font-medium  text-sm py-4 text-center dark:hover:shadow-booking cursor-pointer"
            >
              {t("NavBar.appointmentBtn")}
            </a>
            <Flags className="" />
            <button
              type="button"
              className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm transition-colors duration-500 ${
                isScrolled ? "text-black" : "text-white"
              } rounded-lg md:hidden focus:outline-none`}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          
          </div>

          <div
            className={`fixed inset-0 z-50 bg-[#64a646] flex flex-col transition-transform transform ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            id="navbar-cta"
          >
            <button
              type="button"
              className="text-sm mt-8 p-4 text-white"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l12 12M1 13L13 1"
                />
              </svg>
            </button>
            <ul className="flex flex-col p-4 space-y-4 md:hidden">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} onClick={toggleMobileMenu}>
                    <span
                      className={`block mx-auto py-2 px-3 text-white hover:bg-gray-700 text-base text-center  ${
                        link.active ? "text-white" : "text-gray-900"
                      }`}
                      aria-current={link.active ? "page" : undefined}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border lg:bg-transparent border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white dark:border-gray-700">
              {links
                .filter((link) => link.name !== t("NavBar.appointment"))
                .slice(0, 2)
                .map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} passHref>
                      <span
                        className={`block py-2 px-3 md:p-0 rounded transition-colors duration-500 ${
                          isScrolled ? "text-black" : "text-white"
                        } hover:bg-gray-100 md:hover:bg-transparent text-sm ${
                          link.active ? "text-white" : "text-gray-900"
                        } ${link.active ? "md:bg-transparent" : ""}`}
                        aria-current={link.active ? "page" : undefined}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}

              {links
                .filter((link) => link.name !== t("NavBar.appointment"))
                .slice(2)
                .map((link, index) => (
                  <li key={index + 2}>
                    <Link href={link.href} passHref>
                      <span
                        className={`block py-2 px-3 md:p-0 rounded transition-colors duration-500 ${
                          isScrolled ? "text-black" : "text-white"
                        } hover:bg-gray-600 md:hover:bg-transparent text-sm ${
                          link.active ? "text-white" : "text-gray-900"
                        } ${link.active ? "md:bg-transparent" : ""}`}
                        aria-current={link.active ? "page" : undefined}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
