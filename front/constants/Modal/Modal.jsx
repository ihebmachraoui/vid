'use client'
import React , {useState} from 'react'

function Modal({setPaymentFailed ,paymentFailed}) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    					<div className="fixed inset-0 z-50 flex items-center justify-center">
						<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
						<div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
							<div className="relative bg-white rounded-lg shadow dark:bg-gray-700"></div>
    		<div>
										<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
											<h3 className="text-xl font-semibold  " style={{color:"red"}}>
												Payment Failed
											</h3>
											<button
												onClick={() => setPaymentFailed(!paymentFailed)}
												type="button"
												className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
												data-modal-hide="static-modal">
												<svg
													className="w-3 h-3"
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 14 14">
													<path
														stroke="currentColor"
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
													/>
												</svg>
												<span className="sr-only">Close modal</span>
											</button>
										</div>
										<div className="p-4 md:p-5 space-y-4 ">
											<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 ">
												The payment has failed , please check your balance or your credentials and try again
											</p>
										</div>
										<div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
											
												<button
													onClick={() => setPaymentFailed(!paymentFailed)}
													data-modal-hide="static-modal"
													type="button"
													className="text-white bg-primary hover:bg-[#599e54] focus:ring-4 focus:outline-none focus:ring-[#83cc61] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#83cc61] dark:hover:bg-[#599e54] dark:focus:ring-[#83cc61]">
													Try Again
												</button>
											
										</div>
									</div>
                                    </div>
                                    </div>
    </div>
  )
}

export default Modal