"use client";
import React from "react";
import { useEffect, useState } from "react";
import * as Images from "../../../assets/index";
import { FaServicestack } from "react-icons/fa";

function page() {
  const [serviceName, setServiceName] = useState("");
  const [service, setService] = useState(null);
  const services = [
    {
      title: "Individual Counseling and Therapy",
      description: "Tailored support for clients facing a variety of personal issues, including mental health concerns, family problems, relationship challenges, and overthinking. This service applies sociological insights to address the underlying social and cultural influences that contribute to these issues.",
      initialAssessment: "The therapist conducts an initial assessment session to understand the client's concerns, history, and goals, helping in creating a tailored treatment plan.",
      establishingGoals: "SMART goals are collaboratively set to guide the therapeutic process and provide direction for future sessions.",
      monitoringProgress: "Progress is regularly reviewed to ensure goals are being met and adjustments to the treatment plan are made as needed.",
      explorationAndInsight: "Sessions focus on exploring thoughts, feelings, and behaviors, helping clients gain deeper self-understanding and insight into their life experiences.",
      color: "#3B82F6",
      price: "120",
      imgUrl: "https://example.com/images/individual_counseling.jpg"
    },
    {
      title: "Family Counseling",
      description: "Guidance and support for families navigating various challenges such as parenting difficulties and complex family dynamics. This service helps families understand the root causes of their conflicts.",
      initialAssessment: "An initial family assessment session is conducted to identify family dynamics, communication patterns, and specific challenges faced by family members.",
      establishingGoals: "Collaborative goals are established to improve communication and resolve conflicts within the family unit.",
      monitoringProgress: "Regular check-ins assess improvements in family relationships and communication effectiveness.",
      explorationAndInsight: "Sessions encourage open dialogue among family members to explore underlying issues affecting family dynamics.",
      color: "#FF5733",
      price: "150",
      imgUrl: "https://example.com/images/family_counseling.jpg"
    },
    {
      title: "Meditation and Self-Connection",
      description: "This service focuses on guiding clients through meditation practices to help them reconnect with their inner selves and uncover core issues causing confusion or distress.",
      initialAssessment: "An initial session assesses the client's current state of mind and their familiarity with meditation practices.",
      establishingGoals: "Clients set personal goals related to self-awareness and emotional clarity through meditation.",
      monitoringProgress: "Progress is monitored by discussing insights gained during meditation sessions and any changes in emotional well-being.",
      explorationAndInsight: "Sessions emphasize self-exploration through guided meditation techniques that facilitate deeper understanding of personal issues.",
      color: "#28A745",
      price: "100",
      imgUrl: "https://example.com/images/meditation_self_connection.jpg"
    },
    {
      title: "Group Therapy and Social Support",
      description: "Structured focus groups designed for individuals facing similar challenges to foster connection, support, and shared experiences.",
      initialAssessment: "An initial assessment identifies participants' common challenges and group dynamics.",
      establishingGoals: "Group goals are collaboratively established to promote mutual support and understanding among participants.",
      monitoringProgress: "Progress is evaluated through participant feedback on their experiences within the group setting.",
      explorationAndInsight: "Discussions focus on sharing personal stories, insights gained from others’ experiences, and strategies for overcoming challenges.",
      color: "#FFC107",
      price: "80",
      imgUrl: "https://example.com/images/group_therapy.jpg"
    },
    {
      title: "Active Listening",
      description: "A dedicated space where individuals can express their thoughts and emotions without interruption or judgment, focusing on empathy and understanding.",
      initialAssessment: "A brief initial session identifies the client's needs for expression versus problem-solving.",
      establishingGoals: "Goals revolve around creating a safe space for clients to articulate their feelings freely.",
      monitoringProgress: "Feedback is gathered on how clients feel after sessions regarding their emotional relief or sense of being heard.",
      explorationAndInsight: "The focus is on validating feelings through attentive listening while encouraging clients to explore their narratives.",
      color: "#6F42C1",
      price: "70",
      imgUrl: "https://example.com/images/active_listening.jpg"
    },
    {
      title: "Stress Management and Social Coping Strategies",
      description:  "This service helps individuals understand stress by exploring social factors contributing to it while providing practical coping strategies tailored to their social context.",
         initialAssessment:"An assessment session identifies specific stressors in the client’s life related to social interactions or expectations.",       
         establishingGoals:"Clients establish coping goals tailored to managing stress effectively in their social environments.",       
         monitoringProgress:"Regular reviews assess the effectiveness of coping strategies implemented in real-life situations.",       
         explorationAndInsight:"Sessions involve exploring how social norms impact stress levels while developing healthier responses.",       
         color:"#17A2B8",       
         price:"90", 
         imgUrl:"https://example.com/images/stress_management.jpg"
    },
    {
         title:"Depression Therapy",
         description:"This service addresses depression by examining social influences that contribute to an individual's experience of depression.",       
         initialAssessment:"An initial evaluation assesses symptoms of depression along with social factors affecting mental health.",       
         establishingGoals:"Collaborative goals focus on building supportive social networks while addressing negative patterns related to depression.",       
         monitoringProgress:"Regular assessments track changes in mood symptoms as well as improvements in social interactions.",       
         explorationAndInsight:"Sessions explore how societal pressures impact mental health while fostering a sense of belonging.",       
         color:"#E83E8C",       
         price:"130", 
         imgUrl:"https://example.com/images/depression_therapy.jpg"
    },
    {
         title:"Life Transition Counseling",
         description:"This service guides young individuals through key life transitions while addressing unique social pressures they face during pivotal stages of life.",       
         initialAssessment:"An assessment identifies the specific transition challenges faced by the client (e.g., entering adolescence or starting a new job).",       
         establishingGoals:"Clients establish goals focused on navigating transitions with confidence while building resilience.",       
         monitoringProgress:"Progress is monitored through discussions about challenges encountered during transitions and strategies employed to cope with them.",       
         explorationAndInsight:"Sessions involve exploring identity changes influenced by peer groups, family dynamics, societal norms, etc.",       
         color:"#20C997",        
       		price:"110", 
       		imgUrl:"https://example.com/images/life_transition_counseling.jpg"
    },
    {
     	title:"Positivity Reboot and Life Enrichment",
     	description:"This service empowers individuals to identify toxic influences in their lives while fostering a positive mindset through sociological exploration of societal norms.",        
     	initialAssessment:"An initial session assesses current toxic influences impacting the client’s life perspective.",        
     	establishingGoals:"Clients set goals aimed at removing negativity from their lives while cultivating positivity.",        
     	monitoringProgress:"Regular check-ins evaluate shifts in mindset as clients work towards positive changes in their environments.",        
     	explorationAndInsight:"Sessions emphasize discovering meaning in everyday experiences while reframing negative thoughts into constructive actions.",        
     	color:"#343A40",        
     	price:"140", 
	   	imgUrl:"https://example.com/images/positivity_reboot.jpg"
	}
  ];
  useEffect(() => {
    // Check if window is defined (client-side only)
    if (typeof window !== "undefined") {
      // Get the pathname from the window location
      const path = window.location.pathname;

      // Extract the part after '/services/' and replace '-' with spaces
      const extractedService =
        path.split("/services/")[1]?.replace(/-/g, " ").toLowerCase() || "";
      console.log(extractedService);

      // Filter services based on the extracted service name
      const filtered = services.filter(
        (service) => service.title.toLowerCase() === extractedService
      );
      console.log(filtered);

      // Set the filtered services in state
      setService(filtered[0]);
    }
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <div className="relative bg-[#f9f9f9]">
        <div className="pt-14 sm:pt-20 bg-[#143324] lg:px-36  lg:flex justify-between items-center">
          <p className="text-4xl font-jost capitalize text-white p-4 mt-4 lg:p-5 lg:mt-0">
            {" "}
            About the Service{" "}
          </p>

          <div className="border text-xs ">
            <div className="container flex items-center px-6 py-4 mx-auto uppercase overflow-x-auto whitespace-nowrap">
              <span className="mx-2 text-[#296747]  rtl:-scale-x-100">
                <FaServicestack className="w-5 h-5" />
              </span>

              <a
                href="/services"
                className="flex items-center text-white text-sm -px-2 hover:font-semibold transition-all duration-300 ease-in-out"
              >
                <span className="mx-2">All Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg h-auto  text-center border rounded-b-3xl bg-white lg:pb-4">
        <div className="relative flex flex-col justify-center h-full  py-8 px-4 sm:px-8">
          <h1
            className={` text-5xl font-extrabold mt-8 capitalize text-[#43A047] text-center border-[${service?.color}]`}
          >
            {service?.title}
          </h1>
          <p className="mt-4 text-sm text-neutral-600 leading-6 px-4 sm:px-12 sm:text-base sm:leading-8">
            {service?.description}
          </p>
          <div className="border border-gray-200 rounded-lg py-4 px-4 mt-4 bg-gray-100 text-2xl text-green-500 flex justify-center items-center space-x-2">
            <span className="font-bold text-gray-800">{service?.price}</span>
            <div className="flex items-end">
              <span className="text-lg text-gray-500 font-medium">TND</span>
              <span className="text-lg text-gray-500 font-light">
                / Session
              </span>
            </div>
          </div>
        </div>

        <img
          className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover hidden lg:block "
          src={service?.imageUrl}
          alt="service"
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0 py-8">
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
                      viewBox="0 0 24 24"
                    >
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
                      viewBox="0 0 24 24"
                    >
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
                      viewBox="0 0 24 24"
                    >
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
                      viewBox="0 0 24 24"
                    >
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
                <p className="text-gray-700">{service?.monitoringProgress}</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-6 text-gray-600"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
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
