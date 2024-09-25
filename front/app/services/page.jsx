"use client";
import React from "react";
import Button from "../../constants/Button/Button";

const services = [
  {
    title: "Individual Counseling and Therapy",
    description: "Tailored support for clients facing a variety of personal issues, including mental health concerns, family problems, relationship challenges, and overthinking.",
    color: "#3B82F6",
    price: "120",
    imgUrl: "https://picsum.photos/200/300?random=1",
  },
  {
    title: "Family Counseling",
    description: "Guidance and support for families navigating various challenges such as parenting difficulties and complex family dynamics.",
    color: "#FF5733",
    price: "150",
    imgUrl: "https://picsum.photos/200/300?random=2",
  },
  {
    title: "Meditation and Self-Connection",
    description: "This service focuses on guiding clients through meditation practices to help them reconnect with their inner selves and uncover core issues causing confusion or distress.",
    color: "#28A745",
    price: "100",
    imgUrl: "https://picsum.photos/200/300?random=3",
  },
  {
    title: "Group Therapy and Social Support",
    description: "Structured focus groups designed for individuals facing similar challenges to foster connection, support, and shared experiences.",
    color: "#FFC107",
    price: "80",
    imgUrl: "https://picsum.photos/200/300?random=4",
  },
  {
    title: "Active Listening",
    description: "A dedicated space where individuals can express their thoughts and emotions without interruption or judgment, focusing on empathy and understanding.",
    color: "#6F42C1",
    price: "70",
    imgUrl: "https://picsum.photos/200/300?random=5",
  },
  {
    title: "Stress Management and Social Coping Strategies",
    description: "This service helps individuals understand stress by exploring social factors contributing to it while providing practical coping strategies.",
    color: "#17A2B8",
    price: "90",
    imgUrl: "https://picsum.photos/200/300?random=6",
  },
  {
    title: "Depression Therapy",
    description: "This service addresses depression by examining social influences that contribute to an individual's experience of depression.",
    color: "#E83E8C",
    price: "130",
    imgUrl: "https://picsum.photos/200/300?random=7",
  },
  {
    title: "Life Transition Counseling",
    description: "This service guides young individuals through key life transitions while addressing unique social pressures they face during pivotal stages of life.",
    color: "#20C997",
    price: "110",
    imgUrl: "https://picsum.photos/200/300?random=8",
  },
  {
    title: "Positivity Reboot and Life Enrichment",
    description: "This service empowers individuals to identify toxic influences in their lives while fostering a positive mindset.",
    color: "#343A40",
    price: "140",
    imgUrl: "https://picsum.photos/200/300?random=9",
  },
];

function page() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative px-4">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 pt-24 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mt-8 capitalize dark:text-gray-900 lg:text-6xl text-center">
            Discover Our <span className="text-[#83cc61]">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm text-neutral-600 leading-8">
            Our services include personalized consulting and expert advice on
            social relationships, workplace dynamics, and societal issues. Whether you're seeking guidance on personal challenges or looking for insights into broader social trends, our professional sociologist is here to provide support and solutions tailored to your unique situation.
          </p>
        </div>
      </div>
      <div
        className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            "linear-gradient(90deg, rgba(128,255,0,0.27494747899159666) 0%, rgba(63,122,58,0.165703781512605) 50%)",
        }}
      ></div>

      <div className="max-w-5xl py-16 px-2 lg:px-0 bg-white">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imgUrl}
              href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, description, href }) {
  return (
    <div className="relative bg-white border border-[#38B2AC] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-neutral-600">{description}</p>
      </div>
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center">
        <Button
          text="Learn More"
          href={href}
          className="px-4 py-2 btn-round bg-[#296747]"
        />
      </div>
    </div>
  );
}

export default page;
