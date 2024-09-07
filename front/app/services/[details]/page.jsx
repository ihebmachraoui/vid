"use client"
import React from "react";
import { useEffect, useState } from 'react';
import * as Images from "../../../assets/index";

function page() {
    


    const [serviceName, setServiceName] = useState('');
    const [service, setService] = useState(null);
	const services = [
		{
			title: "Cognitive Behavioral Therapy",
			description:
				"A structured, goal-oriented form of therapy that helps patients manage emotional difficulties by changing patterns of thinking and behavior.",
			imageUrl: Images.Cog.src,
			color: "#3B82F6",
			price: "120",
			initialAssessment:
				"The therapist and client start with an initial assessment session to understand the client's concerns, history, and goals, helping in creating a tailored treatment plan.",
			establishingGoals:
				"SMART goals are collaboratively set to guide the therapeutic process and provide direction for future sessions.",
			monitoringProgress:
				"Progress is regularly reviewed to ensure goals are being met and adjustments to the treatment plan are made as needed.",
			explorationAndInsight:
				"Sessions focus on exploring thoughts, feelings, and behaviors, helping clients gain deeper self-understanding and insight into their life experiences.",
		},
		{
			title: "Stress Management Counseling",
			description:
				"A service designed to help individuals identify stress triggers and develop coping strategies to reduce anxiety and improve overall well-being.",
			imageUrl: Images.Stress.src,
			color: "#10B981",
			price: "110",
			initialAssessment:
				"The initial session involves understanding the client's stressors, current coping mechanisms, and personal background to develop a customized stress management plan.",
			establishingGoals:
				"The therapist and client set specific goals for reducing stress and improving coping strategies, aiming for measurable improvements in stress levels.",
			monitoringProgress:
				"Progress is monitored through regular sessions to track changes in stress levels and effectiveness of coping strategies, making adjustments as necessary.",
			explorationAndInsight:
				"Clients explore their stress triggers and reactions, gaining insights into their stress responses and learning new techniques for managing stress effectively.",
		},
		{
			title: "Couples and Relationship Counseling",
			description:
				"Therapy sessions aimed at helping couples resolve conflicts, improve communication, and strengthen their relationship.",
			imageUrl: Images.CoupleCon.src,
			color: "#F472B6",
			price: "150",
			initialAssessment:
				"The therapist conducts an initial assessment to understand each partner's perspective, relationship history, and the issues causing conflict, setting the stage for effective counseling.",
			establishingGoals:
				"Together, the couple and therapist establish goals for improving communication, resolving conflicts, and enhancing relationship satisfaction.",
			monitoringProgress:
				"Progress is regularly reviewed to ensure that relationship goals are being met and to address any ongoing or new issues.",
			explorationAndInsight:
				"Sessions involve exploring each partner’s needs, expectations, and relationship dynamics, fostering deeper understanding and empathy between partners.",
		},
		{
			title: "Career and Life Coaching",
			description:
				"Provides guidance for individuals seeking clarity in their professional or personal lives, helping them set goals and take actionable steps toward fulfillment.",
			imageUrl: Images.Coach.src,
			color: "#FBBF24",
			price: "130",
			initialAssessment:
				"The initial assessment focuses on understanding the client’s career aspirations, current challenges, and personal goals to create a tailored coaching plan.",
			establishingGoals:
				"Clear, actionable goals are set to guide the client’s career or life path, helping them achieve specific milestones and overall satisfaction.",
			monitoringProgress:
				"Progress is tracked through regular sessions to ensure that the client is making headway toward their goals and to make adjustments to the coaching plan as needed.",
			explorationAndInsight:
				"Clients explore their values, strengths, and ambitions, gaining insight into their career and life choices and developing strategies for achieving their goals.",
		},
		{
			title: "Mindfulness and Relaxation Therapy",
			description:
				"A practice that focuses on improving mental health through relaxation techniques and mindfulness exercises, reducing stress and promoting mental clarity.",
			imageUrl: Images.Relax.src,
			color: "#8B5CF6",
			price: "100",
			initialAssessment:
				"The therapist begins with an assessment to understand the client’s current stress levels and mindfulness practices, tailoring the therapy to their needs.",
			establishingGoals:
				"Goals are set to enhance mindfulness and relaxation practices, aiming to reduce stress and improve mental clarity over time.",
			monitoringProgress:
				"The therapist reviews the client’s progress in incorporating mindfulness techniques and relaxation exercises into their daily routine.",
			explorationAndInsight:
				"Sessions focus on exploring mindfulness practices, helping clients develop a deeper awareness of their thoughts and emotions and fostering overall mental well-being.",
		},
		{
			title: "Trauma Therapy",
			description:
				"Specialized therapy to help individuals process and heal from traumatic experiences and their effects on mental health.",
			imageUrl: Images.Trauma.src,
			color: "#9B111E",
			price: "140",
			initialAssessment:
				"The initial session is dedicated to understanding the client’s trauma history, current symptoms, and goals for therapy to create a comprehensive treatment plan.",
			establishingGoals:
				"Therapist and client set specific goals for addressing trauma-related issues and improving emotional resilience.",
			monitoringProgress:
				"The therapist regularly assesses the client’s progress in managing trauma symptoms and adjusts the treatment plan as needed to support healing.",
			explorationAndInsight:
				"Sessions provide a safe space for clients to explore their trauma experiences, gaining insights into their emotional responses and working towards healing and recovery.",
		},
	];
    useEffect(() => {
        // Check if window is defined (client-side only)
        if (typeof window !== 'undefined') {
          // Get the pathname from the window location
          const path = window.location.pathname;
    
          // Extract the part after '/services/' and replace '-' with spaces
          const extractedService = path.split('/services/')[1]?.replace(/-/g, ' ').toLowerCase() || '';
          console.log(extractedService);
    
          // Filter services based on the extracted service name
          const filtered = services.filter(service =>
            service.title.toLowerCase()===extractedService
          );
            console.log(filtered);

          // Set the filtered services in state
          setService(filtered[0]);
        }
      }, []); // Empty dependency array means this effect runs once after the initial render
    

	return (
		<div>
			<div className="mx-auto max-w-screen-lg h-auto pt-8 text-center bg-white lg:pb-4">
				<div className="relative flex flex-col justify-center h-full mt-16 mb-8 bg-[#f9f9f9] px-4 sm:px-8 sm:py-12">
					{/* <span className="rounded-full text-black font-medium px-3 mb-2 bg-[#e1ffd4] py-2">
                        Blogs
                    </span> */}

					<h1
						className={` mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl self-center border-b-2 border-[${service?.color}]`}>
						{service?.title}
					</h1>
					<p className="mt-4 text-sm text-neutral-600 leading-6 px-4 sm:px-12 sm:text-base sm:leading-8">
						{service?.description}
					</p>
					<p class="pt-4 text-4xl text-[#43A047] flex self-center items-center space-x-2">
						<span class=" font-cursive font-extrabold">
							{service?.price}
						</span>
						<span class=" text-xl text-gray-600 font-medium">TND</span>
						<span class=" text-xl text-gray-600 font-light">/ Session</span>
					</p>
				</div>

				<img
					className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover hidden lg:block "
					src={service?.imageUrl}
					alt="service"			/>
			</div>
			<div className="absolute  " style={{ left: "-170px" }}>
				<img
					src={Images.FlowerTop.src}
					className="z-10 lg:h-full h-48 "
					alt="flower-top"
				/>
			</div>
			<div className="  px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="z-1 relative bg-white grid gap-6 row-gap-10 lg:grid-cols-2 ">
					<div className="lg:py-6 lg:pr-16">
						<div className="flex">
							<div className="flex flex-col items-center mr-4">
								<div>
									<div className="flex items-center justify-center w-10 h-10 border rounded-full">
										<svg
											className="w-4 text-gray-600"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											viewBox="0 0 24 24">
											<line
												fill="none"
												strokeMiterlimit="10"
												x1="12"
												y1="2"
												x2="12"
												y2="22"
											/>
											<polyline
												fill="none"
												strokeMiterlimit="10"
												points="19,15 12,22 5,15"
											/>
										</svg>
									</div>
								</div>
								<div className="w-px h-full bg-gray-300" />
							</div>
							<div className="pt-1 pb-8">
								<p className="mb-2 text-lg font-bold">1- Initial Assessment</p>
								<p className="text-gray-700">{service?.initialAssessment}</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex flex-col items-center mr-4">
								<div>
									<div className="flex items-center justify-center w-10 h-10 border rounded-full">
										<svg
											className="w-4 text-gray-600"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											viewBox="0 0 24 24">
											<line
												fill="none"
												strokeMiterlimit="10"
												x1="12"
												y1="2"
												x2="12"
												y2="22"
											/>
											<polyline
												fill="none"
												strokeMiterlimit="10"
												points="19,15 12,22 5,15"
											/>
										</svg>
									</div>
								</div>
								<div className="w-px h-full bg-gray-300" />
							</div>
							<div className="pt-1 pb-8">
								<p className="mb-2 text-lg font-bold">2- Establishing Goals</p>
								<p className="text-gray-700">{service?.establishingGoals}</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex flex-col items-center mr-4">
								<div>
									<div className="flex items-center justify-center w-10 h-10 border rounded-full">
										<svg
											className="w-4 text-gray-600"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											viewBox="0 0 24 24">
											<line
												fill="none"
												strokeMiterlimit="10"
												x1="12"
												y1="2"
												x2="12"
												y2="22"
											/>
											<polyline
												fill="none"
												strokeMiterlimit="10"
												points="19,15 12,22 5,15"
											/>
										</svg>
									</div>
								</div>
								<div className="w-px h-full bg-gray-300" />
							</div>
							<div className="pt-1 pb-8">
								<p className="mb-2 text-lg font-bold">
									3- Exploration And Insight
								</p>
								<p className="text-gray-700">
									{service?.explorationAndInsight}
								</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex flex-col items-center mr-4">
								<div>
									<div className="flex items-center justify-center w-10 h-10 border rounded-full">
										<svg
											className="w-4 text-gray-600"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											viewBox="0 0 24 24">
											<line
												fill="none"
												strokeMiterlimit="10"
												x1="12"
												y1="2"
												x2="12"
												y2="22"
											/>
											<polyline
												fill="none"
												strokeMiterlimit="10"
												points="19,15 12,22 5,15"
											/>
										</svg>
									</div>
								</div>
								<div className="w-px h-full bg-gray-300" />
							</div>
							<div className="pt-1 pb-8">
								<p className="mb-2 text-lg font-bold">4- Monitoring Progress</p>
								<p className="text-gray-700">
									{service?.monitoringProgress}
								</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex flex-col items-center mr-4">
								<div>
									<div className="flex items-center justify-center w-10 h-10 border rounded-full">
										<svg
											className="w-6 text-gray-600"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<polyline
												fill="none"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeMiterlimit="10"
												points="6,12 10,16 18,8"
											/>
										</svg>
									</div>
								</div>
							</div>
							<div className="pt-1">
								<p className="mb-2 text-lg font-bold">Success</p>
								<p className="text-gray-700" />
							</div>
						</div>
					</div>
					<div className="relative">
						<img
							className="hidden lg:block inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
							src="https://img.freepik.com/free-photo/couple-doing-family-therapy_23-2149305194.jpg?t=st=1725672297~exp=1725675897~hmac=74eb0840d7efc4fc1eaf8c1187fad5933c56c7ad53f35e1d659ea378b7cc5798&w=360"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;
