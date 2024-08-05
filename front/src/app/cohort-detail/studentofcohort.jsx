import React, { useState, useEffect } from "react";
import axios from "axios";
import AddStudentModal from "./addstudentmodal";
import * as images from '../../assets/index'

const StudentOfCohort = ({ members, id }) => {
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [studentsWithMatchingIds, setStudentsWithMatchingIds] = useState([]);
  

  // Function to fetch students and filter those with matching IDs
  const fetchStudents = async () => {
    try {
      const response = await axios.get("https://backend-rbk.vercel.app/students");
      const allStudents = response.data.students;

      // Filter students with IDs matching the members array
      const matchingStudents = allStudents.filter((student) =>
        members.includes(student._id)
      );

      setStudentsWithMatchingIds(matchingStudents);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // Fetch students when the component mounts
  useEffect(() => {
    fetchStudents();
  }, [showAddStudentModal]); // Empty dependency array ensures this effect runs only once on mount

  const handleStudentAdded = (newStudent) => {
    // Add the new student to the studentsWithMatchingIds array
    setStudentsWithMatchingIds([...studentsWithMatchingIds, newStudent]);
  };
//shufle 
const [pairedStudents, setPairedStudents] = useState([]);
	const [main, setMain] = useState([]);
	// Function to shuffle an array using Fisher-Yates algorithm
	const shuffleArray = (array) => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	// Function to create a Pair of The Day entry for a given pair of students
	const createPOTDForPair = async (pair) => {
		try {
			await axios.post("https://backend-rbk.vercel.app/pairOfTheDay", {
				cohortId: id,
				pairs: [
					{
						student1: pair[0],
						student2: pair[1] ? pair[1] : null,
					},
				],
			});
		} catch (error) {
			console.error("Error creating Pair of The Day for the pair:", error);
		}
	};
	// Function to clear Pair of The Day entries for a specific cohort
	const clearPOTDForCohort = async (cohortId) => {
		try {
			await axios.delete(
				`https://backend-rbk.vercel.app/pairOfTheDay/cohort/${cohortId}`,
			);
			console.log(`Pair of The Day entries for cohort ${cohortId} cleared.`);
		} catch (error) {
			console.error(`Error clearing Pair of The Day entries: ${error}`);
		}
	};
	// Function to create Pair of The Day entries for all pairs
	const createPOTDForAllPairs = async () => {
		// Clear existing Pair of The Day entries for the cohort
		await clearPOTDForCohort(id);
    
		const response = await axios.get("https://backend-rbk.vercel.app/students");
		const allStudents = response.data.students;
    
		// Filter students with IDs matching the members array
		const matchingStudents = allStudents.filter((student) =>
			members.includes(student._id),
      );
      
      // Shuffle the filtered students
      const shuffledStudents = shuffleArray(matchingStudents);
      
      // Create pairs of students
      const pairs = [];
      for (let i = 0; i < shuffledStudents.length; i += 2) {
        if (i + 1 < shuffledStudents.length) {
          pairs.push([shuffledStudents[i], shuffledStudents[i + 1]]);
        } else {
          // Handle the case when there's an odd number of students
          pairs.push([shuffledStudents[i]]);
        }
      }
      
      setPairedStudents(pairs);
      for (const pair of pairs) {
        await createPOTDForPair(pair);
      }
    };
    
	// Function to filter and get the latest Pair of the Day entries by cohortId
	const filterLatestPOTDByCohort = async () => {
		try {
			// Fetch the data from the API
			const response = await axios.get("https://backend-rbk.vercel.app/pairOfTheDay");
			const allPairs = response.data.pairOfTheDays;

			// Filter pairs by cohortId
			const filteredPairs = allPairs.filter((pair) => pair.cohortId === id);

			setMain(filteredPairs);
		} catch (error) {
			console.error(
				"Error fetching and filtering Pair of the Day entries:",
				error,
			);
		}
	};

	useEffect(() => {
		filterLatestPOTDByCohort();
	}, [main]);


  

  return (
    <>
      <div className="page-content">
        {studentsWithMatchingIds.length === 0 ? (
         
          <div className="grid w-full min-h-full place-items-center px-6 py-24 sm:py-32">
  <div className="text-center">
    <img src={images.logo.src} className="mx-auto"/>
    <h1 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-5xl">You have no students yet. Click + to add.</h1>

   
  </div>
</div>


        ) : (
          <div className="flex mx-auto w-full">
            <div className="lg:w-full">

              <div className="container mx-auto">
                <div className="lg:flex">
                  <div className="lg:w-1/2">
              <h2 className="text-2xl px-5 lg:px-0 mb-4  font-black border-b uppercase">Students List</h2>
                    <div className="lg:w-full mx-auto max-h-screen overflow-y-auto custom-scrollbar">
                      <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                          <tr>
                            <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                              Student
                            </th>
                            <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-gray-100">
                              Name
                            </th>
                           {/*  <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-gray-100">
                              Added At
                            </th> */}
                            <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-gray-100">
                              Region
                            </th>
                            <th className="px-4 py-3 title-font tracking-wider justify-end flex items-center font-semibold text-gray-900 text-sm bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
                            </th>
                          </tr>
                        </thead>
                        {studentsWithMatchingIds.map((student) => (
                          <tbody key={student._id}>
                            <tr>
                              <td className="px-4 py-3">
                                <img
                                  src={student.imageUrl}
                                  alt={`${student.name} ${student.familyName}`}
                                  className="h-12 object-cover w-12 lg:w-16 lg:h-16 rounded-full border"
                                />
                              </td>
                              <td className="px-4 py-3 text-sm text-left font-semibold uppercase text-gray-600">
                                {student.name} {student.familyName}
                              </td>
                             {/*  <td className="px-4 py-3 text-xs text-left">
                                {student.date}
                              </td> */}
                              <td className="px-4 py-3 text-xs text-left uppercase text-gray-600">
                                {student.origin}
                              </td>
                              <td className="px-4 py-3 text-xs text-end uppercase text-gray-600">
                                <button className="text-[#ff007b]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </div>
                  </div>

                  <div className="border-l lg:mx-8"></div>
                  <div className="lg:w-1/2 py-8 lg:py-0">
              <h2 className="text-2xl px-5 lg:px-0 mb-4 font-black border-b uppercase">Pairs Of Today</h2>

                  <div className="flex flex-wrap ml-4 lg:ml-0">
  {main.map((pairItem, index) => (
    <div key={index} className="p-2 lg:w-1/2 md:w-1/2 w-full">
      {pairItem.pairs.map((pair, pairIndex) => (
        <div key={pairIndex} className="block border p-4 shadow hover:shadow-md transition-transform transform hover:scale-105 duration-300">
          <div className="flex items-center mb-4 uppercase">
            <img
              src={pair.student1?.imageUrl}
              alt={`${pair.student1?.name} ${pair.student1?.familyName}`}
              className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-900 text-sm font-medium">
                {pair.student1?.name} {pair.student1?.familyName}
              </p>
              {/* Additional information if needed */}
            </div>
          </div>
          {pair.student2 && (
            <div className="flex items-center uppercase">
              <img
                src={pair.student2?.imageUrl}
                alt={`${pair.student2?.name} ${pair.student2?.familyName}`}
                className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              />
              <div>
                <p className="text-gray-900 text-sm font-medium">
                  {pair.student2?.name} {pair.student2?.familyName}
                </p>
                {/* Additional information if needed */}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  ))}
</div>

                    <div className="flex gap-4 my-8 justify-center">
                    <button
  onClick={createPOTDForAllPairs}
  className="flex items-center bg-[#ff007b] px-5 py-2 uppercase font-medium text-white rounded-lg"
>
<svg className="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
    </svg>
  <span className="ml-2">Shuffle</span>
</button>

                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowAddStudentModal(true)}
          className="bg-[#ff007b] hover:bg-white text-white  hover:text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl fixed bottom-16 right-4"
        >
          +
        </button>

        {showAddStudentModal && (
          <AddStudentModal
            cohortId={id}
            onClose={() => setShowAddStudentModal(false)}
            onStudentAdded={handleStudentAdded}
          />
        )}
      </div>
    </>
  );
};

export default StudentOfCohort;
