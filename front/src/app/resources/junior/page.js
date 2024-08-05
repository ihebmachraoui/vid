"use client"
import React, { useState, useEffect } from 'react';

const JuniorPhase = () => {
  const [id, setId] = useState(null);
  const [verifid, setVerifid] = useState(0);
  const [check, setCheck] = useState(false);

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

  return (
    <section className="text-gray-600 body-font">
      <div className="page-content py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-green-100 border bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 className="title-font sm:text-2xl text-2xl font-black uppercase text-gray-900 mb-3">
                Junior Phase<br />Resources
              </h1>
              {check ? (
                <p className="leading-relaxed mb-3">
                  Here goes your content
                </p>
              ) : (
                <p>Ask your cohort lead for the password</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JuniorPhase;
