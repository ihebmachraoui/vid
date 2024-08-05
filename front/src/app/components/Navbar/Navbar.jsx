"use client"
import { Fragment, useState } from "react";
import * as images from '../../../assets/index'


import { Menu, Transition } from "@headlessui/react";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
    
        <header id="page-header" className="fixed w-full z-50 flex flex-none items-center shadow-lg z-1 bg-[#ff007b]">
          <div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex justify-between py-2">
              
              <div className="flex items-center">
              
                <a href="/" className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300">
                <img src={images.logoWhite.src} width={90} aria-label='Logo' alt="RBK-Logo" />
                </a>
                
              </div>
             
              <div className="flex items-center space-x-2 lg:space-x-5">
              
                <nav className="hidden lg:flex items-center space-x-2 uppercase">
                  <a href="/home" className="group text-xs font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg border text-white dark:border-transparent">
                 
                    <span>Home</span>
                  </a>
                  <a href="#" className="group text-xs font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-white border border-transparent  ">
             
                    <span>About</span>
                  </a>
                 
                  <a href="#" className="group text-xs font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-white border border-transparent  ">
                
                    <span>Features</span>
                  </a>

                  <a href="#" className="group text-xs font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-white border border-transparent">
               
                    <span>Help</span>
                  </a>

                  <a href="#" className="group text-xs font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-white border border-transparent ">
               
                    <span>Contact</span>
                  </a>


                  <div className="relative mx-auto text-gray-600">
  <input className="border border-gray-300 bg-white h-9 px-5 pr-8 text-sm rounded-lg focus:outline-none" type="search" name="search" placeholder="Search" />
  <button type="submit" className="absolute right-0 top-0 mt-2.5 mr-4" aria-label='Search-Button'>
    <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 56.966 56.966">
      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
    </svg>
  </button>
</div>

                </nav>
              
               
                <Menu as="div" className="relative inline-block">
                 
                  <Menu.Button className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-dark hover:border-gray-300 hover:text-[#ff007b] hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none">
                    <span>Student Profile</span>
                    <svg className="hi-mini hi-chevron-down inline-block w-5 h-5 opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                  </Menu.Button>
                 
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-90"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-90"
                  >
                    <Menu.Items className="absolute right-0 origin-top-right z-10 mt-2 w-48 dark:shadow-gray-500 focus:outline-none">
                      <div className="bg-white ring-1 ring-black ring-opacity-5 divide-y">
                        <div className="p-2.5 space-y-1">
                        
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${
                                  active ? " bg-gray-100 text-[#ff007b] dark:border-transparent" : "  text-black  dark:active:border-gray-600"

                                }`}
                              >
                                <svg className="flex-none hi-mini hi-flag inline-block w-5 h-5 opacity-80 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z" /></svg>
                                <span className="grow">Notifications</span>
                                <div className="font-semibold inline-flex px-1.5 py-0.5 leading-4 text-xs rounded-full border  text-white dark:bg-[#ff007b] dark:border-[#ff007b]">5</div>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="p-2.5 space-y-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${
                                  active ? " bg-gray-100 text-[#ff007b] dark:border-transparent" : "  text-black  dark:active:border-gray-600"

                                }`}
                              >
                                <svg className="flex-none hi-mini hi-user-circle inline-block w-5 h-5 opacity-80 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" /></svg>
                                <span className="grow">Account</span>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${
                                  active ? " bg-gray-100 text-[#ff007b] dark:border-transparent" : "  text-black  dark:active:border-gray-600"

                                }`}
                              >
                                <svg className="flex-none hi-mini hi-cog-6-tooth inline-block w-5 h-5 opacity-80 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
                                <span className="grow">Settings</span>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="p-2.5 space-y-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${
                                  active ? " bg-gray-100 text-[#ff007b] dark:border-transparent" : "  text-black  dark:active:border-gray-600"

                                }`}
                              >
                                <svg className="flex-none hi-mini hi-lock-closed inline-block w-5 h-5 opacity-80 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" /></svg>
                                <span className="grow">Sign out</span>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
               
                </Menu>
              

                <div className="lg:hidden">
                  <button
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    type="button"
                    className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-white hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                    >
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-menu inline-block w-5 h-5"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                  </button>
                </div>

              </div>
        
            </div>

            {/* Mobile Navigation */}
            <div
              className={`lg:hidden ${
                mobileNavOpen ? "" : "hidden"
              }`}
            >
              <nav className="flex flex-col space-y-2 py-4 border-t ">
                <a href="#" className="group text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg border dark:text-white /75 dark:border-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                className="hi-mini inline-block w-5 h-5 opacity-80 group-hover:opacity-100 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
                  <span>Dashboard</span>
                </a>
                <a href="#" className="group text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded-lg text-white ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid hi-mini inline-block w-5 h-5 opacity-80 group-hover:opacity-100 text-white" viewBox="0 0 16 16">
  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
</svg>
                  <span>Cohorts</span>
                </a>
                <a href="#" className="group text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded-lg text-white border border-transparent  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hi-mini inline-block w-5 h-5 opacity-80 group-hover:opacity-100 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
                  <span>Staff</span>
                </a>
                <a href="#" className="group text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded-lg text-white border border-transparent  ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle hi-mini inline-block w-5 h-5 opacity-80 group-hover:opacity-100 text-white" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
                  <span>Help</span>
                </a>
              </nav>
            </div>
            {/* END Mobile Navigation */}
          </div>
        </header>
     
      {/* END Page Container */}
    </>
  )
}