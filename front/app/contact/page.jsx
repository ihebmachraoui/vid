"use client";

import { FaChevronRight } from "react-icons/fa";
import * as Images from "../../assets/index";
import Button from "../../constants/Button/Button";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation("global");

  return (
    <>
      <div className="pt-14 sm:pt-20 bg-[#143324] lg:px-36 lg:flex justify-between items-center">
        <p className="text-2xl font-jost capitalize lg:text-4xl text-white p-4 mt-4 lg:p-5 lg:mt-0">
          {t("Contact.ask")}
        </p>

        <div className="border text-xs ">
          <div className="container flex items-center px-6 py-4 mx-auto uppercase overflow-x-auto whitespace-nowrap">
            <a href="/" className="text-white">
              <span className="mx-2">{t("Contact.breadcrumbHome")}</span>
            </a>

            <span className="mx-5 text-[#296747] rtl:-scale-x-100">
              <FaChevronRight className="w-3 h-3" />
            </span>

            <a href="/blog" className="flex items-center text-white -px-2">
              <span className="mx-2">{t("Contact.breadcrumbContact")}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center bg-white">
        <div className="hidden lg:w-1/2 lg:flex w-full h-screenjustify-center items-center">
          <img
            src={Images.Contact.src}
            alt={t("Contact.imageAlt")}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 w-full h-full flex items-center px-4 ">
          <form action="#" method="POST" className="w-full px-2 lg:px-8">
            <h1 className="text-4xl font-extrabold mt-8 capitalize dark:text-gray-900 lg:text-6xl text-center">
              {t("Contact.title")} <span className="text-[#83cc61]">{t("Contact.now")}</span>!
            </h1>
            <div className="grid grid-cols-1 gap-x-8 pt-4 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  {t("Contact.firstName")}
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="w-full rounded-md border border-[#64a646] bg-white py-2 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  {t("Contact.lastName")}
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="w-full rounded-md border border-[#64a646] bg-white py-2 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  {t("Contact.email")}
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-md border border-[#64a646] bg-white py-2 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  {t("Contact.phoneNumber")}
                </label>
                <div className="relative mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="w-full rounded-md border border-[#64a646] bg-white py-2 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  {t("Contact.message")}
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-[#64a646] bg-white py-2 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Button
                text={t("Contact.sendMessage")}
                type="submit"
                className="bg-[#20563a] btn-round hover:bg-[#296747] cursor-pointer w-full text-center font-semibold"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
