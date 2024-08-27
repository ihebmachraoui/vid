import React from "react";
import TooltipButton from "./../../constants/Tooltip/TooltopButton";

function Form({ handleChange, formData , onSubmit}) {
	return (
		<div class="flex flex-col items-center lg:justify-center px-8 py-16 lg:py-8 lg:mx-40">
			<div>
				<h1 className="text-5xl font-jost mb-7">Step 1</h1>
			</div>
			<div class="mx-auto w-full ">
				<form className="block lg:flex lg:justify-between">
					<div>
						<div class="-mx-3 flex flex-wrap">
							<div class="w-full px-3 sm:w-1/2">
								<div class="mb-5">
									<label
										for="fName"
										class="mb-3 block text-base font-medium text-[#07074D]">
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
										class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e3e3e3] focus:shadow-md"
									/>
								</div>
							</div>
							<div class="w-full px-3 sm:w-1/2">
								<div class="mb-5">
									<label
										for="lName"
										class="mb-3 block text-base font-medium text-[#07074D]">
										Last Name
									</label>
									<input
										value={formData.lastName}
										onChange={handleChange}
										type="text"
										name="lastName"
										id="lName"
										placeholder="Last Name"
										class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
							</div>
						</div>
						<div class="-mx-3 flex flex-wrap">
							<div class="w-full px-3 sm:w-1/2">
								<div class="mb-5">
									<label
										for="Number"
										class="mb-3 block text-base font-medium text-[#07074D]">
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
										class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e3e3e3] focus:shadow-md"
									/>
								</div>
							</div>
							<div class="w-full px-3 sm:w-1/2">
								<div class="mb-5">
									<label
										for="age"
										class="mb-3 block text-base font-medium text-[#07074D]">
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
										class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
							</div>
						</div>
						<div class="-mx-3">
							<div class="w-full px-3">
								<div class="mb-5">
									<div className="flex mb-3  items-center">
										<label
											for="Email"
											class=" flex items-center text-base font-medium text-[#07074D]">
											Email
										</label>
									</div>
									<input
										value={formData.email}
										onChange={handleChange}
										type="text"
										name="email"
										id="Email"
										placeholder="Email Address"
										class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e3e3e3] focus:shadow-md"
									/>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div class="-mx-3 flex flex-wrap">
							<div class="w-full px-3 sm:w-1/2">
								<div class="mb-5">
									<label
										for="date"
										class="mb-3 block text-base font-medium text-[#07074D]">
										Date
									</label>
									<input
										value={formData.date}
										onChange={handleChange}
										type="date"
										name="date"
										id="date"
										class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
							</div>
							<div class="w-full px-3 sm:w-1/2">
								<div class="mb-5">
									<label
										for="time"
										class="mb-3 block text-base font-medium text-[#07074D]">
										Time
									</label>
									<input
										value={formData.time}
										onChange={handleChange}
										type="time"
										name="time"
										id="time"
										class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
							</div>
						</div>

						<div class="-mx-3">
							<div class="w-full px-3">
								<div class="mb-5">
									<div className="flex mb-3  items-center">
										<label
											for="consultation"
											class=" flex items-center text-base font-medium text-[#07074D]">
											Why you want to consult
										</label>
										<TooltipButton className="" />
									</div>
									<textarea
										value={formData.consultation}
										onChange={handleChange}
										type="text-area"
										name="consultation"
										id="consultation"
										placeholder="Describe in two lines your issue"
										class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e3e3e3] focus:shadow-md"
									/>
								</div>
							</div>
						</div>

						<div class="mb-5">
							<label class="mb-3 block text-base font-medium text-[#07074D]">
								Do you consider your case Urgent ?
							</label>
							<div className="flex items-center space-x-6">
								<div className="flex items-center">
									<input
										type="radio"
										name="urgent"
										value="yes"
										id="radioButton1"
										className="h-5 w-5"
										checked={formData.urgent === "yes"}
										onChange={handleChange}
									/>
									<label
										htmlFor="radioButton1"
										className="pl-3 text-base font-medium text-[#07074D]">
										Yes
									</label>
								</div>
								<div className="flex items-center">
									<input
										type="radio"
										name="urgent"
										value="no"
										id="radioButton2"
										className="h-5 w-5"
										checked={formData.urgent === "no"}
										onChange={handleChange}
									/>
									<label
										htmlFor="radioButton2"
										className="pl-3 text-base font-medium text-[#07074D]">
										No
									</label>
								</div>
							</div>
						</div>
					</div>
				</form>
				<div className="flex flex-col items-center">
					
                    
                    <button onClick={onSubmit} class="hover:shadow-form rounded-md bg-[#ffb7ce] py-3 px-8 text-center text-base font-semibold text-white outline-none">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}

export default Form;
