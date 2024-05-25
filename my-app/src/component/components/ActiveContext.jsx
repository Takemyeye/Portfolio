import React, { createContext, useState } from 'react';

const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isExperience, setIsExperience] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <ActiveContext.Provider
      value={{
        isActive,
        setIsActive,
        isAbout,
        setIsAbout,
        isExperience,
        setIsExperience,
        language,
        handleLanguageChange,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveContext;