"use client";
import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation('global');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="pt-44">
      <h2>{t('HomePage.title')}</h2>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>French</button>
      <button onClick={() => changeLanguage('ar')}>Arabic</button>
    </div>
  );
}

export default App;
