"use client"
import React from "react";
import * as Images from "../../assets/index";
function page() {
    
	return (
		<div>
			<div className="mx-auto max-w-screen-lg pt-8 text-center bg-white lg:pb-8">
				<div className="relative mt-16 mb-8 bg-[#f9f9f9] px-4 sm:px-8 sm:py-12">
					{/* <span className="rounded-full text-black font-medium px-3 mb-2 bg-[#e1ffd4] py-2">
            Blogs
          </span> */}
					<h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
						Discover Our Services
					</h1>
					<p className="mt-4 text-sm text-neutral-600 leading-6 px-4 sm:px-12 sm:text-base sm:leading-8">
						Our services include personalized consulting and expert advice on
						social relationships, workplace dynamics, and societal issues.
						Whether you're seeking guidance on personal challenges or looking
						for insights into broader social trends, our professional
						sociologist is here to provide support and solutions tailored to
						your unique situation.
					</p>
				</div>

				<img
					className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover hidden lg:block "
					src={Images.Services.src}
					alt="services"
				/>
			</div>

			<div className="relative ">
				<div className="absolute  " style={{ left: "-170px" }}>
					<img
						src={Images.FlowerTop.src}
						className="lg:h-full h-48 "
						alt="flower-top"
					/>
				</div>
<div className="flex flex-col justify-center pt-10">
  <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    <div className="w-full">
      <div className="flex flex-col w-full mb-10 sm:flex-row">
        <div className="relative w-full mb-10 sm:mb-0 sm:w-1/2 group">
          <div className="relative h-full ml-0 mr-0 sm:mr-10">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#3B82F6] rounded-lg"></span>
            <div className="relative h-full p-5 bg-white border-2 border-[#3B82F6] rounded-lg">
              <div className="flex items-center -mt-1">
                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                  Cognitive Behavioral Therapy
                </h3>
              </div>
              <p className="mb-2 text-gray-600">
                A structured, goal-oriented form of therapy that helps patients manage emotional difficulties by changing patterns of thinking and behavior.
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <img
                src={Images.Cog.src}
                alt="Therapy"
                className="absolute inset-0 object-cover w-full h-full rounded-lg"
              />
              <a href="/services/cognitive-behavioral-therapy" className="relative px-4 py-2 bg-white text-[#3B82F6] font-bold rounded-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full sm:w-1/2 group">
          <div className="relative h-full ml-0 md:mr-10">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#10B981] rounded-lg"></span>
            <div className="relative h-full p-5 bg-white border-2 border-[#10B981] rounded-lg">
              <div className="flex items-center -mt-1">
                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                  Stress Management Counseling
                </h3>
              </div>
              <p className="mb-2 text-gray-600">
                A service designed to help individuals identify stress triggers and develop coping strategies to reduce anxiety and improve overall well-being.
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <img
                src={Images.Stress.src}
                alt="Stress Management"
                className="absolute inset-0 object-cover w-full h-full rounded-lg"
              />
              <a href="/services/stress-management-counseling" className="relative px-4 py-2 bg-white text-[#10B981] font-bold rounded-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full mb-5 sm:flex-row">
        <div className="relative w-full mb-10 sm:mb-0 sm:w-1/2 group">
          <div className="relative h-full ml-0 mr-0 sm:mr-10">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#F472B6] rounded-lg"></span>
            <div className="relative h-full p-5 bg-white border-2 border-[#F472B6] rounded-lg">
              <div className="flex items-center -mt-1">
                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                  Couples and Relationship Counseling
                </h3>
              </div>
              <p className="mb-2 text-gray-600">
                Therapy sessions aimed at helping couples resolve conflicts, improve communication, and strengthen their relationship.
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <img
                src={Images.CoupleCon.src}
                alt="Therapy"
                className="absolute inset-0 object-cover w-full h-full rounded-lg"
              />
              <a href="/services/couples-and-relationship-counseling" className="relative px-4 py-2 bg-white text-[#F472B6] font-bold rounded-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full sm:w-1/2 group">
          <div className="relative h-full ml-0 mr-0 sm:mr-10">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#FBBF24] rounded-lg"></span>
            <div className="relative h-full p-5 bg-white border-2 border-[#FBBF24] rounded-lg">
              <div className="flex items-center -mt-1">
                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                  Career and Life Coaching
                </h3>
              </div>
              <p className="mb-2 text-gray-600">
                Provides guidance for individuals seeking clarity in their professional or personal lives, helping them set goals and take actionable steps toward fulfillment.
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <img
                src={Images.Coach.src}
                alt="Career and Life Coaching"
                className="absolute inset-0 object-cover w-full h-full rounded-lg"
              />
              <a href="/services/career-and-life-coaching" className="relative px-4 py-2 bg-white text-[#FBBF24] font-bold rounded-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-full sm:w-1/2 group">
  <div className="relative h-full ml-0 md:mr-10">
    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#8B5CF6] rounded-lg"></span>
    <div className="relative h-full p-5 bg-white border-2 border-[#8B5CF6] rounded-lg">
      <div className="flex items-center -mt-1">
        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
          Mindfulness and Relaxation Therapy
        </h3>
      </div>
      <p className="mb-2 text-gray-600">
        A practice that focuses on improving mental health
        through relaxation techniques and mindfulness exercises,
        reducing stress and promoting mental clarity.
      </p>
    </div>
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <img
        src={Images.Relax.src}
        alt="Mindfulness and Relaxation Therapy"
        className="absolute inset-0 object-cover w-full h-full rounded-lg"
      />
      <a
        href="/services/mindfulness-and-relaxation-therapy"
        className="relative px-4 py-2 bg-white text-[#8B5CF6] font-bold rounded-lg"
      >
        Learn More
      </a>
    </div>
  </div>
</div>

      </div>

      <div className="relative w-full group">
        <div className="relative h-full ml-0 md:mr-10">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#9B111E] rounded-lg"></span>
          <div className="relative h-full p-5 bg-white border-2 border-[#9B111E] rounded-lg">
            <div className="flex items-center -mt-1">
              <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                Trauma Therapy
              </h3>
            </div>
            <p className="mb-2 text-gray-600">
              Specialized therapy to help individuals process and heal from traumatic experiences and their effects on mental health.
            </p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <img
              src={Images.Trauma.src}
              alt="Trauma Therapy"
              className="absolute inset-0 object-cover w-full h-full rounded-lg"
            />
            <a href="/services/trauma-therapy" className="relative px-4 py-2 bg-white text-[#9B111E] font-bold rounded-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

			</div>
		</div>
	);
}

export default page;
