"use client";
import React, { useState, useEffect } from "react";
import * as images from "../../assets/index";
import axios from "axios";
import CohortDetail from "./CohortDetail";
import AddCohortForm from "@/app/components/AddCohort/AddCohortForm";
import Link from 'next/link';

const page = () => {
	const [cohorts, setCohorts] = useState([]);
	const [showAddCohort, setShowAddCohort] = useState(false);

	useEffect(() => {
		axios
			.get("https://backend-rbk.vercel.app/cohorts")
			.then((response) => {
				setCohorts(response.data.cohorts);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [showAddCohort]);

	const handleCohortCreate = (newCohort) => {
		axios
		.post('https://backend-rbk.vercel.app/cohorts', newCohort)
		.then((response) => {
		  // Handle the response if needed
		  console.log('Cohort created:', response.data);
	
		  // Close the "Add Cohort" form
		  setShowAddCohort(false);
		})
		.catch((error) => {
		  // Handle the error if the POST request fails
		  console.error('Error creating cohort:', error);
	
		  // You might want to display an error message to the user here
		});
		setShowAddCohort(false);
	};

	return (
		<>
			
			<section className="text-gray-600 body-font">
				<div className="page-content mx-auto py-20">
					{/* Show the "Add Cohort" section if `showAddCohort` is true */}
					{showAddCohort && (
						<AddCohortForm onCohortCreate={handleCohortCreate} />
					)}
					<div className="mx-auto flex justify-center">
						<button
							onClick={() => setShowAddCohort(!showAddCohort)}
							className="uppercase text-sm font-semibold border border-[#ff007b] hover:bg-[#ff007b] m-5 hover:text-white p-2 rounded-lg transition-colors">
							{showAddCohort ? "Close" : "+ Add Cohort"}
						</button>
					</div>
					<div className="container px-5 py-8 mx-auto">
						<div className="flex flex-wrap -m-4 gap-6">
						{cohorts.map((cohort, i) => (
							
								<CohortDetail element={cohort} key={cohort._id} />
							
							))}
						
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;
