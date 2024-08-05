"use client"
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

const Page = () => {
  const [passcode, setPasscode] = useState('');
  const [id, setId] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const queryId = searchParams.get('id');
      if (queryId) {
        setId(queryId);
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passcode === 'RZ3F-GN5JF-KFC1-BSPH') {
      const newUniqueID = uuidv4();
      setId(newUniqueID);
      setIsValidPassword(true);
      setRedirectUrl('/resources/bootstrap');
      localStorage.setItem('id', newUniqueID);
    } else if (passcode === 'junior-passcode') {
      const newUniqueID = uuidv4();
      setId(newUniqueID);
      setIsValidPassword(true);
      setRedirectUrl('/resources/junior');
      localStorage.setItem('id', newUniqueID);
    } else if (passcode === 'senior-passcode') {
      const newUniqueID = uuidv4();
      setId(newUniqueID);
      setIsValidPassword(true);
      setRedirectUrl('/resources/senior');
      localStorage.setItem('id', newUniqueID);
    } else {
      setIsValidPassword(false);
      setRedirectUrl(null);
    }
  };

  return (
    <section className="body-font">
      <div className="page-content py-12 mx-auto">
        <div className="mt-2 md:mt-20 lg:mt-8 w-full lg:w-1/2 flex flex-col items-center p-2 lg:p-10">
          <h3 className="text-3xl font-bold tracking-tight text-left text-black lg:w-full sm:text-5xl">
            Web Development <br /> Learning Resources
          </h3>
          <p className="mt-6 text-gray-600 text-xs lg:text-base text-left leading-normal font-light">
            Welcome to our comprehensive web development learning resources. We understand that learning web development can be an exciting journey, but it can also be overwhelming, especially if you're just getting started or want to progress to a more advanced level. To make your learning experience smoother, we have organized our resources into different phases: Bootstrap, Junior, and Senior. Each phase is designed to cater to your skill level, whether you're a beginner or a seasoned developer.
          </p>
          <p className='text-xs lg:text-base pt-4'>
To ensure that you access the resources appropriate for your skill level, please enter the correct passcode for the desired phase. If you're uncertain about the passcode, kindly reach out to us for assistance. We want to make sure you have the best learning experience tailored to your current skill level.
</p>
          <div className="mt-6 flex flex-col md:flex-row w-full">
            {isValidPassword && id && redirectUrl ? (
              <Link href={{ pathname: redirectUrl, query: { id: id } }}>
                <p className="mt-6 text-3xl text-center font-semibold border border-[#ff007b] py-2 px-5 text-[#ff007b] rounded-lg hover:bg-[#ff007b] hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
                Discover Resources
                </p>
              </Link>
            ) : (
              <form onSubmit={handleSubmit} className="lg:flex flex-grow w-full">
                <input
                  type="text"
                  placeholder="Enter Passcode"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="flex flex-grow w-full lg:w-auto px-4 py-2 rounded outline-none bg-transparent text-gray-500 border border-gray-500"
                />
                <button
                  type="submit"
                  className="mt-2 md:mt-0 md:ml-2 bg-[#ff007b] shadow-lg rounded text-white px-4 py-3"
                >
                  Get Started
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
