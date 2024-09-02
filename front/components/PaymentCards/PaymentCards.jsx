import React from "react";

const PaymentCards = () => {
  return (
    <>
      <section className="bg-neutral-900 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 xl:px-0">
          <h1 className="text-5xl md:text-6xl font-semibold text-white">
            <span className="text-[#83cc61]">SociAlly Consulting:</span> Where
            Understanding Meets Action
          </h1>
          <div className="max-w-4xl mt-5">
            <p className="text-lg text-neutral-400">
              At SociAlly Consulting, we turn sociological insights into
              actionable solutions. Our expertise bridges understanding and
              real-world impact, guiding you to make informed decisions and
              drive meaningful change. Discover how our tailored consultations
              can translate theory into practice.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pt-4 bg-white">
        <div className="relative z-10">
          <div className="max-w-5xl mx-auto px-4 xl:px-0">
            <h2 className="text-neutral-600 mb-4">
              Available Payment Options for Booking Your Appointment
            </h2>
            <div className="flex justify-between items-center gap-6 mb-4">
              <img
                src="https://d17.tn/images/logod17bnk.png"
                alt="D17 Bank Logo"
                className="w-9 h-auto py-3 lg:py-5 md:w-20 lg:w-22 lg:h-24"
              />
              <img
                src="https://www.tunisienumerique.com/wp-content/uploads/2019/06/Poste-tunisienne-lutte-contre-le-blanchiment-d-argent-l-economiste-maghrebin-1.png"
                alt="Poste Tunisienne Logo"
                className="w-9 h-auto py-3 lg:py-5 md:w-20 lg:w-22 lg:h-24"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png"
                alt="Mastercard Logo"
                className="w-9 h-auto py-3 lg:py-5 md:w-20 lg:w-22 lg:h-24"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png"
                alt="Visa Logo"
                className="w-9 h-auto py-3 lg:py-5 md:w-20 lg:w-22 lg:h-24"
              />
              <img
                src="https://www.edigitalagency.com.au/wp-content/uploads/PayPal-icon-full-colour-png.png"
                alt="Visa Logo"
                className="w-9 h-auto py-3 lg:py-5 md:w-20 lg:w-22 lg:h-24"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentCards;
