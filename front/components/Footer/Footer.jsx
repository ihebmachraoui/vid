import React from "react";
import * as images from "../../assets/index";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 border border-t mt-8">
        <div className="max-w-screen-xl mx-auto pt-8 pb-8 px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 bg-[#83cc61] py-6 px-8 rounded-2xl">
              <img src={images.Logo.src} className="w-52" alt="Socially_Logo" />
              <p className="text-white leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                amet voluptas voluptatem rerum, delectus impedit quos
                dignissimos consequatur alias aperiam molestias.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white text-left">
                General Links
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2 text-left">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline "
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline "
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline "
                >
                  Our Services
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline "
                >
                  Study Case
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline "
                >
                  Blogs
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline "
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white text-left">
                More Informations
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2 text-left">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline "
                >
                  Phone : +216 28 888 490
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline "
                >
                  Location : Tunis, Tunisia
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline "
                >
                  Availabilty : 24/7
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline "
                >
                  How to Pay?
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

          <div className="flex items-center justify-between">
            <a href="#">
              <img className="w-[220px]" src={images.Logo.src} alt="Logo" />
            </a>

            <div className="flex space-x-4 text-lg">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300  dark:hover:text-blue-400"
                aria-label="WhatsApp"
              >
                <BsWhatsapp />
              </a>

              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300  dark:hover:text-blue-400"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300  dark:hover:text-blue-400"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300  dark:hover:text-blue-400"
                aria-label="X"
              >
                <BsTwitterX />
              </a>
            </div>

            <p className="text-gray-500 dark:text-gray-400">
              © {currentYear} Socially - All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
