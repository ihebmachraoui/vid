import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../constants/Button/Button";

const Newsletter = () => {
  const { t } = useTranslation("global");

  return (
    <section className="bg-[#143324] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:flex-1 xl:w-0 mb-8 lg:mb-0">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {t("Newsletter.title")}
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
              {t("Newsletter.description")}
            </p>
          </div>
          <div className="sm:w-full sm:max-w-md xl:ml-8">
            <form
              className="flex flex-col sm:flex-row"
              id="newsletter-form"
              target="_blank"
              aria-labelledby="newsletter-title"
            >
              <input
                type="email"
                autoComplete="email"
                required
                className="w-full bg-transparent border border-white px-5 py-3 text-white placeholder-white focus:outline-none focus:ring-0"
                placeholder={t("Newsletter.placeholder")}
                aria-label="Email address"
              />
              <Button
                text={t("Newsletter.subscribe")}
                type="submit"
                className="mt-3 sm:mt-0 sm:ml-3 flex-shrink-0 border open-sans border-white px-5 py-3 text-base  text-white"
              />
            </form>
            <p className="mt-3 text-sm text-indigo-200">
              {t("Newsletter.footer")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
