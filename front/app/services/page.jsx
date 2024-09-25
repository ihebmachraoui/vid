"use client";
import React from "react";
import * as Images from "../../assets/index";
import Button from "../../constants/Button/Button";

function page() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative px-4">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 pt-24 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mt-8 capitalize dark:text-gray-900 lg:text-6xl text-center">
            Discover Our<span className="text-[#83cc61]"> Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm text-neutral-600 leading-8">
            Our services include personalized consulting and expert advice on
            social relationships, workplace dynamics, and societal issues.
            Whether you're seeking guidance on personal challenges or looking
            for insights into broader social trends, our professional
            sociologist is here to provide support and solutions tailored to
            your unique situation.
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
          {/* Service Cards */}
          <ServiceCard
            title="Individual Counseling and Therapy"
            description="A structured, goal-oriented form of therapy that helps patients manage emotional difficulties by changing patterns of thinking and behavior."
            imageSrc={Images.Cog.src}
            href="/services/cognitive-behavioral-therapy"
          />
          <ServiceCard
            title="Stress Management Counseling"
            description="Designed to help individuals identify stress triggers and develop coping strategies to reduce anxiety and improve overall well-being."
            imageSrc={Images.Stress.src}
            href="/services/stress-management-counseling"
          />
          <ServiceCard
            title="Couples and Relationship Counseling"
            description="Therapy sessions aimed at helping couples resolve conflicts, improve communication, and strengthen their relationship."
            imageSrc={Images.CoupleCon.src}
            href="/services/couples-and-relationship-counseling"
          />
          <ServiceCard
            title="Career and Life Coaching"
            description="Provides guidance for individuals seeking clarity in their professional or personal lives, helping them set goals and take actionable steps toward fulfillment."
            imageSrc={Images.Coach.src}
            href="/services/career-and-life-coaching"
          />
          <ServiceCard
            title="Mindfulness and Relaxation Therapy"
            description="A practice that focuses on improving mental health through relaxation techniques and mindfulness exercises, reducing stress and promoting mental clarity."
            imageSrc={Images.Relax.src}
            href="/services/mindfulness-and-relaxation-therapy"
          />
          <ServiceCard
            title="Trauma Therapy"
            description="Specialized therapy to help individuals process and heal from traumatic experiences and their effects on mental health."
            imageSrc={Images.Trauma.src}
            href="/services/trauma-therapy"
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, description, imageSrc, href }) {
  return (
    <div className="relative bg-white border border-[#38B2AC] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-neutral-600">{description}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <Button
          text="Learn More"
          href={href}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 btn-round bg-[#296747]"
        />
      </div>
    </div>
  );
}

export default page;
