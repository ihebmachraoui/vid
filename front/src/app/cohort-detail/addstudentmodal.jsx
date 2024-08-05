import React, { useState } from "react";
import axios from "axios";

const AddStudentModal = ({ cohortId, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    familyName: "",
    age: "",
    origin: "",
    phoneNumber: "",
    imageUrl: "",
    previousPair: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addStudentAndUpdateCohort = () => {
    axios
      .post("https://backend-rbk.vercel.app/students", formData)
      .then(async (response) => {
        try {
          // Fetch the list of students from the server
          const studentResponse = await axios.get("https://backend-rbk.vercel.app/students");
          const studentList = studentResponse.data.students;

          if (studentList.length > 0) {
            const latestStudent = studentList[studentList.length - 1];
            console.log("====================================");
            console.log("Latest Student:", latestStudent);
            console.log("====================================");

            if (latestStudent) {
              // Update the cohort with the latest student
              const cohortUpdateResponse = await axios.put(`https://backend-rbk.vercel.app/cohorts/${cohortId}`, {
                student: latestStudent._id,
              });

              if (cohortUpdateResponse.status === 200) {
                console.log("Cohort updated successfully");
              } else {
                console.error("Error updating cohort:", cohortUpdateResponse.data);
              }
            } else {
              console.error("Latest student is null. Cannot update cohort.");
            }
          }
        } catch (error) {
          console.error("Error fetching students:", error);
        }
      })
      .catch((error) => {
        console.error("Error adding student:", error);
      })
      .finally(() => {
        // Close the modal
        onClose();
        window.location.reload();
      });
  };

  return (
    <>
     <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
        <div className="bg-white rounded-lg p-8 w-1/3">
          <h2 className="text-2xl font-semibold mb-4 uppercase">Add Student -</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full px-4 py-3 mb-4 text-sm text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-[#ff007b] focus:ring-opacity-40 dark:border-gray-600 dark:focus:border-[#ff007b]"
          />
          <input
            type="text"
            name="familyName"
            placeholder="Family Name"
            value={formData.familyName}
            onChange={handleChange}
            className="block w-full px-4 py-3 mb-4 text-sm text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-[#ff007b] focus:ring-opacity-40 dark:border-gray-600 dark:focus:border-[#ff007b]"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="block w-full px-4 py-3 mb-4 text-sm text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-[#ff007b] focus:ring-opacity-40 dark:border-gray-600 dark:focus:border-[#ff007b]"
          />
          <input
            type="text"
            name="origin"
            placeholder="Origin"
            value={formData.origin}
            onChange={handleChange}
            className="block w-full px-4 py-3 mb-4 text-sm text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-[#ff007b] focus:ring-opacity-40 dark:border-gray-600 dark:focus:border-[#ff007b]"
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="block w-full px-4 py-3 mb-4 text-sm text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-[#ff007b] focus:ring-opacity-40 dark:border-gray-600 dark:focus:border-[#ff007b]"
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            className="block w-full px-4 py-3 mb-4 text-sm text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-[#ff007b] focus:ring-opacity-40 dark:border-gray-600 dark:focus:border-[#ff007b]"
          />
<div className="flex gap-4">
          <button onClick={addStudentAndUpdateCohort} className="bg-[#179400] px-5 py-2 font-medium text-white rounded-lg">
            Confirm
          </button>
          <button onClick={onClose} className="bg-[#ff007b] px-5 py-2 font-medium text-white rounded-lg">
            Cancel
          </button>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default AddStudentModal;
