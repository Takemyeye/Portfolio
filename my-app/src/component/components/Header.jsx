import React, { useContext, useState, useEffect, useMemo } from "react";
import './styles/header.css';
import { Link } from "react-router-dom";
import ActiveContext from "./ActiveContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope, faEarthAmericas, faEarthAsia } from '@fortawesome/free-solid-svg-icons';

const translations = {
  en: {
    home: 'Home',
    aboutMe: 'About me',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    blog: 'Blog'
  },
  ru: {
    home: 'Домой',
    aboutMe: 'Обо мне',
    experience: 'Опыт',
    skills: 'Навыки',
    contact: 'Контакты',
    blog: 'Блог'
  },
  it: {
    home: 'Home',
    aboutMe: 'Chi sono',
    experience: 'Esperienza',
    skills: 'Competenze',
    contact: 'Contatti',
    blog: 'Blog'
  }
};

const Header = () => {
  const { setIsActive, setIsabaut, setIsExperience } = useContext(ActiveContext); 
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleSkillsClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 1000); 
  };

  const handleAbautClick = () => {
    setIsabaut(true);
    setTimeout(() => {
      setIsabaut(false);
    }, 1000); 
  };

  const handleExperience = () => {
    setIsExperience(true);
    setTimeout(() => {
      setIsExperience(false);
    }, 1000); 
  };

  const handleAboutMeClick = () => {
    handleAbautClick();
  };

  const handleExperienceClick = () => {
    handleExperience();
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setLanguageMenuOpen(false);
  };

  const headerPhrase = useMemo(() => translations[language], [language]);

  return (
    <header>
      <div className={`changeLanguage ${languageMenuOpen ? 'open' : ''}`} onClick={toggleLanguageMenu}>
        <p>Language</p>
        <div className={`Language ${languageMenuOpen && 'open'}`}>
          <p onClick={() => handleLanguageChange('it')}>It</p>
          <p onClick={() => handleLanguageChange('en')}>Eng</p>
          <p onClick={() => handleLanguageChange('ru')}>Ru</p>  
          <div className='iconLenguage'>
            <FontAwesomeIcon icon={faEarthEurope} />
            <FontAwesomeIcon icon={faEarthAmericas} />
            <FontAwesomeIcon icon={faEarthAsia} />
          </div>
        </div>
      </div>
      <Link to={"/"}>
        <div className="title">S</div>
      </Link>
      <div className="austronaut"></div>
      <div className="conteiner">
        <Link to={"/"}>
          <div className="mobile">
            <div className="navigation">{headerPhrase.home}</div>
          </div>
        </Link>
        <a href="#abaut">
          <div className="navigation" onClick={handleAboutMeClick}>{headerPhrase.aboutMe}</div>
        </a>
        <a href="#experience">
          <div className="navigation" onClick={handleExperienceClick}>{headerPhrase.experience}</div>
        </a>
        <div className="navigation" onClick={handleSkillsClick}>{headerPhrase.skills}</div>
        <Link to={"https://mail.google.com/mail/u/0/#search/takemyeyehz%40gmail.come?compose=new"}>
          <div className="navigation">{headerPhrase.contact}</div>
        </Link>
        <a href="https://www.instagram.com/takemyeyehz/" target="_blank" rel="noopener noreferrer">
          <div className="mobile">
            <div className="navigation">{headerPhrase.blog}</div>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;