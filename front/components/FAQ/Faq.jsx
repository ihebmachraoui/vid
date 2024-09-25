"use client";
import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation("global");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t("faq.whoIsThisWebsiteFor.question"),
      answer: t("faq.whoIsThisWebsiteFor.answer"),
    },
    {
      question: t("faq.whatKindOfSupport.question"),
      answer: t("faq.whatKindOfSupport.answer"),
    },
    {
      question: t("faq.howCanThisHelp.question"),
      answer: t("faq.howCanThisHelp.answer"),
    },
    {
      question: t("faq.isSupportProvidedByProfessionals.question"),
      answer: t("faq.isSupportProvidedByProfessionals.answer"),
    },
    {
      question: t("faq.howToStartGettingHelp.question"),
      answer: t("faq.howToStartGettingHelp.answer"),
    },
    {
      question: t("faq.canIRemainAnonymous.question"),
      answer: t("faq.canIRemainAnonymous.answer"),
    },
    {
      question: t("faq.whatMakesThisDifferent.question"),
      answer: t("faq.whatMakesThisDifferent.answer"),
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <hr />
      <div className="max-w-5xl px-4 py-10 mx-auto lg:px-0">
        <h1 className="text-2xl font-semibold text-neutral-600 lg:text-3xl">
          {t("faq.title")}
        </h1>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex items-center w-full focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {openIndex === index ? (
                  <FaMinus className="flex-shrink-0 w-6 h-6 text-[#296747] transition-transform duration-300" />
                ) : (
                  <FaPlus className="flex-shrink-0 w-6 h-6 text-[#296747] transition-transform duration-300" />
                )}

                <h1 className="mx-4 text-xl text-left text-neutral-600">
                  {faq.question}
                </h1>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="flex mt-8 md:mx-10">
                  <span className="border border-[#296747]"></span>

                  <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
