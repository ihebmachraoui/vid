import React from 'react'
import * as images from '../../assets/index'


const page = () => {
  return (
    <>
      {/* Hero Section: Image Side with Simple Header */}
      <div className="page-content relative overflow-hidden text-black">
      
        <div className="relative flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-20">
          <div className="lg:w-1/2 lg:flex lg:items-center">
            <div>
             
              <h1 className="text-3xl font-black lg:text-6xl text-black mb-4 capitalize">
              Anonymous reporting of  <span className="text-[#ff007b]">serious matters</span>
              </h1>
              <p className="text-sm lg:text-xl leading-relaxed pb-4 font-medium text-gray-700">
              By scanning this QR code, you have the opportunity to provide information concerning objectionable matters or alert us to actions that go against ethical standards, laws, or our internal regulations.
              </p>
            
             <button className='lg:hidden bg-[#ff007b] py-2 px-5 text-white rounded-lg transition ease-in-out delay-150  hover:scale-105  duration-300'>Report</button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
            <div className="relative mx-5 lg:w-96">
            <img src={images.QRCode.src} className="relative rounded-lg mx-auto hidden lg:block" alt="Hero Image" />
            </div>
          </div>
        </div>
     
      </div>
    </>
  )
}

export default page