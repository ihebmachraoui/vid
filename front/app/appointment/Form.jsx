import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import * as images from "../../assets/index";
import Button from "../../constants/Button/Button";

function Form({ handleChange, formData, onSubmit }) {
  const [errorMessages, setErrorMessages] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.firstName.trim())
      errors.firstName = "Please fill out this field.";
    if (!formData.lastName.trim())
      errors.lastName = "Please fill out this field.";
    if (!formData.phoneNumber.trim())
      errors.phoneNumber = "Please fill out this field.";
    if (!formData.age.trim()) errors.age = "Please fill out this field.";
    if (!formData.email.trim()) errors.email = "Please fill out this field.";
    if (!formData.date.trim()) errors.date = "Please fill out this field.";
    if (!formData.time.trim()) errors.time = "Please fill out this field.";
    if (!formData.consultation.trim())
      errors.consultation = "Please fill out this field.";

    setErrorMessages(errors);

    if (Object.keys(errors).length === 0) {
      onSubmit();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full items-center lg:justify-center">
      <div className="hidden lg:w-1/2 lg:flex w-full h-screen justify-center items-center">
        <img
          src={images.Appointment.src}
          alt="Consultation"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="lg:w-1/2 w-full h-full flex items-center mt-8 px-4 py-16 lg:py-0 lg:mt-24 lg:px-8">
        <div className="w-full h-full">
          <h1 className="text-2xl mb-5 font-sans font-bold text-green-800">
            Book An Appointment !
          </h1>
          <div className="mx-auto w-full">
            <form
              className="block lg:grid lg:grid-cols-2 lg:gap-4"
              onSubmit={handleFormSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="fName"
                  className="mb-2 block text-sm font-medium "
                >
                  First Name
                </label>
                <input
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  id="fName"
                  placeholder="First Name"
                  className="w-full rounded-md border border-[#64a646] bg-white py-2 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
                />
                {errorMessages.firstName && (
                  <p className="text-red-600 bg-red-50 py-2 mt-2 rounded-md px-4 text-sm">
                    {errorMessages.firstName}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="lName"
                  className="mb-2 block text-sm font-medium "
                >
                  Last Name
                </label>
                <input
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                  id="lName"
                  placeholder="Last Name"
                  className="w-full rounded-md border border-[#64a646] bg-white py-2 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
                />
                {errorMessages.lastName && (
                  <p className="text-red-600 bg-red-50 py-2 mt-2 rounded-md px-4 text-sm">
                    {errorMessages.lastName}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="Number"
                  className="mb-2 block text-sm font-medium "
                >
                  Phone Number
                </label>
                <input
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  type="tel"
                  name="phoneNumber"
                  id="Number"
                  placeholder="Phone Number"
                  className="w-full rounded-md border border-[#64a646] bg-white py-2 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
                />
                {errorMessages.phoneNumber && (
                  <p className="text-red-600 bg-red-50 py-2 mt-2 rounded-md px-4 text-sm">
                    {errorMessages.phoneNumber}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="age"
                  className="mb-2 block text-sm font-medium "
                >
                  Age
                </label>
                <input
                  value={formData.age}
                  onChange={handleChange}
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Age"
                  min="0"
                  className="w-full rounded-md border border-[#64a646] bg-white py-2 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:right-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
                />
                {errorMessages.age && (
                  <p className="text-red-600 bg-red-50 py-2 mt-2 rounded-md px-4 text-sm">
                    {errorMessages.age}
                  </p>
                )}
              </div>

              <div className="col-span-2 mb-4">
                <label
                  htmlFor="Email"
                  className="mb-2 block text-sm font-medium "
                >
                  Email
                </label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="text"
                  name="email"
                  id="Email"
                  placeholder="Email Address"
                  className="w-full rounded-md border border-[#64a646] bg-white py-2 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
                />
                {errorMessages.email && (
                  <p className="text-red-600 bg-red-50 py-2 mt-2 rounded-md px-4 text-sm">
                    {errorMessages.email}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-medium "
                >
                  Date
                </label>
                <input
                  value={formData.date}
                  onChange={handleChange}
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-[#64a646] bg-white py-2 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
                />
                {errorMessages.date && (
                  <p className="text-red-600 bg-red-50 py-2 mt-2 rounded-md px-4 text-sm">
                    {errorMessages.date}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="time"
                  className="mb-2 block text-sm font-medium "
                >
                  Time
                </label>
                <input
                  value={formData.time}
                  onChange={handleChange}
                  type="time"
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-[#64a646] bg-white py-2 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
                />
                {errorMessages.time && (
                  <p className="text-red-600 bg-red-50 py-2 mt-2 rounded-md px-4 text-sm">
                    {errorMessages.time}
                  </p>
                )}
              </div>

              <div className="col-span-2 mb-4">
                <div className="flex mb-2 items-center">
                  <label
                    htmlFor="consultation"
                    className="flex items-center text-sm font-medium "
                  >
                    Why you want to consult
                  </label>
                  <AiOutlineInfoCircle className="ml-2 " size={20} />
                </div>
                <textarea
                  value={formData.consultation}
                  onChange={handleChange}
                  name="consultation"
                  id="consultation"
                  placeholder="Describe in two lines your issue"
                  className="w-full rounded-md border border-[#64a646] bg-white py-2 px-4 text-sm font-medium outline-none focus:border-[#64a646] focus:ring-1 focus:ring-[#64a646] transition duration-300 ease-in-out"
                />
                {errorMessages.consultation && (
                  <p className="text-red-600 bg-red-50 py-2 mt-2 rounded-md px-4 text-sm">
                    {errorMessages.consultation}
                  </p>
                )}
              </div>

              <div className="col-span-2 mb-4">
                <label className="mb-2 block text-sm font-medium ">
                  Do you consider your case Urgent?
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="urgent"
                      value="yes"
                      id="radioButton1"
                      className="h-4 w-4 text-[#64a646]"
                      checked={formData.urgent === "yes"}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="radioButton1"
                      className="pl-2 text-sm font-medium "
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="urgent"
                      value="no"
                      id="radioButton2"
                      className="h-4 w-4 text-[#64a646]"
                      checked={formData.urgent === "no"}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="radioButton2"
                      className="pl-2 text-sm font-medium "
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </form>
            <div className="flex flex-col items-center mt-6">
              <Button
                text="Submit Your Appointment"
                onClick={handleFormSubmit}
                className="cursor-pointer w-full text-center font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
