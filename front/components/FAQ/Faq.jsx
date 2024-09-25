"use client";
import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
        question: "Who is this website for?",
        answer: "This website is designed for individuals, especially young people, who feel lost, unheard, or in need of support. We welcome children, teenagers, and young adults in their twenties and thirties who are looking for guidance, encouragement, and a safe space to grow and improve their mental well-being.",
    },
    {
        question: "What kind of support does the website offer?",
        answer: "We offer support through guidance, advice, and a compassionate understanding of your challenges. Whether you are struggling with personal issues, feeling isolated, or seeking self-improvement, we provide a platform where you can explore solutions, find encouragement, and work towards a healthier mindset.",
    },
    {
        question: "How can this website help me improve my mental health?",
        answer: "We believe that with the right support and self-belief, anyone can make positive changes in their lives. Our website offers insights, coping strategies, and a sense of community that encourages self-reflection, resilience, and personal growth. If you believe in yourself, we can help guide you towards healing and well-being.",
    },
    {
        question: "Is the support provided by professionals?",
        answer: "Yes, our team consists of individuals with a background in sociology, mental health, and counseling, offering informed and thoughtful guidance. We aim to provide a safe, nurturing environment where you can feel heard and understood.",
    },
    {
        question: "How can I start getting help through this website?",
        answer: "You can begin by exploring our resources and reaching out through our contact form or support channels. Whether you need advice on a specific issue or general guidance on improving your mental health, we are here to listen and help you on your journey.",
    },
    {
        question: "Can I remain anonymous when seeking support?",
        answer: "Absolutely. We respect your privacy and understand that some may prefer to remain anonymous when discussing personal matters. You can choose how much information you wish to share, and we ensure that all interactions are handled with confidentiality and care.",
    },
    {
        question: "What makes this website different from other support platforms?",
        answer: "Our approach is rooted in a deep understanding of sociological factors and the unique challenges faced by young individuals. We offer a holistic perspective that not only addresses personal struggles but also considers the social and cultural influences shaping your experiences. Our aim is to provide tailored support that empowers you to make meaningful changes in your life.",
    },
];

  return (
    <section className="bg-white dark:bg-gray-900">
      <hr />
      <div className="max-w-5xl px-4 py-10 mx-auto lg:px-0">
        <h1 className="text-2xl font-semibold text-neutral-600 lg:text-3xl">
          FAQ's
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
