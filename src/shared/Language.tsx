import React from 'react'
import { useTranslation } from "react-i18next";

type Props = {}

const Language = (props: Props) => {

 const { i18n } = useTranslation();

const handleLanguageChange = (lang: string) => {
i18n.changeLanguage(lang)
}

  return (
    <div>
      <button
        onClick={() => handleLanguageChange('pl')}
        className="m-4 border-2 border-black p-2"
      >
        PL
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className="m-4 border-2 border-black p-2"
      >
        EN
      </button>
    </div>
  );
}

export default Language