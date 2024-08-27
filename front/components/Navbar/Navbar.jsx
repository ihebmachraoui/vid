"use client";
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import * as images from "../../assets/index";
import { BiSupport } from "react-icons/bi";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Study Case", href: "/studycase" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
  

  const pathname = usePathname()

  useEffect(() => {
	const handleScroll = () => {
	  const scrollPosition = window.scrollY;

	  // Set isScrolled based on scroll position
	  if (scrollPosition > 50 || pathname !== "/") {
		setIsScrolled(true);
	  } else {
		setIsScrolled(false);
	  }
	};

	if (typeof window !== "undefined") {
	  // Check the initial scroll position and path
	  handleScroll(); 

	  window.addEventListener("scroll", handleScroll);

	  // Clean up the event listener on unmount
	  return () => {
		window.removeEventListener("scroll", handleScroll);
	  };
	}
  }, [pathname]);

  return (
    <>
      <nav
        className={`relative transition-colors duration-500 ${
          isScrolled ? "bg-white shadow-xl" : "bg-transparent"
        }`}
      >
        <div
          className={`max-w-screen-xl flex flex-wrap items-center justify-between custom2:justify-between custom1:justify-center mx-auto transition-all duration-500 ${
            isScrolled ? "" : "p-4"
          }`}
        >
          <Image
            src={images.Logo.src}
            alt="Company Logo"
            width={220}
            height={100}
            priority
            className="logo"
          />

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="hidden lg:flex justify-center items-center px-8">
              <BiSupport className="text-4xl text-[#83cc61] font-bold mx-2" />
              <p
                type="button"
                className={`text-center font-medium rounded-full text-sm py-2 flex flex-col items-center 
                  transition-colors duration-500 ${
                    isScrolled ? "text-black" : "text-white"
                  } focus:outline-none dark:hover:drop-shadow-md`}
              >
                <span>Need help?</span>
                <span className="font-semibold text-base">+216 28 888 490</span>
              </p>
            </div>
            <a
  href="/appointment"
  className="hidden lg:flex items-center justify-center text-white bg-[#83cc61] focus:outline-none font-medium rounded-full text-sm px-8 py-4 text-center dark:hover:shadow-booking cursor-pointer"
>
  Make Appointment
</a>


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
                  <Link href={link.href} passHref>
                    <span
                      className={`block mx-auto py-2 px-3 text-white hover:bg-gray-100 text-base text-center ${
                        link.active ? "text-white" : "text-gray-900"
                      }`}
                      aria-current={link.active ? "page" : undefined}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="relative">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="flex items-center mx-auto py-2 px-3 text-white text-base text-center"
                >
                  Services
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 w-full bg-white divide-y divide-gray-100 rounded-lg shadow ${
                    dropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link href="#" passHref>
                        <span className="block px-4 py-2 hover:bg-gray-100">
                          Service 1
                        </span>
                      </Link>
                      <Link href="#" passHref>
                        <span className="block px-4 py-2 hover:bg-gray-100">
                          Service 2
                        </span>
                      </Link>
                      <Link href="#" passHref>
                        <span className="block px-4 py-2 hover:bg-gray-100">
                          Service 3
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border lg:bg-transparent border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white dark:border-gray-700">
              {links.slice(0, 2).map((link, index) => (
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
              <li className="relative">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className={`flex items-center justify-between w-full text-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 transition-colors duration-500 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  Services
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-44 z-50 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
                    dropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <Link href="#" passHref>
                        <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Service X
                        </span>
                      </Link>
                      <Link href="#" passHref>
                        <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Service X
                        </span>
                      </Link>
                      <Link href="#" passHref>
                        <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Service X
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {links.slice(2).map((link, index) => (
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
