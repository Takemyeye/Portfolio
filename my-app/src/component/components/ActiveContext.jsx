import React, { createContext, useState } from 'react';

const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isAbaut, setIsabaut] = useState(false);
  const [IsExperience, setIsExperience] = useState(false);

  return (
    <ActiveContext.Provider value={{ isActive, setIsActive, isAbaut, setIsabaut, IsExperience, setIsExperience }}>
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveContext;
