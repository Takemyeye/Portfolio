import React, { useState, useEffect } from 'react';
import './styles/404.css';

const NotFound = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['Option 1', 'Option 2', 'Option 3'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.dropdown') === null) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <div className="dropdown">
        <button onClick={toggleDropdown}>
          {selectedOption || 'Select an option'}
        </button>
        {isOpen && (
          <ul>
            {options.map((option) => (
              <li key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default NotFound;
