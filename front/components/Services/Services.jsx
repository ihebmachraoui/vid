"use client"
import { useTranslation } from "react-i18next";
import Button from "../../constants/Button/Button";

function BgCard({ headline, content, imageSrc }) {
  return (
    <div className="flex max-w-md flex-col items-start gap-4 overflow-hidden rounded-2xl border border-slate-200">
      <div
        className="flex w-full items-center h-72 justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className="flex flex-col items-start gap-3 px-4 py-4">
        <p className="text-xl font-semibold tracking-tight">{headline}</p>
        <p className="text-sm text-slate-500">{content}</p>
      </div>
    </div>
  );
}

function Preview() {
  const { t } = useTranslation("global");

  return (
    <section className="relative max-w-5xl mx-auto w-full px-3 mb-8 sm:px-8 lg:px-4 xl:px-0">
      <div className="flex flex-col items-center pt-24">
        <span className="rounded-full text-black font-semibold px-3 mb-2 bg-[#e1ffd4] py-2 text-center">
          {t('services.title')}
        </span>
        <h1 className="text-4xl font-extrabold mt-8 capitalize dark:text-gray-900 lg:text-6xl text-center">
          {t('services.subtitle1')}
          <span className="text-[#83cc61]">{t('services.subtitle2')}</span>
        </h1>
      </div>

      <div className="flex flex-col gap-8 py-8">
        <div className="grid w-full grid-flow-row gap-x-0 gap-y-6 sm:max-md:justify-items-center md:grid-cols-2 md:justify-items-start md:gap-6 lg:grid-cols-3">
          <BgCard
            headline={t('services.cards.careerCounseling.headline')}
            content={t('services.cards.careerCounseling.content')}
            imageSrc="https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <BgCard
            headline={t('services.cards.individualTherapy.headline')}
            content={t('services.cards.individualTherapy.content')}
            imageSrc="https://madebydesignesia.com/themes/mindthera/images/services/1.webp"
          />
          <BgCard
            headline={t('services.cards.depressionTherapy.headline')}
            content={t('services.cards.depressionTherapy.content')}
            imageSrc="https://madebydesignesia.com/themes/mindthera/images/services/6.webp"
          />
        </div>
      </div>
      <div className="flex mx-auto justify-center">
        <Button href="/services" text={t('services.showMore')} className="btn-round bg-[#296747]" />
      </div>
    </section>
  );
}
export default Preview