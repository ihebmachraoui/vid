import React, { useState, useEffect } from 'react';

const quotes = [
  "Patience is the key to success.",
  "Great things take time.",
  "Stay positive and strong.",
  "Good things come to those who wait.",
  "Loading your experience..."
];

function Loader() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const changeQuote = () => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    };

    const intervalId = setInterval(changeQuote, 200); // Change quote every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f0f8ff] z-50">
      <div className="text-center p-4">
        <p className="text-xl font-semibold animate-pulse text-green-700">
          {typeof window !== 'undefined' ? quotes[quoteIndex] : quotes[0]}
        </p>
      </div>
    </div>
  );
}

export default Loader;
