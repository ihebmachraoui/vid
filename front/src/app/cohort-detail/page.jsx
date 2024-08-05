"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Students from "./studentofcohort"
import Loader from '../constants/Loader';

const CohortDetailPage = () => {
  const [idofcohort, setIdOfCohort] = useState(null);
  const [cohortData, setCohortData] = useState(null); // To store the fetched cohort data


  useEffect(() => {
    // Extract cohortId from the URL query string
    const searchParams = new URLSearchParams(window.location.search);
    const cohortId = searchParams.get('cohortId');

    // Update the state with the cohortId
    setIdOfCohort(cohortId);

    // Fetch the cohort details
    if (cohortId) {
      axios.get(`https://backend-rbk.vercel.app/cohorts/${cohortId}`)
        .then((response) => {
          // Set the fetched cohort data in state
          setCohortData(response.data.cohort);
          console.log("this is the cohort data", response.data.cohort);

          // You can use cohortData to display cohort details as needed
        })
        .catch((error) => {
          console.error('Error fetching cohort details:', error);
        });
    }
  }, []);




  return (
    <>
     
    <div className="flex justify-center">
      {/* <h1 className='text-xs text-gray-500'>Cohort Details</h1> */}
     
      {cohortData && (
        <div className='w-full'>
          {/* Display cohort details based on cohortData */}
          {/* Add more cohort details as needed */}
          <Students members={cohortData.students} id={idofcohort}/>
        {/*   <Shuffle members={cohortData.students} id={idofcohort} /> */}
          <div className='page-content block lg:flex px-5 lg:my-4'>
          <p className='text-xs text-gray-500'>Cohort Name: <span className='text-gray-600'>{cohortData.name}</span></p>
          <p className='text-xs text-gray-500 ml-0 lg:ml-6'>Cohort ID: {idofcohort}</p>
          </div>
        </div>
      )}
    </div>

    </>
  );
};

export default CohortDetailPage;
