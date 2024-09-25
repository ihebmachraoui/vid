import { useTranslation } from "react-i18next";
import * as images from "../../assets/index";

const Testimonial = () => {
  const { t } = useTranslation('global');

  return (
    <>
      <section className="pt-40 pb-32 relative">
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-85 bg-fixed"
          style={{
            backgroundImage:
              "url(https://madebydesignesia.com/themes/mindthera/images/background/3.webp)",
          }}
        ></div>
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="pb-6">
              <img
                src={images.Logo.src}
                width={150}
                alt="logo"
                className="mx-auto border border-dashed rounded-full"
              />
            </div>
            <figure>
              <blockquote>
                <p className="text-white text-xl font-semibold sm:text-2xl">
                  {t('Testimonial.quote')}
                </p>
              </blockquote>
              <div className="mt-6">
                <img
                  src="https://res.cloudinary.com/dzuvxegtt/image/upload/v1727286162/services_zeqkal.webp"
                  className="w-16 h-16 mx-auto object-cover rounded-full"
                />
                <div className="mt-3">
                  <span className="block text-white font-semibold">
                    {t('Testimonial.author')}
                  </span>
                  <span className="block text-gray-200 text-sm mt-0.5">
                    {t('Testimonial.role')}
                  </span>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
