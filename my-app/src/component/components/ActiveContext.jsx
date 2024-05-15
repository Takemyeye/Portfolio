import React, { createContext, useState } from 'react';

const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <ActiveContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveContext;