"use client";
import { useTranslation } from "react-i18next";
import * as Images from '../../assets/index';

const PaymentCards = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <section className="bg-neutral-900 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 xl:px-0">
          <h1 className="text-4xl md:text-6xl font-semibold text-white">
            <span className="text-[#83cc61]">{t('PaymentCards.title')}</span> {t('PaymentCards.subtitle')}
          </h1>
          <div className="max-w-4xl mt-5">
            <p className="text-base text-neutral-400">
              {t('PaymentCards.description')}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pt-4 bg-white">
        <div className="relative z-10">
          <div className="max-w-5xl mx-auto px-4 xl:px-0">
            <h2 className="text-neutral-600 mb-4">
              {t('PaymentCards.paymentOptions')}
            </h2>
            <div className="flex justify-between items-center gap-6 mb-4">
              <img
                src={Images.D17.src}
                alt={t('PaymentCards.bankLogoAlt')}
                className="w-9 h-auto py-3 lg:py-5 md:w-20 lg:w-22 lg:h-24"
              />
              <img
                src="https://www.tunisienumerique.com/wp-content/uploads/2019/06/Poste-tunisienne-lutte-contre-le-blanchiment-d-argent-l-economiste-maghrebin-1.png"
                alt={t('PaymentCards.posteLogoAlt')}
                className="w-9 h-auto py-3 lg:py-5 md:w-20 lg:w-22 lg:h-24"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png"
                alt={t('PaymentCards.mastercardLogoAlt')}
                className="w-9 h-auto py-3 lg:py-5 md:w-20 lg:w-22 lg:h-24"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png"
                alt={t('PaymentCards.visaLogoAlt')}
                className="w-9 h-auto py-3 lg:py-5 md:w-20 lg:w-22 lg:h-24"
              />
              <img
                src="https://www.edigitalagency.com.au/wp-content/uploads/PayPal-icon-full-colour-png.png"
                alt={t('PaymentCards.paypalLogoAlt')}
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
