import React, { useState } from 'react';
import { TiTickOutline } from 'react-icons/ti';

const AddCohortForm = ({ onCohortCreate }) => {
  const [formData, setFormData] = useState({
    name: '',
    region: ''
    });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCohortCreate = () => {
    onCohortCreate(formData);
    window.location.reload()
  };

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md hover:shadow-xl rounded-lg border mx-auto">
      <div className="relative h-10 rounded-lg overflow-hidden">
        <img
          alt="Cohort placeholder"
          className="object-contain w-full h-full"
          src="https://cdn-icons-png.flaticon.com/512/3342/3342137.png"
        />
      </div>
      <div className="mt-4 space-y-3">
  <div className="flex space-x-3">
    <input
      className="w-1/2 p-2 rounded border focus:outline-none focus:border-blue-400"
      type="text"
      name="name"
      value="RBK Cohort -"
      readOnly
    />
    <input
      className="w-1/2 p-2 rounded border focus:outline-none focus:border-blue-400"
      type="text"
      name="name"
      value={formData.name}
      placeholder="Cohort Number"
      onChange={handleInputChange}
    />
  </div>
  <input
    className="w-full p-2 rounded border focus:outline-none focus:border-blue-400"
    type="text"
    name="region"
    value={formData.region}
    placeholder="Region"
    onChange={handleInputChange}
  />
</div>
<div className="relative mx-auto flex justify-center pt-5">
       
       <button
         className="flex text-xs uppercase font-semibold text-white bg-[#ff007b] p-2 px-4 rounded-md"
         onClick={handleCohortCreate}
       >
        <TiTickOutline className='w-4 h-4' /> Create
       </button>
     </div>
    </div>
  );
};

export default AddCohortForm;
