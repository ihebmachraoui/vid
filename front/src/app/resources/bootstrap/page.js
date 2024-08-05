"use client"
import React, { useState, useEffect } from 'react';
import * as images from '../../../assets/index';
import Html from '@/app/components/html/Html';

const BootstrapPage = () => {
  const [id, setId] = useState(null);
  const [verifid, setVerifid] = useState(0);
  const [check, setCheck] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const queryId = searchParams.get('id');
      if (queryId) {
        setId(queryId);
      }
    }

    setVerifid(localStorage.getItem('id'));
  }, []);

  useEffect(() => {
    if (verifid === id) {
      setCheck(true);
    }
  }, [verifid, id]);

  const renderHtmlComponent = () => {
    if (activeComponent) {
      setActiveComponent(null);
    } else {
      setActiveComponent(<Html />);
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="page-content py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-full">
              <div className="h-full border bg-opacity-75 lg:px-8 rounded-lg overflow-hidden text-center relative">
                <h1 className="lg:text-4xl lg:py-5 text-xl font-black underline uppercase text-[#ff007b]">
                  Bootstrap Resources
                </h1>
                <p className='lg:py-8 py-4 text-sm'>In this area, you'll have access to materials for the bootstrap phase,<br/> such as HTML, CSS, and CSS frameworks.</p>

                {check ? (
                   <div className="grid grid-cols-2 lg:flex flex-wrap -m-4 border-b-2 border-[#ff007b]">
                   <div className="lg:w-1/4 md:w-1/2 p-4 w-full" onClick={renderHtmlComponent}>
                     <a className="block relative h-32 lg:lg:h-48 rounded-2xl overflow-hidden">
                       <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={images.HTML_Cover.src} />
                     </a>
                     <div className="mt-4">
                       <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Front</h3>
                       <h2 className="text-gray-900 title-font text-lg font-bold">HTML Basics</h2>
                     </div>
                   </div>
                   <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                     <a className="block relative h-32 lg:h-48 rounded-2xl overflow-hidden">
                       <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={images.CSS_Cover.src} />
                     </a>
                     <div className="mt-4">
                       <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Front</h3>
                       <h2 className="text-gray-900 title-font text-lg font-bold">CSS Basics</h2>
                     </div>
                   </div>
                   <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                     <a className="block relative h-32 lg:h-48 rounded-2xl overflow-hidden">
                       <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={images.BS_Cover.src} />
                     </a>
                     <div className="mt-4">
                       <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Front</h3>
                       <h2 className="text-gray-900 title-font text-lg font-bold">Bootstrap Basics</h2>
                       
                     </div>
                   </div>
                   <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                     <a className="block relative h-32 lg:h-48 rounded-2xl overflow-hidden">
                       <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={images.TW_Cover.src} />
                     </a>
                     <div className="mt-4">
                       <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Front</h3>
                       <h2 className="text-gray-900 title-font text-lg font-bold">TailwindCSS Basics</h2>
                       
                     </div>
                   </div>
                  
                 
                 </div>
                ) : (
                  <div className="grid w-full place-items-center lg:px-6 py-12 sm:py-24">
                    <div className="text-center">
                      <img src={images.passcode.src} className="w-64 mx-auto" />
                      <h1 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-5xl">
                        Ask your cohort lead for the passcode.
                      </h1>
                      <a href='/resources' className="mt-6 text-base leading-7 text-gray-600 underline">
                        The passcode is required to unlock access to the resources.
                      </a>
                    </div>
                  </div>
                )}

                {/* Render the active component when it is set */}
                {activeComponent}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BootstrapPage;
